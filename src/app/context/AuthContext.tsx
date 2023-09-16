"use client";
import { useRouter } from "next/navigation";
import { Dispatch, ReactNode, createContext, useEffect, useMemo, useReducer, useState } from "react";
const INITIAL_STATE = {
  user: typeof window !== "undefined" ? (localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : "") : "",
  loading: false,
  error: null,
  dispatch: (() => undefined) as Dispatch<any>,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      const now = new Date();
      typeof window !== "undefined" ? localStorage.setItem("expiry", JSON.stringify(now.getTime() + 604800000)) : "";
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      typeof window !== "undefined" ? localStorage.removeItem("expiry") : "";
      typeof window !== "undefined" ? localStorage.removeItem("user") : "";
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const router = useRouter();
  const keyRemoverFunction = () => {
    dispatch({ type: "LOGOUT" });
  };
  const expiry = useMemo(() => {
    if (typeof window !== "undefined" && state.user !== ("" || null) && localStorage.getItem("expiry")) {
      return JSON.parse(localStorage.getItem("expiry")!);
    }
    return null;
  }, [state.user]);

  useEffect(() => {
    let now = new Date().getTime();
    if (typeof window !== "undefined" && expiry !== null && now < expiry) {
      if (state.user !== (null || "")) {
        localStorage.setItem("user", JSON.stringify(state.user));
      } else {
        keyRemoverFunction();
      }
    } else {
      keyRemoverFunction();
    }
  }, [expiry, state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
