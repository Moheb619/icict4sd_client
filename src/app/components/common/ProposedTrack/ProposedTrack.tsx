import styles from "./ProposedTrack.module.scss";

const ProposedTrack = () => {
  return (
    <section id="dates" className="p-4 md:p-14">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold">Proposed Track</h2>
        </div>
        {/* Pc Screen */}
        <div className="mt-5 flex flex-wrap hidden lg:block">
          <table className={`border-separate border border-slate-400 mx-auto text-sm md:text-sm ${styles.proposed_track_table}`}>
            <tbody>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3 font-bold">Track 1: ICT in Healthcare</td>
                <td className="px-2 md:px-4 py-2 md:py-3 font-bold">Track 2: ICT in Education</td>
                <td className="px-2 md:px-4 py-2 md:py-3 font-bold">Track 3: ICT in Business</td>
              </tr>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <ul className="list-disc px-4">
                    <li>Cloud Computing, Big Data and Machine Learning</li>
                    <li>Natural Language Processing and Text Mining</li>
                    <li>Data Mining for Biomedical Engineering</li>
                    <li>Electronic Health Records and Standards</li>
                    <li>Wearable and Body Implant Technologies</li>
                    <li>ICT in Telemedicine</li>
                  </ul>
                </td>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <ul className="list-disc px-4">
                    <li>Collaborative and Cooperative Education System</li>
                    <li>Application of AI in Smart Education Systems</li>
                    <li>Natural Language Processing</li>
                    <li>ICT in Education 4.0</li>
                  </ul>
                </td>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <ul className="list-disc px-4">
                    <li>Information Management & Data Science</li>
                    <li>Business Analytics and Management</li>
                    <li>Information System Engineering</li>
                    <li>Artificial Intelligence in Business</li>
                    <li>Blockchain Applications in Business</li>
                    <li>E-Commerce and Digital Marketing</li>
                  </ul>
                </td>
              </tr>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3 font-bold">Track 4: ICT in Agriculture</td>
                <td className="px-2 md:px-4 py-2 md:py-3 font-bold">Track 5: ICT in Industry</td>
                <td className="px-2 md:px-4 py-2 md:py-3 font-bold">Track 6: ICT in Smart City</td>
              </tr>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <ul className="list-disc px-4">
                    <li>Cyber-Physical Systems for Smart Farming</li>
                    <li>Cloud-IoT Platforms for Small to Large Scale Farming</li>
                    <li>Applications of AI and Machine Learning</li>
                    <li>Sustainable and Green Technology</li>
                    <li>Smart Management of Agricultural Waste</li>
                  </ul>
                </td>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <ul className="list-disc px-4">
                    <li>Communication and Networking</li>
                    <li>Cyber-Physical Systems</li>
                    <li>Robotics, Automation, and Control</li>
                    <li>Cloud Computing, Big Data and Machine Learning</li>
                    <li>Mobile Computing for Industry</li>
                  </ul>
                </td>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <ul className="list-disc px-4">
                    <li>IoT and WSN for Smart City Applications</li>
                    <li>Cloud Computing and Networking</li>
                    <li>Grid and Metering Infrastructure</li>
                    <li>Smart Transportation System</li>
                    <li>Logistics Applications</li>
                    <li>Smart Waste Management</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* tab Screen */}
        <div className="mt-5 flex flex-wrap hidden md:block lg:hidden">
          <table className={`border-separate border border-slate-400 mx-auto text-sm md:text-sm ${styles.proposed_track_table}`}>
            <tbody>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3 font-bold">Track 1: ICT in Healthcare</td>
                <td className="px-2 md:px-4 py-2 md:py-3 font-bold">Track 2: ICT in Education</td>
              </tr>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <ul className="list-disc px-4">
                    <li>Cloud Computing, Big Data and Machine Learning</li>
                    <li>Natural Language Processing and Text Mining</li>
                    <li>Data Mining for Biomedical Engineering</li>
                    <li>Electronic Health Records and Standards</li>
                    <li>Wearable and Body Implant Technologies</li>
                    <li>ICT in Telemedicine</li>
                  </ul>
                </td>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <ul className="list-disc px-4">
                    <li>Collaborative and Cooperative Education System</li>
                    <li>Application of AI in Smart Education Systems</li>
                    <li>Natural Language Processing</li>
                    <li>ICT in Education 4.0</li>
                  </ul>
                </td>
              </tr>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3 font-bold">Track 3: ICT in Business</td>
                <td className="px-2 md:px-4 py-2 md:py-3 font-bold">Track 4: ICT in Agriculture</td>
              </tr>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <ul className="list-disc px-4">
                    <li>Information Management & Data Science</li>
                    <li>Business Analytics and Management</li>
                    <li>Information System Engineering</li>
                    <li>Artificial Intelligence in Business</li>
                    <li>Blockchain Applications in Business</li>
                    <li>E-Commerce and Digital Marketing</li>
                  </ul>
                </td>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <ul className="list-disc px-4">
                    <li>Cyber-Physical Systems for Smart Farming</li>
                    <li>Cloud-IoT Platforms for Small to Large Scale Farming</li>
                    <li>Applications of AI and Machine Learning</li>
                    <li>Sustainable and Green Technology</li>
                    <li>Smart Management of Agricultural Waste</li>
                  </ul>
                </td>
              </tr>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3 font-bold">Track 5: ICT in Industry</td>
                <td className="px-2 md:px-4 py-2 md:py-3 font-bold">Track 6: ICT in Smart City</td>
              </tr>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <ul className="list-disc px-4">
                    <li>Communication and Networking</li>
                    <li>Cyber-Physical Systems</li>
                    <li>Robotics, Automation, and Control</li>
                    <li>Cloud Computing, Big Data and Machine Learning</li>
                    <li>Mobile Computing for Industry</li>
                  </ul>
                </td>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <ul className="list-disc px-4">
                    <li>IoT and WSN for Smart City Applications</li>
                    <li>Cloud Computing and Networking</li>
                    <li>Grid and Metering Infrastructure</li>
                    <li>Smart Transportation System</li>
                    <li>Logistics Applications</li>
                    <li>Smart Waste Management</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Mobile Screen */}
        <div className="mt-5 flex flex-wrap md:hidden">
          <table className={`border-separate border border-slate-400 mx-auto text-sm md:text-sm ${styles.proposed_track_table}`}>
            <tbody>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3 font-bold">Track 1: ICT in Healthcare</td>
              </tr>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <ul className="list-disc px-4">
                    <li>Cloud Computing, Big Data and Machine Learning</li>
                    <li>Natural Language Processing and Text Mining</li>
                    <li>Data Mining for Biomedical Engineering</li>
                    <li>Electronic Health Records and Standards</li>
                    <li>Wearable and Body Implant Technologies</li>
                    <li>ICT in Telemedicine</li>
                  </ul>
                </td>
              </tr>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3 font-bold">Track 2: ICT in Education</td>
              </tr>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <ul className="list-disc px-4">
                    <li>Collaborative and Cooperative Education System</li>
                    <li>Application of AI in Smart Education Systems</li>
                    <li>Natural Language Processing</li>
                    <li>ICT in Education 4.0</li>
                  </ul>
                </td>
              </tr>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3 font-bold">Track 3: ICT in Business</td>
              </tr>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <ul className="list-disc px-4">
                    <li>Information Management & Data Science</li>
                    <li>Business Analytics and Management</li>
                    <li>Information System Engineering</li>
                    <li>Artificial Intelligence in Business</li>
                    <li>Blockchain Applications in Business</li>
                    <li>E-Commerce and Digital Marketing</li>
                  </ul>
                </td>
              </tr>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3 font-bold">Track 4: ICT in Agriculture</td>
              </tr>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <ul className="list-disc px-4">
                    <li>Cyber-Physical Systems for Smart Farming</li>
                    <li>Cloud-IoT Platforms for Small to Large Scale Farming</li>
                    <li>Applications of AI and Machine Learning</li>
                    <li>Sustainable and Green Technology</li>
                    <li>Smart Management of Agricultural Waste</li>
                  </ul>
                </td>
              </tr>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3 font-bold">Track 5: ICT in Industry</td>
              </tr>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <ul className="list-disc px-4">
                    <li>Communication and Networking</li>
                    <li>Cyber-Physical Systems</li>
                    <li>Robotics, Automation, and Control</li>
                    <li>Cloud Computing, Big Data and Machine Learning</li>
                    <li>Mobile Computing for Industry</li>
                  </ul>
                </td>
              </tr>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3 font-bold">Track 6: ICT in Smart City</td>
              </tr>
              <tr className={`${styles.proposed_track_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <ul className="list-disc px-4">
                    <li>IoT and WSN for Smart City Applications</li>
                    <li>Cloud Computing and Networking</li>
                    <li>Grid and Metering Infrastructure</li>
                    <li>Smart Transportation System</li>
                    <li>Logistics Applications</li>
                    <li>Smart Waste Management</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProposedTrack;
