import bannaSir from "public/img/web/banna.jpg";
import nahianSir from "public/img/web/nahian.jpeg";
import mohebBoss from "public/img/web/moheb.jpg";
import ImageCard from "../components/common/ImageCard/ImageCard";

const webmasterDetails = [
  { name: "Md. Hasan Al Banna", bio: "", url: bannaSir },
  { name: "Md. Jaber Al Nahian", bio: "", url: nahianSir },
  { name: "Saeed Hossain Moheb", bio: "", url: mohebBoss },
];

const Webmaster = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-12">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10">Webmaster</h1>
      <div className="flex flex-wrap justify-center">
        {webmasterDetails.map((member, index) => {
          return (
            <div key={member.name} className="mx-2 md:mx-5 my-2 md:my-4">
              <ImageCard name={member.name} bio={member.bio} url={member.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Webmaster;
