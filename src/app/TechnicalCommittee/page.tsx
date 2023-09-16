import chair from "public/img/Committee/taher Sir.jpg";
import coChair from "public/img/Committee/Dr Md Saiful Islam.jpg";
import secretary from "public/img/Committee/Maynul.jpg";
import jointSecretary from "public/img/Committee/nahian sir.jpg";
import jointSecretary2 from "public/img/Committee/prottasa sir.jpg";
import ImageCard from "../components/common/ImageCard/ImageCard";
import styles from "./TechnicalCommittee.module.scss";
const TechnicalCommitteeDetails = [
  { name: "Technical Chair", bio: "Professor Dr. Kazi Abu Taher,/nMonitoring & Evaluating/nResearch Wing/nBUP Research Cell/nBangladesh University of Professionals", url: chair },
  { name: "Co-Chair", bio: "Dr. Md. Saiful Islam, /nDirector, IICT, BUET", url: coChair },
  { name: "Technical Secretary", bio: "Md. Maynul Islam, /nAssistant Professor, ICT, /nBangladesh University of Professionals", url: secretary },
  { name: "Joint-Secretary", bio: "Md. Sazzadul Islam Prottasha, /nLecturer, ICT, /nBangladesh University of Professionals", url: jointSecretary2 },
];
const TPCMembersList = [
  "Professor Dr. Subrata Kumar Aditya, Dhaka University, Bangladesh",
  "Professor Dr. Mohiuddin Ahmad, Khulna University of Engineering & Technology, Bangladesh",
  "Assistant Professor Dr. Shameem Ahmad, American International University-Bangladesh, Bangladesh",
  "Professor Dr. Mosabber Uddin Ahmed, Dhaka University, Bangladesh",
  "Professor Dr. Md. Shamim Ahsan, Khulna University, Bangladesh",
  "Professor Dr. Md. Aminul Haque Akhand, Khulna University of Engineering & Technology, Bangladesh",
  "Professor Dr. M. Ameer Ali, Bangladesh University of Business and Technology, Bangladesh",
  "Professor Dr. Md Asraf Ali, American International University-Bangladesh",
  "Associate Professor Dr. M Tanseer Ali, American International University-Bangladesh",
  "Associate Professor Dr Md Tawfiq Amin, Military Institute of Science and Technology, Bangladesh",
  "Associate Professor Dr. Tanbir Ibne Anowar, American International University-Bangladesh",
  "Associate Professor Abu Asaduzzaman, Wichita State University, Kansas, United States",
  "Professor Dr. Abul Kalam Azad, Dhaka University, Bangladesh",
  "Professor Dr. Bobby Barua, Ahsanullah University of Science and Technology, Bangladesh",
  "Associate Professor Dr. Mohammad Mostafizur Rahman Biswas, American International University-Bangladesh",
  "Assistant Professor Dr. Moushumi Zaman Bonny, American International University-Bangladesh",
  "Lecturer Mahfuzul Hoq Chowdhury, Chittagong University of Engineering and Technology, Bangladesh",
  "Professor Dr. Maheshi Dissanayake, University of Peradeniya, Sri Lanka",
  "Assistant Professor Dr. Abul Barkat Mollah Sayeed Ud Doulah, University of Liberal Arts Bangladesh",
  "Professor Dr. Bilkis Jamal Ferdosi, University of Asia Pacific, Bangladesh",
  "Professor Dr. A K M Fazlul Haque, Daffodil International University, Bangladesh",
  "Professor Dr. Md. Emdadul Haque, Rajshahi University, Bangladesh",
  "Associate Professor Dr. M. Mahmudul Hasan, American International University-Bangladesh",
  "Assistant Professor Dr. Mehedi Hasan, Dhaka University, Bangladesh",
  "Professor Dr Tabin Hasan, American International University-Bangladesh",
  "Assistant Professor Professor Dr. Md. Rifat Hazari, American International University-Bangladesh",
  "Professor Dr. Mohammed Moshiul Hoque, Chittagong University of Engineering & Technology, Bangladesh",
  "Associate Professor Dr Md Afzal Hossain, Dhaka University, Bangladesh",
  "Professor Dr. A.B.M. Aowlad Hossain, Khulna University of Engineering & Technology, Bangladesh",
  "Professor Dr. Md. Shohrab Hossain, Bangladesh University of Engineering and Technology, Bangladesh",
  "Professor Dr. Rubaiyat Hossain, Chittagong University of Engineering & Technology, Bangladesh",
  "Professor Dr Mohammed Hossam-E-Haider, Military Institute of Science and Technology, Bangladesh",
  "Associate Professor Dr. Mohammad Hasan Imam, American International University-Bangladesh, Bangladesh",
  "Professor Dr Md Shahidul Islam, Dhaka University, Bangladesh",
  "Associate Professor Dr Muhammad Nazrul Islam, Military Institute of Science and Technology, Bangladesh",
  "Associate Professor Dr. Md Aminul Islam, Jashore University of Science and Technology, Bangladesh",
  "Assistant Professor Dr. Md. Shariful Islam, Dhaka University, Bangladesh",
  "Assistant Professor Dr. Mohammad Rabiul Islam, American International University-Bangladesh",
  "Assistant Professor Dr. Effat Jahan, American International University-Bangladesh",
  "Professor Dr. Khondokar Habibul Kabir, Islamic University of Technology, Bangladesh",
  "Professor Dr. Md. Hasanul Kabir, Islamic University of Technology, Bangladesh",
  "Assistant Professor Dr. Md. Kabiruzzaman, American International University-Bangladesh",
  "Professor Dr. Md. Shamim Kaiser, Jahangirnagar University, Bangladesh",
  "Professor Dr. Mohammad Rezaul Karim, Chittagong Independent University, Bangladesh",
  "Professor Dr. Muhammad Abdul Goffar Khan, Rajshahi University of Engineering & Technology, Bangladesh",
  "Professor Dr. Risala Tasin Khan, Jahangirnagar University, Bangladesh",
  "Professor Dr. M. Mamun-Ur-Rashid Khandker, Rajshahi University, Bangladesh",
  "Professor Dr. Yoshinori Kuno, Saitama University, Japan",
  "Associate Professor Dr. Md. Zulfiker Mahmud, Jagannath University, Bangladesh",
  "Assistant Professor Dr. S. M. Hasan Mahmud, American International University-Bangladesh",
  "Assistant Professor Dr Rashed Majumder, Jahangirnagar University, Bangladesh",
  "Professor Dr. Md. Al Mamun, Rajshahi University of Engineering & Technology, Bangladesh",
  "Professor Dr. Md. Maniruzzaman, Khulna University, Bangladesh",
  "Associate Professor Dr. M. A. Mannan, American International University-Bangladesh",
  "Professor Dr. Nafees Mansoor, University of Liberal Arts Bangladesh",
  "Assistant Professor Dr. Md. Iftekharul Mobin, American International University-Bangladesh",
  "Professor Dr. Md. Nurunnabi Mollah, Khulna University of Engineering & Technology, Bangladesh",
  "Associate Professor Dr. Sifat Momen, North South University, Bangladesh",
  "Assistant Professor Dr. Shuvra Mondal, American International University-Bangladesh",
  "Associate Professor Dr. Muhammad Firoz Mridha, American International University-Bangladesh",
  "Professor Rashed Mustafa, Chittagong University, Bangladesh",
  "Associate Professor Dr. Afroza Nahar, American International University-Bangladesh",
  "Associate Professor Dr Hussain Nyeem, Military Institute of Science and Technology, Bangladesh",
  "Professor Dr. Abu Sayed Md. Mostafizur Rahaman, Jahangirnagar University, Bangladesh",
  "Professor Dr. Md. Abdur Rahman, American International University-Bangladesh",
  "Professor Dr. Md. Anisur Rahman, Khulna University, Bangladesh",
  "Professor Dr. Md. Obaidur Rahman, Dhaka University of Engineering & Technology, Bangladesh",
  "Associate Professor Dr. Md. Sazzadur Rahman, Jahangirnagar University, Bangladesh",
  "Professor Dr. Mohammad Zahidur Rahman, Jahangirnagar University, Bangladesh",
  "Professor Dr. Motiur Rahman, Mawlana Bhashani Science and Technology University, Bangladesh",
  "Associate Professor Dr. Md. Golam Rashed, Rajshahi University, Bangladesh",
  "Assistant Professor S M Salim Reza, Bangladesh University of Professionals, Bangladesh",
  "Professor Dr. Md. Sheikh Sadi, Khulna University of Engineering & Technology, Bangladesh",
  "Professor Dr. Pran Kanai Saha, Bangladesh University of Engineering and Technology, Bangladesh",
  "Assistant Professor Dr. Abdus Salam, American International University-Bangladesh",
  "Professor Dr. Pintu Chandra Shill, Khulna University of Engineering & Technology, Bangladesh",
  "Professor Dr. Mohammad Shoyaib, Dhaka University, Bangladesh",
  "Professor Dr. Hanif Siddique, Chittagong University, Bangladesh",
  "Professor Dr. Fazlul Hasan Siddiqui, Dhaka University of Engineering & Technology, Bangladesh",
  "Associate Professor Fahmida Hossain Tithi, Daffodil International University, Bangladesh",
  "Assistant Professor Dr. Ashraf Uddin, American International University-Bangladesh",
  "Professor Dr. Mohammad Shorif Uddin, Jahangirnagar University, Bangladesh",
  "Professor Dr. Mohammed Nasir Uddin, Bangladesh University of Professionals, Bangladesh",
  "Assistant Professor Dr. Md. Ahsan Ullah, Chittagong University of Engineering & Technology, Bangladesh",
  "Professor Dr. Saeed Mahmud Ullah, Dhaka University, Bangladesh",
  "Professor Dr. Mohammad Abu Yousuf, Jahangirnagar University, Bangladesh",
  "Associate Professor Dr. Md. Saniat Rahman Zishan, American International University-Bangladesh",
];

const TechnicalCommittee = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-12">
      <h1 className="text-2xl md:text-4xl font-bold text-center">Technical Program Committee</h1>
      <div className="flex flex-col my-5">
        <div className="flex flex-wrap justify-center my-5 mx-auto">
          <div className="mx-2 md:mx-5 my-2 md:my-0">
            <ImageCard name={TechnicalCommitteeDetails[0].name} bio={TechnicalCommitteeDetails[0].bio} url={TechnicalCommitteeDetails[0].url} />
          </div>
        </div>
        <div className="flex flex-wrap justify-center my-5 mx-auto">
          <div className="mx-2 md:mx-5 my-2 md:my-0">
            <ImageCard name={TechnicalCommitteeDetails[1].name} bio={TechnicalCommitteeDetails[1].bio} url={TechnicalCommitteeDetails[1].url} />
          </div>
        </div>
        <div className="flex flex-wrap justify-center my-5 mx-auto">
          <div className="mx-2 md:mx-5 my-2 md:my-0">
            <ImageCard name={TechnicalCommitteeDetails[2].name} bio={TechnicalCommitteeDetails[2].bio} url={TechnicalCommitteeDetails[2].url} />
          </div>
        </div>
        <div className="flex flex-wrap justify-center my-5 mx-auto">
          <div className="mx-2 md:mx-5 my-2 md:my-0">
            <ImageCard name={TechnicalCommitteeDetails[3].name} bio={TechnicalCommitteeDetails[3].bio} url={TechnicalCommitteeDetails[3].url} />
          </div>
        </div>
      </div>

      {/* TPC Members  */}
      <div className="flex flex-col items-center p-4 md:p-12">
        <h2 className="text-xl md:text-2xl font-bold text-center">TPC Members</h2>
        <div className="overflow-x-auto w-full">
          <table className={`technical_program_table border-separate border border-slate-400 mx-auto text-base md:text-lg my-5 ${styles.technical_program_table}`}>
            <tbody>
              <tr className="bg-black text-white">
                <th>Serial Number</th>
                <th>Details</th>
              </tr>
              {TPCMembersList.map((member, index) => (
                <tr key={index} className={`${styles.technical_program_table_row}`}>
                  <td>{index + 1}</td>
                  <td>{member}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TechnicalCommittee;
