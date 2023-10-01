import styles from "./InternationalAdvisoryCommittee.module.scss";

const InternationalAdvisoryCommitteList = [
  "Prof. Ranjan Gangopadhyay, PhD, Dept of Electronics and Communication Engineering LNM Institute of Information Technology Jaipur, India",
  "Prof. Hairul Azhar Bin Abdul Rashid, PhD, Vice President, RDI Multimedia University Selangor, Malaysia",
  "Prof. Mirza Salim Beg, PhD, Dept of Electronics Engineering Aligarh Muslim University Aligarh, India",
  "Shafi U. Bhuiyan, MBBS, MPH, MBA, PhD, MJF Founding Academic Director ITMD Ryerson University Toronto, Canada",
  "Asst. Prof. Ahmed Imran, PhD, Information, Technology (IT) & Systems University of Canberra Canberra, Australia",
  "Dr. M. Ameer Ali, (CSE, BUET; PhD, Australia) Cybersecurity Analyst UL, Melbourne, Australia",
  "Dr. Sadid Hasan, AI Lead at Microsoft Cambridge, MA, USA",
  "Dr. Mufti Mahmud, Associate Professor, Department of Computer Science Nottingham Trent University, UK",
  "Dr M Hasan Shaheed, Phd, School of Engineering and Materials Science Queen Mary University of London London, UK",
  "Prof. Dr. Haslina Binti Arshad, PENSYARAH UNIVERSITI, PUSAT PENYELIDIKAN TEKNOLOGI KECERDASAN BUATAN (CAIT)",
  "Professor Mike Hinchey, PhD, Software Engineering University of Limerick Ireland",
  "Professor B. M. Azizur Rahman,School of Science & Technology, Department of Engineering, City University, London ",
];

const InternationalAdvisoryCommittee = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-12">
      <h2 className="text-2xl md:text-4xl font-bold text-center">International Advisory Committee</h2>
      <div className="overflow-x-auto w-full">
        <table className={`international_advisory_table border-separate border border-slate-400 mx-auto text-base md:text-lg my-5 ${styles.international_advisory_table}`}>
          <tbody>
            <tr className="bg-black text-white">
              <th>Serial Number</th>
              <th>Details</th>
            </tr>
            {InternationalAdvisoryCommitteList.map((member, index) => (
              <tr key={index} className={`${styles.international_advisory_table_row}`}>
                <td>{index + 1}</td>
                <td>{member}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InternationalAdvisoryCommittee;
