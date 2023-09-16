import Image from "next/image";
import hotel1 from "public/img/hotels/120917081.jpg";
import hotel2 from "public/img/hotels/DR.jpg";
import hotel3 from "public/img/hotels/LM.jpg";
import { AiFillStar } from "react-icons/ai";
const Hotels = () => {
  return (
    <div className="p-4 md:p-14">
      <h2 className="text-2xl md:text-4xl font-bold text-center my-2 mb-10">Hotels</h2>
      <div className="flex flex-wrap justify-center">
        <div className="card w-full md:w-80 bg-base-100 shadow-xl mx-2 md:mx-8 my-4">
          <figure>
            <Image src={hotel1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title mx-auto text-center">Hotel Radisson</h2>
            <p className="mx-auto flex justify-center">
              <AiFillStar color="yellow" />
              <AiFillStar color="yellow" />
              <AiFillStar color="yellow" />
              <AiFillStar color="yellow" />
              <AiFillStar color="yellow" />
            </p>
          </div>
        </div>
        <div className="card w-full md:w-80 bg-base-100 shadow-xl mx-2 md:mx-8 my-4">
          <figure>
            <Image src={hotel2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title mx-auto text-center">Dhaka Regency Hotel & Resort</h2>
            <p className="mx-auto flex justify-center">
              <AiFillStar color="yellow" />
              <AiFillStar color="yellow" />
              <AiFillStar color="yellow" />
              <AiFillStar color="yellow" />
              <AiFillStar color="yellow" />
            </p>
          </div>
        </div>
        <div className="card w-full md:w-80 bg-base-100 shadow-xl mx-2 md:mx-8 my-4">
          <figure>
            <Image src={hotel3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title mx-auto text-center">Le Meridien Dhaka</h2>
            <p className="mx-auto flex justify-center">
              <AiFillStar color="yellow" />
              <AiFillStar color="yellow" />
              <AiFillStar color="yellow" />
              <AiFillStar color="yellow" />
              <AiFillStar color="yellow" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
