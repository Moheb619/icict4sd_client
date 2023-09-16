import chair from "public/img/Committee/taher Sir.jpg";
import financeChair from "public/img/Committee/salim Sir.jpg";
import financeSecretary from "public/img/Committee/Nazneen Akhter.jpg";
import ImageCard from "../components/common/ImageCard/ImageCard";
const FinanceCommitteeDetails = [
  { name: "Finance Chair", bio: "Dr. S M Salim Reza,/nAssistant Professor,/nDept. of CSE, FST,/nBangladesh University of Professionals", url: financeChair },
  { name: "Finance Secretary", bio: "Nazneen Akhter,/nLecturer,/nDept. of CSE, FST,/nBangladesh University of Professionals", url: financeSecretary },
];
const FinanceCommittee = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-12">
      <h1 className="text-2xl md:text-4xl font-bold text-center">Finance Committee</h1>
      <div className="flex flex-col my-5">
        <div className="flex flex-wrap justify-center my-5 mx-auto">
          <div className="mx-2 md:mx-5 my-2 md:my-0">
            <ImageCard name={FinanceCommitteeDetails[0].name} bio={FinanceCommitteeDetails[0].bio} url={FinanceCommitteeDetails[0].url} />
          </div>
        </div>
      </div>
      <div className="flex flex-col my-5">
        <div className="flex flex-wrap justify-center my-5 mx-auto">
          <div className="mx-2 md:mx-5 my-2 md:my-0">
            <ImageCard name={FinanceCommitteeDetails[1].name} bio={FinanceCommitteeDetails[1].bio} url={FinanceCommitteeDetails[1].url} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceCommittee;
