import Image from "next/image";
import Link from "next/link";
import CallForPaperICICT4SD from "public/img/Call for Paper ICICT4SD.jpg";
const CallForPapers = () => {
  return (
    <div className="p-14">
      <h1 className="text-4xl font-bold text-center">Call For Papers</h1>
      <br />
      <br />
      <p className="mt-6">
        <Image src={CallForPaperICICT4SD} alt="img" title="img" className="w-full object-cover rounded-t-lg" id="whoobe-ixxe5" />
      </p>
    </div>
  );
};

export default CallForPapers;
