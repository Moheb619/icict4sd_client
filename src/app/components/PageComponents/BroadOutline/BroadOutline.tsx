import styles from "./BroadOutline.module.scss";

const BroadOutline = () => {
  return (
    <section id="dates" className="p-4 md:p-14">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold">Broad Outline</h2>
        </div>
        <div className="mt-5">
          <table className={`border-separate border border-slate-400 mx-auto text-lg md:text-xl w-full md:w-[80%] ${styles.broad_outline_table}`}>
            <tbody>
              <tr className={`${styles.broad_outline_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3 font-bold">Industry Exhibition</td>
                <td className="px-2 md:px-4 py-2 md:py-3">Ice Breaking Session</td>
                <td className="px-2 md:px-4 py-2 md:py-3">20 September 2023 at 1400 hours</td>
              </tr>
              <tr className={`${styles.broad_outline_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3"></td>
                <td className="px-2 md:px-4 py-2 md:py-3">Inauguration</td>
                <td className="px-2 md:px-4 py-2 md:py-3">21 September 2023 at 0900 hours</td>
              </tr>
              <tr className={`${styles.broad_outline_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3"></td>
                <td className="px-2 md:px-4 py-2 md:py-3">Exhibition</td>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  20 - 21 September 2023 <small>**Interested participants may keep their stalls open until the end of the conference.</small>
                </td>
              </tr>
              <tr className={`${styles.broad_outline_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3 font-bold">ICICT4SD 2023</td>
                <td className="px-2 md:px-4 py-2 md:py-3">Inauguration</td>
                <td className="px-2 md:px-4 py-2 md:py-3">21 September 2023 at 0900 hours</td>
              </tr>
              <tr className={`${styles.broad_outline_table_tr}`}>
                <td className="px-2 md:px-4 py-2 md:py-3"></td>
                <td className="px-2 md:px-4 py-2 md:py-3">Conference</td>
                <td className="px-2 md:px-4 py-2 md:py-3">21 - 23 September 2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BroadOutline;
