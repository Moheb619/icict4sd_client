import publicationChair from "public/img/Committee/nasir.jpg";
import publicationSecretary from "public/img/Committee/Afrina Khatun.jpg";
import ImageCard from "../components/common/ImageCard/ImageCard";
const PublicationCommitteeDetails = [
  { name: "Publication Chair", bio: "Dr. Mohammaed Nasir Uddin, /nAssociate Professor,/nDept. of ICT,FST, /nBangladesh University of Professionals", url: publicationChair },
  { name: "Publication Secretary", bio: "Afrina Khatun, /nLecturer, Dept. of ICT, FST, /nBangladesh University of Professionals", url: publicationSecretary },
];
const FinanceCommittee = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-12">
      <h1 className="text-2xl md:text-4xl font-bold text-center">Publication Committee</h1>
      <div className="flex flex-col my-5">
        <div className="flex flex-wrap justify-center my-5 mx-auto">
          <div className="mx-2 md:mx-5 my-2 md:my-0">
            <ImageCard name={PublicationCommitteeDetails[0].name} bio={PublicationCommitteeDetails[0].bio} url={PublicationCommitteeDetails[0].url} />
          </div>
        </div>
      </div>
      <div className="flex flex-col my-5">
        <div className="flex flex-wrap justify-center my-5 mx-auto">
          <div className="mx-2 md:mx-5 my-2 md:my-0">
            <ImageCard name={PublicationCommitteeDetails[1].name} bio={PublicationCommitteeDetails[1].bio} url={PublicationCommitteeDetails[1].url} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceCommittee;
