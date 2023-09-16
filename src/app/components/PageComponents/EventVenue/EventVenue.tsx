import Image from "next/image";

import venue1 from "public/img/slide1.jpg";
import venue2 from "public/img/slide2.jpg";
import venue3 from "public/img/slide3.jpg";
import venue0 from "public/img/venue-info-bg.jpg";

const EventVenue = () => {
  return (
    <section id="venue" className="p-14">
      <div className="container">
        <div className="section-header flex flex-col md:flex-col items-center">
          <h2 className="text-4xl font-bold text-center my-2 mb-10">EVENT VENUE</h2>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14597.632586772717!2d90.3576472!3d23.8396364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7655eae2540befbe!2sBangladesh%20University%20of%20Professionals!5e0!3m2!1sen!2sbd!4v1598335798482!5m2!1sen!2sbd"
                className="h-full w-full"
              ></iframe>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="absolute text-white font-bold  md:text-3xl w-[90%] text-center top-[40%] z-10">Bangladesh University Of Professionals</div>
              <div className="absolute bg-[#060C22CC] h-full w-full"></div>
              <Image src={venue0} alt="venue0" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3">
              <Image src={venue1} alt="venue1" />
            </div>
            <div className="w-full md:w-1/3">
              <Image src={venue2} alt="venue2" />
            </div>
            <div className="w-full md:w-1/3">
              <Image src={venue3} alt="venue3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventVenue;
