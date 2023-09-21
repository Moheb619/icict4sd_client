"use client";
import { useEffect, useState } from "react";

interface CountdownProps {
  className?: string;
  caption: string;
}

const Countdown: React.FC<CountdownProps> = ({ className, caption }) => {
  // const [day, setDay] = useState<number>(0);
  // const [hour, setHour] = useState<number>(0);
  // const [minute, setMinute] = useState<number>(0);
  // const [second, setSecond] = useState<number>(0);
  // useEffect(() => {
  //   // Set the target date and time for the countdown
  //   const targetDate: Date = new Date("2023-09-21T00:00:00Z");

  //   const updateCountdown = () => {
  //     // Get the current date and time
  //     const currentDate: Date = new Date();

  //     // Calculate the time difference in seconds between the current and target date
  //     const timeDiffInSeconds = Math.floor((targetDate.getTime() - currentDate.getTime()) / 1000);

  //     if (timeDiffInSeconds > 0) {
  //       // Calculate the remaining days, hours, minutes, and seconds
  //       const remainingDays: number = Math.floor(timeDiffInSeconds / (24 * 3600));
  //       const remainingHours: number = Math.floor((timeDiffInSeconds % (24 * 3600)) / 3600);
  //       const remainingMinutes: number = Math.floor((timeDiffInSeconds % 3600) / 60);
  //       const remainingSeconds: number = timeDiffInSeconds % 60;

  //       // Update the state with the remaining time
  //       setDay(remainingDays);
  //       setHour(remainingHours);
  //       setMinute(remainingMinutes);
  //       setSecond(remainingSeconds);
  //     }
  //   };

  //   // Update the countdown initially
  //   updateCountdown();

  //   // Update the countdown every second
  //   const countdownInterval = setInterval(updateCountdown, 1000);

  //   // Clean up the interval when the component unmounts
  //   return () => {
  //     clearInterval(countdownInterval);
  //   };
  // }, []);
  return (
    <div className={`${className ? className : ""} flex flex-col place-items-center`}>
      <div className="text-white font-bold my-5 text-xs md:text-xl italic uppercase" style={{ textShadow: "1px 1px white" }}>
        Conference Day 1
      </div>
      <div className="text-xl md:text-4xl font-bold text-white">
        {/* <span className="bg-gray-800 mx-1 p-1 rounded-lg">{day}d </span>
        <span className="bg-gray-800 mx-1 p-1 rounded-lg">{hour}h </span>
        <span className="bg-gray-800 mx-1 p-1 rounded-lg">{minute}m </span>
        <span className="bg-gray-800 mx-1 p-1 rounded-lg">{second}s</span> */}
        Ongoing
      </div>
    </div>
  );
};

export default Countdown;
