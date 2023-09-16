import Image, { StaticImageData } from "next/image";
import React from "react";

interface ImageCardProps {
  title?: string;
  name: string;
  bio: string;
  url: StaticImageData;
}

const ImageCard: React.FC<ImageCardProps> = ({ title, name, bio, url }) => {
  const bioFormatter = async (bio: string) => {
    const bioSplit = bio.split("/n");

    return (
      <>
        {bioSplit.map((b, index) => (
          <React.Fragment key={index}>
            {b}
            <br />
          </React.Fragment>
        ))}
      </>
    );

    // return bio;
  };
  return (
    <div className="w-64  md:w-64 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col">
      <Image src={url} alt="img" title="img" className="w-full h-[20rem] object-cover rounded-t-lg" id="whoobe-ixxe5" />
      <div className={`w-full ${title === "keynote" ? "h-48" : "h-48"} p-4 justify-start flex flex-col`}>
        <h4 className={`text-xl text-center text-red-600 ${name && bio ? "border-b-2" : ""}`}>{name}</h4>
        <p className="my-4 text-[0.9rem] text-center">{bio ? bioFormatter(bio) : name ? "" : "N/A"}</p>
      </div>
    </div>
  );
};

export default ImageCard;
