import Image from "next/image";
import Hero from "./components/PageComponents/Hero/Hero";
import EventDescription from "./components/PageComponents/EventDescription/EventDescription";
import ImportantDates from "./components/common/ImportantDates/ImportantDates";
import EventSpeakers from "./components/PageComponents/EventSpeakers/EventSpeakers";
import EventSchedule from "./components/PageComponents/EventSchedule/EventSchedule";
import EventVenue from "./components/PageComponents/EventVenue/EventVenue";
import Hotels from "./components/PageComponents/Hotels.tsx/Hotels";
import organizerImage from "public/img/buplogo.png";
import technicalSponsorImage from "public/img/ieee.png";
import sponsorDesktop from "public/img/sponsor/sponsor_desktop.png";
import sponsorMobile from "public/img/sponsor/sponsor_mobile.png";
import ContactForm from "./components/PageComponents/ContactForm/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <EventDescription />
      <ImportantDates />
      <hr className="border-b-1 border-[#9195a2]  w-[80%] mx-auto" />
      <EventSpeakers />
      <hr className="border-b-1 border-[#9195a2]  w-[80%] mx-auto" />
      <EventSchedule />
      <hr className="border-b-1 border-[#9195a2]  w-[80%] mx-auto" />
      <EventVenue />
      <hr className="border-b-1 border-[#9195a2]  w-[80%] mx-auto" />
      <Hotels />
      <hr className="border-b-1 border-[#9195a2]  w-[80%] mx-auto" />
      <section id="organizer" className="py-14 px-2">
        <div className="">
          <div className="flex items-center flex-col">
            <h2 className="text-4xl font-bold text-center my-2 mb-4">Sponsored By</h2>
            <Image src={sponsorMobile} alt="Organizer" className="md:hidden w-full" />
            <Image src={sponsorDesktop} alt="Organizer" className="hidden md:block w-[80%] h-auto" />
          </div>
        </div>
        <div className="flex flex-row justify-around flex-wrap md:mt-10 mt-5">
          <div className="flex items-center flex-col my-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center my-2 mb-10">Organized By</h2>
            <Image src={organizerImage} alt="Organizer" className="h-[8rem] w-auto" />
            <p className="text-center">
              Bangladesh University of Professionals <br />
              Mirpur Cantonment, Dhaka-1216
            </p>
          </div>
          <div className="flex items-center flex-col my-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center my-2 mb-10">Technical Co-Sponsors</h2>
            <Image src={technicalSponsorImage} alt="Technical Sponsor" className="h-[6rem] w-auto" />
          </div>
        </div>
      </section>
      <hr className="border-b-1 border-[#9195a2]  w-[80%] mx-auto" />
      <ContactForm />
    </>
  );
}
