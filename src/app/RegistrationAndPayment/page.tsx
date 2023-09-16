import Link from "next/link";
import styles from "./RegistrationAndPayment.module.scss";

const RegistrationAndPayment = () => {
  return (
    <div className="p-4 md:p-14">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-center">Registration & Payment</h1>

      <div className="flex justify-center flex-col">
        <div className="">
          <h5 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Registration Link</h5>
        </div>
        {/* <div className="mx-auto my-2">
          <Link href={"https://forms.gle/AdhqkH8GPqyxHggZA"} className="btn btn-primary w-auto text-[0.7rem] md:text-[0.9rem]">
            Camera Ready Submission
          </Link>
        </div> */}
        <div className="mx-auto my-2">
          <Link href={"https://icict4sdreg.bup.edu.bd/"} className="btn btn-info w-auto text-[0.7rem] md:text-[0.9rem]">
            Registration Payment
          </Link>
        </div>
        <div className="my-3 w-[95%] md:w-[55%] mx-auto">
          <ul className="list-disc">
            <li>Click the above links to access the required page.</li>
            <li>
              <strong>At least one author</strong> must register and present the paper at the conference for it to be included in the proceedings.
            </li>
            {/* <li>
              Last date of Camera-Ready Submission is <strong>06 September, 2023.</strong>
            </li> */}
            <li>
              Last date of Registration Fee Payment is <strong>10 September, 2023.</strong>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="overflow-x-auto">
        <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Payment Details</h1>
        <table className={`registration_fees_table border-separate border border-slate-400 mx-auto text-base md:text-lg my-5 ${styles.registration_fees_table}`}>
          <tbody>
            <tr className="bg-black text-white">
              <th>Sl No.</th>
              <th>Registration Category</th>
              <th>IEEE Members</th>
              <th>Non-IEEE Members</th>
            </tr>
            <tr className={`${styles.registration_fees_table_row}`}>
              <td>1</td>
              <td>Local Student Authors</td>
              <td>7,500</td>
              <td>10,000</td>
            </tr>
            <tr className={`${styles.registration_fees_table_row}`}>
              <td>2</td>
              <td>Local Authors</td>
              <td>10,000</td>
              <td>15,000</td>
            </tr>
            <tr className={`${styles.registration_fees_table_row}`}>
              <td>3</td>
              <td>Local Participants</td>
              <td>7,500</td>
              <td>10,000</td>
            </tr>
            <tr className={`${styles.registration_fees_table_row}`}>
              <td>4</td>
              <td>International Student Author</td>
              <td>USD 150</td>
              <td>USD 200</td>
            </tr>
            <tr className={`${styles.registration_fees_table_row}`}>
              <td>5</td>
              <td>International Student Participants</td>
              <td>USD 100</td>
              <td>USD 150</td>
            </tr>
            <tr className={`${styles.registration_fees_table_row}`}>
              <td>6</td>
              <td>International Authors</td>
              <td>USD 200</td>
              <td>USD 250</td>
            </tr>
            <tr className={`${styles.registration_fees_table_row}`}>
              <td>7</td>
              <td>International Participants</td>
              <td>USD 150</td>
              <td>USD 200</td>
            </tr>
            <tr className={`${styles.registration_fees_table_row}`}>
              <td>8</td>
              <td>Local IEEE Life member</td>
              <td>5,000</td>
              <td></td>
            </tr>
            <tr className={`${styles.registration_fees_table_row}`}>
              <td>9</td>
              <td>International IEEE Life Members</td>
              <td>USD 150</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistrationAndPayment;
