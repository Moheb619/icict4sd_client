import Head from "next/head";
import Footer from "./components/common/Footer/Footer";
import MoveToTopButton from "./components/common/MoveToTopButton/MoveToTopButton";
import Nav from "./components/common/Nav/Nav";
import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";

export const metadata = {
  title: "ICICT4SD",
  description: "Created by Moheb with next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <Nav />
          {children}
          <Footer />
          <MoveToTopButton />
        </AuthContextProvider>
      </body>
    </html>
  );
}
