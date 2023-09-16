import ImageCard from "../components/common/ImageCard/ImageCard";
import conferenceChair from "public/img/Committee/Brig Gen Md Mustafa Kamal.jpg";
import organizingChair from "public/img/Committee/nasir.jpg";
import memberSecretary from "public/img/Committee/Saiful Islam (1).jpg";
import cochair from "public/img/Committee/Colonel S M Saiful Islam.jpg";

const OrganizingCommiteeDetails = [
  { name: "Conference Chair", bio: "Brig Gen Md Mustafa Kamal, /nSGP Dean, FST, /nBangladesh University of Professionals", url: conferenceChair },
  { name: "Conference Co-Chair", bio: "Colonel S M Saiful Islam,/nSUP, psc,/nChairman, Dept of ICT,/nBangldesh University of Professionals", url: cochair },
  { name: "Organizing Chair", bio: "Dr. Mohammaed Nasir Uddin, /nAssociate Professor,/nDept. of ICT,FST, /nBangladesh University of Professionals", url: organizingChair },
  { name: "Organizing Secretary", bio: "Saiful Islam, /nAssistant Professor,/nDept. of ICT,FST, /nBangladesh University of Professionals", url: memberSecretary },
];
const OrganizingCommitee = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-12">
      <h1 className="text-2xl md:text-4xl font-bold">Organizing Committee</h1>
      <div className="flex flex-col my-5">
        <div className="flex flex-wrap justify-center my-5 mx-auto">
          <div className="mx-2 md:mx-5 my-2 md:my-0">
            <ImageCard name={OrganizingCommiteeDetails[0].name} bio={OrganizingCommiteeDetails[0].bio} url={OrganizingCommiteeDetails[0].url} />
          </div>
        </div>
        <div className="flex flex-wrap justify-center my-5 mx-auto">
          <div className="mx-2 md:mx-5 my-2 md:my-0">
            <ImageCard name={OrganizingCommiteeDetails[1].name} bio={OrganizingCommiteeDetails[1].bio} url={OrganizingCommiteeDetails[1].url} />
          </div>
        </div>
        <div className="flex flex-wrap justify-center my-5 mx-auto">
          <div className="mx-2 md:mx-5 my-2 md:my-0">
            <ImageCard name={OrganizingCommiteeDetails[2].name} bio={OrganizingCommiteeDetails[2].bio} url={OrganizingCommiteeDetails[2].url} />
          </div>
          <div className="mx-2 md:mx-5 my-2 md:my-0">
            <ImageCard name={OrganizingCommiteeDetails[3].name} bio={OrganizingCommiteeDetails[3].bio} url={OrganizingCommiteeDetails[3].url} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizingCommitee;
