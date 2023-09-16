const EventDescription = () => {
  return (
    <section id="description" className="relative w-full bg-[url('/img/about-bg.jpg')] -z-10">
      <div className="absolute bg-[#060C22CC] h-full w-full -z-20"></div>
      <div className="flex flex-col md:flex-row p-4 md:p-14 px-2 md:px-32 mx-auto text-white">
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold">ABOUT THE EVENT</h3>
          <p className="mt-2">
            Bangladesh University of Professionals (BUP) is a unique public university administered by the Armed Forces upholding the motto &quot;Excellence Through Knowledge&quot;. BUP will host the
            International Conference on Information and Communication Technology for Sustainable Development (ICICT4SD) at Bangladesh University of Professionals, Dhaka to attain the vision of Digital
            Bangladesh. In order to fulfill the aspiration of the Bangladesh Government of achieving Sustainable Development Goals, the theme of the conference is &quot;Shaping a Sustainable Future
            through Advancement in Information and Communication Technology&quot;. This conference will be a platform for creating and sharing ideas among engineers, researchers, scientists,
            industrialists, and students.{" "}
            <span className="text-red-700 font-semibold">Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements.</span>
          </p>
        </div>
        <div className="w-full md:w-1/4 mt-8 md:mt-0 md:pl-8">
          <h3 className="text-2xl md:text-3xl font-bold">Where</h3>
          <p className="mt-2">Bangladesh University of Professionals Mirpur Cantonment Dhaka-1216, Bangladesh</p>
        </div>
        <div className="w-full md:w-1/4 mt-8 md:mt-0 md:pl-8">
          <h3 className="text-2xl md:text-3xl font-bold">When</h3>
          <p className="mt-2">21-23 September, 2023</p>
        </div>
      </div>
    </section>
  );
};

export default EventDescription;
