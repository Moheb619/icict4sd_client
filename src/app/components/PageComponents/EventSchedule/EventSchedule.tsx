import Image from "next/image";
import day1Image from "public/img/schedule/day1.jpg";
import day2Image from "public/img/schedule/day2.jpg";
import day3Image from "public/img/schedule/day3.jpg";
import styles from "./EventSchedule.module.scss";
import React from "react";
const EventSchedule = () => {
  const day1 = [
    { event: "Conference Registration", time: "0800-0900 hrs" },
    { event: "Arrival of Chief Guest", time: "0845" },
    { event: "Welcome Speech by the VC, BUP/nMajor General Md Mahbub-ul Alam, ndc, afw,. psc, MPhil, PhD", time: "0915-0925" },
    { event: "Welcome Speech by the Chairperson IEEE Bangladesh Section/nDr. M. Moshiul Hoque,Professor, Dept. of CSE, Chattogram University of Engineering and Technology (CUET)", time: "0925-0935" },
    { event: "Conference Proceeding by the Conference Chair/nBrigadier General Md Mustafa Kamal, SGP, Dean, Faculty of Science and Technology, BUP", time: "0935-0945" },
    { event: "Speech by the Chief Guest and Opening of the Conference", time: "0945-1000" },
    { event: "Opening of the Exhibition & Walk Around", time: "1000-1015" },
    { event: "SNACKS", time: "1030-1100" },
    {
      event:
        "Keynote Session by Dr. Kamal Zuhairi bin Zamli/nProfessor & Deputy Vice-Chancellor (Research & Innovation), University of Malaysia Pahang/n/nKeynote Session by Mr. Kamal Quadir, CEO bKash Ltd./n/nSession Moderator : Mr. T.I.M.Nurul Kabir",
      time: "1100-1300",
    },
    { event: "Lunch", time: "1300-1400" },
    {
      event:
        "Keynote Session by Mr. Yasir Azman, CEO Grameen Phone Ltd. /n/nKeynote Session by Dr. Mohammad Abdur Razzaque,Chairman and Director, Research & Policy Integration for Development (RAPID), Policy Research Institute of Bangladesh (PRI)/n/nSession Moderator : Mr. Abdus Salam",
      time: "1400-1600",
    },
    { event: "Snacks", time: "1600-1630" },
    { event: "** Industry Exhibition (Parallel Session) from 0930 to 1700/n** IEEE BUP Student Branch Poster Presentation (Parallel Session) from 1400 to 1800", time: "" },
  ];
  const day2 = [
    { event: "Technical Session Slot 01", time: "0800-1000" },
    { event: "Snacks", time: "1000-1030" },
    {
      event:
        "Keynote Session by Dr. David Brown, Professor in Interactive Systems for Social Inclusion, School of Science & Technology, Nottingham Trent University, UK. /n/nKeynote Session by Dr. Ziaur Rahman, Associate Professor in the Dept. of Business Administration in Management Studies, BUP /n/nSession Moderator: Mr. Shahed Alam",
      time: "1030-1230",
    },
    { event: "Lunch", time: "1230-1500" },
    { event: "Technical Session by IEEE Bangladesh Section (Parallel Session)", time: "1500-1600" },
    { event: "Snacks", time: "1630-1700" },
    { event: "Technical Session: Slot 02", time: "1600-1800" },
  ];
  const day3 = [
    { event: "Technical Session: Slot 03", time: "0800-1000" },
    { event: "Snacks", time: "1000-1030" },
    {
      event:
        "Keynote Session by Dr. S M Shameem Reza, Professor in the Dept. of Mass Communication & Journalism, University of Dhaka /n/nKeynote Session by Dr. Shahjahan Mahmood Chairman, Bangladesh Satellite Company Ltd. (BSCL) /n/nSession Moderator: Dr. Md. Rafiqul Matin",
      time: "1030-1230",
    },
    { event: "Lunch", time: "1230-1330" },
    { event: "Technical Session: Slot 04", time: "1330-1530" },
    { event: "Snacks", time: "1530-1600" },
    { event: "Technical Session: Slot 05", time: "1600-1800" },
  ];

  const EventClosingCeremony = [
    { event: "Arrival of the Guests", time: "1830-1900" },
    { event: "Arrival of the Chief Guest", time: "1900" },
    { event: "Speech by a member of the National Advisory Committee", time: "1900-1905" },
    { event: "Technical Session: Slot 01", time: "1905-1935" },
    { event: "Technical Session: Slot 02", time: "1935-2005" },
    { event: "Technical Session: Slot 03", time: "2005-2025" },
    { event: "Technical Session: Slot 04", time: "2025-2030" },
    { event: "Speech by the Sponsors", time: "2030" },
    { event: "Experience Sharing, Prize Awarding & Souvenir Exchange", time: "2030" },
    { event: "Speech by the Chief Guest", time: "2030" },
    { event: "Vote of Thanks by the VC, BUP", time: "2030" },
  ];

  const tableContentFormatter = async (content: string) => {
    const contentSplit = content.split("/n");

    return (
      <>
        {contentSplit.map((c, index) => (
          <React.Fragment key={index}>
            {c}
            <br />
          </React.Fragment>
        ))}
      </>
    );
  };
  return (
    <section id="schedule" className="p-14">
      <div className="container">
        <div className="section-header flex items-center flex-col">
          <h2 className="text-4xl font-bold text-center my-2">EVENT SCHEDULE</h2>
          <p className="text-3xl text-center  my-2">Conference Schedule (Day-1)</p>
          <p className="my-2 text-center">The schedule is given in Bangladesh local time (GMT +6)</p>
          <table className={`table table-bordered table-striped  my-2 md:w-[90%] ${styles.event_schedule_table}`}>
            <tbody className="px-10">
              <tr className="bg-gray-400 text-white">
                <th>Sl No.</th>
                <th>Events</th>
                <th>Time</th>
              </tr>
              {day1.map((d: any, index: number) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{tableContentFormatter(d.event)}</td>
                  <td>{d.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-blue-700 my-5 font-bold">End of Day 1</p>
          <hr />
          <p className="text-3xl text-center  my-2">Conference Schedule (Day-2)</p>

          <p className="my-2 text-center">The schedule is given in Bangladesh local time (GMT +6)</p>
          <table className={`table table-bordered table-striped  my-2 w-full md:w-[90%] ${styles.event_schedule_table}`}>
            <tbody className="px-10">
              <tr className="bg-gray-400 text-white">
                <th>Sl No.</th>
                <th>Events</th>
                <th>Time</th>
              </tr>
              {day2.map((d: any, index: number) => (
                <tr key={index}>
                  <td>{index + 11}</td>
                  <td>{tableContentFormatter(d.event)}</td>
                  <td>{d.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-blue-700 my-5 font-bold">End of Day 2</p>
          <hr />
          <p className="text-3xl text-center my-2">Conference Schedule (Day-3)</p>

          <p className="my-2 text-center">The schedule is given in Bangladesh local time (GMT +6)</p>
          <table className={`table table-bordered table-striped  my-2 md:w-[90%] ${styles.event_schedule_table}`}>
            <tbody className="px-10">
              <tr className="bg-gray-400 text-white">
                <th>Sl No.</th>
                <th>Events</th>
                <th>Time</th>
              </tr>
              {day3.map((d: any, index: number) => (
                <tr key={index}>
                  <td>{index + 19}</td>
                  <td>{tableContentFormatter(d.event)}</td>
                  <td>{d.time}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <hr />
          <p className="text-3xl text-center my-2">Event: Closing Ceremony</p>

          <p className="my-2 text-center">The schedule is given in Bangladesh local time (GMT +6)</p>
          <table className={`table table-bordered table-striped  my-2 md:w-[90%] ${styles.event_schedule_table}`}>
            <tbody className="px-10">
              <tr className="bg-gray-400 text-white">
                <th>Sl No.</th>
                <th>Events</th>
                <th>Time</th>
              </tr>
              {EventClosingCeremony.map((d: any, index: number) => (
                <tr key={index}>
                  <td>{index + 19}</td>
                  <td>{tableContentFormatter(d.event)}</td>
                  <td>{d.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-blue-700 my-5 font-bold">End of Conference</p>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
