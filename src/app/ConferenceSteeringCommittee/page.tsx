import cheifPatron from "public/img/Committee/vc.jpeg";
import patron from "public/img/Committee/provc.jpg";
import conferenceChair from "public/img/Committee/fstDean.jpeg";
import ImageCard from "../components/common/ImageCard/ImageCard";

const ConferenceSteeringCommitteeDetails = [
  { name: "Chief Patron", bio: "Maj Gen Md Mahbub-ul Alam, /nndc, afwc, psc, MPhil, /nPhD Vice Chancellor, /nBangladesh University of Professionals", url: cheifPatron },
  { name: "Patron", bio: "Professor Dr. Khondoker Mokaddem Hossain,/nPro-Vice Chancellor,/nBangladesh University of Professionals", url: patron },
  { name: "Conference Chair", bio: "Brig Gen Md Mustafa Kamal, /nSGP Dean, FST, /nBangladesh University of Professionals", url: conferenceChair },
];
const ConferenceSteeringCommittee = () => {
  return (
    <div className="p-4 md:p-14 flex flex-col items-center">
      <h1 className="text-2xl md:text-4xl font-bold text-center">Conference Steering Committee</h1>
      <div className="flex flex-wrap justify-center mt-5 md:mt-10">
        {ConferenceSteeringCommitteeDetails.map((member, index) => {
          return (
            <div key={member.name} className="mx-2 md:mx-5 my-2 md:my-0">
              <ImageCard name={member.name} bio={member.bio} url={member.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConferenceSteeringCommittee;
