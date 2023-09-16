import Image from "next/image";
import Link from "next/link";
import bupLogo from "public/img/buplogo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer p-4 md:p-10 bg-base-200 text-base-content flex flex-col md:flex-row justify-between bg-gray-900 text-white">
        <div className="w-full md:w-2/3">
          <p className="text-xl md:text-4xl text-green-900 font-bold" style={{ textShadow: "1px 1px black" }}>
            ICICT4SD
          </p>
          <p className="w-full md:w-[90%] mt-4 md:mt-0">
            Bangladesh University of Professionals (BUP) is a unique public university administered by the Armed Forces upholding the motto &quot;Excellence Through Knowledge&quot;. BUP will host the
            2nd International Conference on Information and Communication Technology for Sustainable Development (ICICT4SD) on 21-23 September, 2023 at Bangladesh University of Professionals, Dhaka to
            attain the vision of Digital Bangladesh.
          </p>
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          <p className="text-lg md:text-2xl underline underline-offset-8">Contact</p>
          <p>
            Bangladesh University of Professionals <br />
            Mirpur Cantonment <br />
            Dhaka-1216, Bangladesh <br />
            Email: info.icict4sd@bup.edu.bd
          </p>
        </div>
      </footer>

      <footer className="footer px-10 py-4 border-t bg-black text-white text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <Image src={bupLogo} alt="logo" className="h-10 w-10" />
          <p>
            Developed by <br />
            Saeed Hossain Moheb
            <br />
            Department of ICT, FST, BUP
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          {/* <div className="grid grid-flow-col gap-4">
            <Link href={"#"} className="hover:bg-blue-500 p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
          </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
