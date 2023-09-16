"use client";
import { useContext, useState } from "react";
import styles from "./Nav.module.scss";
import Link from "next/link";
import { RiAdminFill } from "react-icons/ri";
import { AuthContext } from "@/app/context/AuthContext";
import axios from "axios";

const Nav = () => {
  const { loading, error, dispatch } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const [activeSubmenuIndex, setActiveSubmenuIndex] = useState<Number | null>(null);
  const handleSubmenuOpen = (index: Number) => {
    setActiveSubmenuIndex(index);
  };
  const handleSubmenuClose = () => {
    setActiveSubmenuIndex(null);
  };
  const handleSignOut = async () => {
    await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}auth/logout`, { withCredentials: true });
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="navbar bg-black text-white" onMouseLeave={() => handleSubmenuClose()}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72 text-black lg:hidden">
            <li>
              <Link href={"/#description"}>About</Link>
            </li>
            <li>
              <Link href={"/#speakers"}>Speakers</Link>
            </li>
            <li>
              <Link href={"/#schedule"}>Schedule</Link>
            </li>
            <li>
              <a>Committee</a>
              <ul className="p-2 lg:hidden">
                <li>
                  <Link href={"/ConferenceSteeringCommittee"}>Conference Steering Committee</Link>
                </li>
                <li>
                  <Link href={"/OrganizingCommittee"}>Organizing Committee</Link>
                </li>
                <li>
                  <Link href={"/InternationalAdvisoryCommittee"}>International Advisory Committee</Link>
                </li>
                <li>
                  <Link href={"/NationalAdvisoryCommittee"}>National Advisory Committee</Link>
                </li>
                <li>
                  <Link href={"/TechnicalCommittee"}>Technical Program Committee</Link>
                </li>
                <li>
                  <Link href={"/FinanceCommittee"}>Finance Committee</Link>
                </li>
                <li>
                  <Link href={"/PublicationCommittee"}>Publication Committee</Link>
                </li>
                <li>
                  <Link href={"/Webmaster"}>Webmaster</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"/#venue"}>Venue</Link>
            </li>
            <li>
              <a>Authors</a>
              <ul className="p-2 lg:hidden">
                <li>
                  <Link href={"/CallForPapers"}>Call For Papers</Link>
                </li>
                <li>
                  <Link href={"/Scopes"}>Scope</Link>
                </li>
                <li>
                  <Link href={"/CameraReadySubmissionGuidelines"}>Paper Submission Guidelines</Link>
                </li>
                <li>
                  <Link href={"/RegistrationAndPayment"}>Registration & Payment</Link>
                </li>
                <li>
                  <Link href={"/ImportantDate"}>Important Dates</Link>
                </li>
                <li>
                  <Link href={"/TechnicalSessionSchedule"}>Technical Session Schedule</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"/#organizer"}>Sponsor</Link>
            </li>
            <li>
              <Link href={"/#contact"}>Contact</Link>
            </li>
            {user && user.role === "ADMIN" && (
              <>
                <li>
                  <Link href={"/UserMessages"}>
                    <RiAdminFill />
                    User Message
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
          ICICT4SD
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/#description"} className={styles.menu_item}>
              About
            </Link>
          </li>
          <li>
            <Link href={"/#speakers"} className={styles.menu_item}>
              Speakers
            </Link>
          </li>
          <li>
            <Link href={"/#schedule"} className={styles.menu_item}>
              Schedule
            </Link>
          </li>
          <li tabIndex={0} onMouseEnter={() => handleSubmenuOpen(1)}>
            <details open={activeSubmenuIndex === 1} className={`${styles.menu_item} text-white`}>
              <summary className={`${styles.menu_item}`}>Committee</summary>
              <ul className="p-2 text-black">
                <li>
                  <Link href={"/ConferenceSteeringCommittee"}>Conference Steering Committee</Link>
                </li>
                <li>
                  <Link href={"/OrganizingCommittee"}>Organizing Committee</Link>
                </li>
                <li>
                  <Link href={"/InternationalAdvisoryCommittee"}>International Advisory Committee</Link>
                </li>
                <li>
                  <Link href={"/NationalAdvisoryCommittee"}>National Advisory Committee</Link>
                </li>
                <li>
                  <Link href={"/TechnicalCommittee"}>Technical Program Committee</Link>
                </li>
                <li>
                  <Link href={"/FinanceCommittee"}>Finance Committee</Link>
                </li>
                <li>
                  <Link href={"/PublicationCommittee"}>Publication Committee</Link>
                </li>
                <li>
                  <Link href={"/Webmaster"}>Webmaster</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href={"/#venue"} className={styles.menu_item}>
              Venue
            </Link>
          </li>
          <li tabIndex={0} onMouseEnter={() => handleSubmenuOpen(2)}>
            <details open={activeSubmenuIndex === 2} className={styles.menu_item}>
              <summary className={styles.menu_item}>Authors</summary>
              <ul className="p-2 text-black">
                <li>
                  <Link href={"/CallForPapers"}>Call For Papers</Link>
                </li>
                <li>
                  <Link href={"/Scopes"}>Scope</Link>
                </li>
                <li>
                  <Link href={"/CameraReadySubmissionGuidelines"}>Camera Ready Submission Guidelines</Link>
                </li>
                <li>
                  <Link href={"/RegistrationAndPayment"}>Registration & Payment</Link>
                </li>
                <li>
                  <Link href={"/ImportantDate"}>Important Dates</Link>
                </li>
                <li>
                  <Link href={"/TechnicalSessionSchedule"}>Technical Session Schedule</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href={"/#organizer"} className={styles.menu_item}>
              Sponsor
            </Link>
          </li>
          <li>
            <Link href={"/#contact"} className={styles.menu_item}>
              Contact
            </Link>
          </li>
          {user && user.role === "ADMIN" && (
            <>
              <li>
                <Link href={"/UserMessages"} className={styles.menu_item}>
                  <RiAdminFill />
                  User Message
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className={`navbar-end flex flex-col items-end md:flex-col ${user ? "md:items-center" : "md:items-end"}`}>
        <div className="font-bold"> {user ? "Hello " + user.name : ""}</div>
        <div className="flex flex-row">
          {user && (
            <>
              <button onClick={() => handleSignOut()} className="bg-red-500 hover:bg-red-700 text-white font-bold  h-[2rem] px-2 rounded-full mx-1 flex items-center justify-center text-xs">
                <span style={{ textShadow: "1px 1px 5px black" }}>Logout</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
