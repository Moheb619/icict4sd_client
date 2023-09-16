import Image from "next/image";
import styles from "./Hero.module.scss";
import Link from "next/link";
import Countdown from "../Countdown/Countdown";
// import ConferenceLogo from "public/img/conf/Conferece_logo.png";
import ConferenceLogo from "public/img/icict_logo.png";
const Hero = () => {
  return (
    <section id="hero" className="hero min-h-screen relative bg-[url('/img/intro-bg.jpg')]">
      <div className="absolute bg-[#060C22CC] h-full w-full"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image src={ConferenceLogo} alt="logo" className="mb-5 mx-auto max-w-[135px]" />
          <p className="mb-5 text-3xl md:text-5xl text-red-700 font-bold">
            2<sup>ND</sup> INTERNATIONAL CONFERENCE
          </p>
          <p className="mb-5 text-lg md:text-2xl">ON</p>
          <p className="mb-5 text-xl md:text-3xl">INFORMATION AND COMMUNICATION TECHNOLOGY FOR SUSTAINABLE DEVELOPMENT</p>
          <p className="mb-5 text-lg md:text-2xl">21-23 September, 2023, Bangladesh University of Professionals</p>
          <button className="btn btn-primary">
            <Link href={"/#description"}>About The Event</Link>
          </button>
          <Countdown className="md:absolute md:top-0 md:right-2" caption="Conference Starts In" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
