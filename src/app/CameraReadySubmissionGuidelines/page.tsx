import Link from "next/link";

const CameraReadySubmissionGuidelines = () => {
  return (
    <div className="p-8 md:p-14">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Instruction for Preparing Camera-Ready Paper</h1>
      <div className="mx-auto my-2 text-center my-5">
        <button className="btn btn-primary w-auto text-[0.7rem] md:text-[0.9rem]" disabled>
          <a href="https://forms.gle/AdhqkH8GPqyxHggZA">Camera Ready Submission (Submission time is over)</a>
        </button>

        <p className="my-5">
          Last date of Camera-Ready Submission is <strong>08 September, 2023.</strong>
        </p>
      </div>

      <div className="my-2 md:my-10">
        <ul className="list-disc md:px-10">
          <li>Click the above link to access the required page.</li>
          <li>The paper must meet the submission guidelines provided by IEEE.</li>
          <li>Last date of Submission 08 September, 2023</li>
          <li>Keep in mind that an author must register and present the paper at the conference for it to be included in the proceedings.</li>
          <li>Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements.</li>
          <li>Without presenting, papers will not be included in the conference proceedings.</li>
        </ul>
      </div>

      {/* Step 1 */}
      <div className="my-4 md:my-10">
        <h3 className="text-xl font-bold md:pl-3">Step 1: Prepare your revised final manuscript</h3>
        <ul className="list-disc md:px-10">
          <li>Address reviewers comments and revise your paper accordingly. </li>
          <li>Make sure that all Figures and Tables are of high quality and their content is easily readable.</li>
          <li>Don&apos;t use author titles (Dr., Engg., etc.) in front of names and avoid using positions such as Professor, Lecturer, Scholar, Ing., etc.</li>
          <li>Ensure that the submission information (including title, authors, abstract etc.) is updated with your most recent version.</li>
          <li>Remove all headers and footers including page numbering.</li>
          <li>
            Add the conference title as header (font size: 10, Times New Roman) as below: <br />
            <p className="text-right text-sm">
              2023 International Conference on Information and Communication Technology for Sustainable <br />
              Development (ICICT4SD), 21-23 September, Dhaka
            </p>
          </li>
        </ul>
      </div>

      {/* Note */}
      <p className="text-red-600 font-bold text-center">Detailed Instruction regarding copyright and PDF eXpress will be provided later.</p>
    </div>
  );
};

export default CameraReadySubmissionGuidelines;
