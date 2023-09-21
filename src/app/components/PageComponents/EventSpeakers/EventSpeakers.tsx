import ImageCard from "../../common/ImageCard/ImageCard";
import DavidBrown from "public/img/keynote/David Brown.jpg";
import KamalZuhairiBinZamli from "public/img/keynote/Kamal Zuhairi Bin Zamli.jpg";
import ProfessorDrSMShameemReza from "public/img/keynote/Professor Dr SM Shameem Reza.jpg";
import DrAbdurRazzak from "public/img/keynote/Dr Abdur Razzak.jpg";
import MrSyedAlmasKabir from "public/img/keynote/Mr Syed Almas Kabir.jpg";
import AssociateProfessorDrZiaurRahman from "public/img/keynote/Associate Professor Dr Ziaur Rahman.jpg";
import DrShahjahanMahmud from "public/img/speakers/Dr Shahjahan Mahmud.jpg";
import KamalQuadir from "public/img/speakers/Kamal Quadir.jpg";
import YasirAzman from "public/img/speakers/Yasir Azman.jpg";
const keynoteSpeakers = [
  { name: "David Brown", bio: "Professor in Interactive Systems for Social Inclusion,/nSchool of Science & Technology Nottingham Trent University", url: DavidBrown },
  { name: "Professor Ts. Dr. Kamal Zuhairi Bin Zamli", bio: "Deputy Vice-Chancellor/n(Research & Innovation), /nUniversity of Malaysia Pahang", url: KamalZuhairiBinZamli },
  { name: "Professor Dr. S. M. Shameem Reza", bio: "Dept. of Mass Communication & Journalism,/nUniversity of Dhaka", url: ProfessorDrSMShameemReza },
  { name: "Dr. Abdur Razzak", bio: "Director,/nResearch & Policy Integration for Development (RAPID)", url: DrAbdurRazzak },
  { name: "Associate Professor Dr. Ziaur Rahman", bio: "Dept. of Business Administration in Management Studies,/nBangladesh University of Professionals", url: AssociateProfessorDrZiaurRahman },
  { name: "Dr. Shahjahan Mahmud", bio: "Chairman, Bangladesh Satellite Company Limited", url: DrShahjahanMahmud },
  { name: "Yasir Azman", bio: "CEO, GrameenPhone", url: YasirAzman },
  { name: "Kamal Quadir", bio: "CEO, bKash Ltd.", url: KamalQuadir },
  { name: "Mr. Syed Almas Kabir", bio: "Managing Director & CEO, MetroNet Bangladesh Limited President, Bangladesh-Malaysia Chamber of Commerce & Industry", url: MrSyedAlmasKabir },
];
// const invitedSpeakers = [
//   { name: "Dr. Shahjahan Mahmud", bio: "Chairman, BCSCL", url: DrShahjahanMahmud },
//   { name: "Yasir Azman", bio: "CEO, GrameenPhone", url: YasirAzman },
//   { name: "Kamal Quadir", bio: "Chief Executive Officer, bKash Ltd.", url: KamalQuadir },
// ];

const EventSpeakers = () => {
  return (
    <section id="speakers" className="flex items-center flex-col p-4 md:p-14">
      <h2 className="text-2xl md:text-4xl font-bold text-center my-2">Event Speakers</h2>
      <div>
        <h3 className="text-xl md:text-3xl text-center my-2">Keynote Speakers</h3>
        <div className="my-5 flex flex-wrap justify-center">
          {keynoteSpeakers.map((speaker, index) => {
            return (
              <div key={speaker.name} className="mx-2 md:mx-5 my-2 md:my-3">
                <ImageCard title={"keynote"} name={speaker.name} bio={speaker.bio} url={speaker.url} />
              </div>
            );
          })}
        </div>
      </div>
      {/* <div>
        <h3 className="text-xl md:text-3xl text-center my-2">Invited Speakers</h3>
        <div className="my-5 flex flex-wrap justify-center">
          {invitedSpeakers.map((speaker, index) => {
            return (
              <div key={index} className="mx-2 md:mx-5 my-2 md:my-3">
                <ImageCard title={"speaker"} name={speaker.name} bio={speaker.bio} url={speaker.url} />
              </div>
            );
          })}
        </div>
      </div> */}
    </section>
  );
};

export default EventSpeakers;
