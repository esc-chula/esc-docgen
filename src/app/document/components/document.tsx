import styles from "../style/styles.module.css";
import clsx from "clsx";
import { convertToThaiDate } from "../utils/date";

const data = {
  projectId: "8002",
  documentId: "0014",
  from: "ฝ่ายกิจการภายใน",
  documentDate: new Date("2023-08-25"),
  to: "รองคณบดี (รศ. ดร.สรรเพชญ ชื้อนิธิไพศาล)",
  itemToRequest: "สถานที่และอุปกรณ์",
  projectName: "รับน้องหนึ่งเดือน ปีการศึกษา 2566",
  projectObjective:
    "สร้างความสัมพันธ์อันดีและความสามัคคีระหว่างนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
  activity: "จัดกิจกรรม Blood Day",
  toFooter: "รองคณบดี (ศ. ดร.เกษม ชูจารุกูล)",
  headOfVenueStaff: "วัชรพงษ์ ทองคำสุจริต",
  requestDate: new Date("2023-09-02"),
  requestDetailType: "สถานที่",
  requestTimeFrame: "09.00 น. - 16.00 น.",
  requestLocations: [
    "อาคาร 1 ชั้น 3 ห้อง 304",
    "อาคาร 3 ชั้น 3 ห้อง 301, 304, 306, 309, 315 และ 318",
    "อาคาร 3 ชั้น 4 ห้อง 401, 404, 409, 415 และ 418",
    "อาคารวิศวฯ 100 ปี ชั้น 5 ห้อง 501, 502, 504 และ 505",
    "โถงอาคารเจริญวิศวกรรม ชั้น 2",
  ],
  requestItems: ["ไมโครโฟน", "คอมพิวเตอร์", "โปรเจกเตอร์", "เคร่ืองปรับอากาศ"],
  requestPurposes: ["ขออนุญาตใช์เสียง", "ขออนุญาตเคลื่อนย้ายโต๊ะและเก้าอี้"],
  responsibleStudentDuring: {
    name: "กฤติน สุวรรณทัต",
    tel: "081-234-5678",
  },
  responsibleStudentVenue: {
    name: "กฤติน สุวรรณทัต",
    tel: "081-234-5678",
  },
};

export default function Document() {
  return (
    <main>
      <div>
        <img alt="ESC" src="/assets/header.png" className={styles["header"]} />
        <div className={styles["page"]}>
          <div className={styles["heading"]}>
            <p className={styles["heading-documentId"]}>
              <b>ที่</b> กวศ.{data.projectId}-{data.documentId} / 2566
            </p>

            <div className={styles["heading-esc"]}>
              <p>กรรมการนิสิตคณะวิศวกรรมศาสตร์</p>
              <p>จุฬาลงกรณ์มหาวิทยาลัย</p>
            </div>
          </div>

          <br />
          <br />

          <div className={styles["heading-datetext"]}>
            <p>{convertToThaiDate(data.documentDate, "document")}</p>
          </div>

          <div className="">
            <br />
            <p>
              <b>เรื่อง</b> ขออนุญาตใช้{data.itemToRequest}
            </p>
            <p>
              <b>เรียน</b> {data.to}
            </p>
            <p>
              <b>สิ่งที่แนบมา</b> รายละเอียดการใช้เลือกรายการ
            </p>
          </div>

          <div className={styles["body-text"]}>
            <br />
            <p>
              ตามที่{data.from} กรรมการนิสิตคณะวิศวกรรมศาสตร์
              จุฬาลงกรณ์มหาวิทยาลัย ได้รับอนุมัติให้จัดโครงการ{data.projectName}{" "}
              เพื่อ{data.projectObjective}
            </p>
            <p>
              {data.from} กรรมการนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
              จึงขออนุญาตใช้ สถานที่และอุปกรณ์เพื่อ{data.activity}{" "}
              โดยมีรายละเอียดตามเอกสารแนบ
            </p>
            <br />
            <p>จึงเรียนมาเพื่อโปรดพิจารณาอนุมัติ</p>
          </div>

          <br />
          <br />
          <br />

          <div className={styles["president-signature"]}>
            <p>(กันตพงศ์ โหราเรือง)</p>
            <p>หัวหน้านิสิต</p>
          </div>

          <br />
          <br />

          <div className="">
            <p>
              <b>เรียน</b> รองคณบดี (ศ. ดร.เกษม ชูจารุกูล)
            </p>
            <p className={styles["vicedean-address"]}>
              - เพื่อโปรดพิจารณาอนุมัติ
            </p>
          </div>

          <br />
          <br />
          <br />

          <div className={styles["sa-dean-signature"]}>
            <div className={styles["sa-dean-signature-box"]}>
              <p>(รศ. ดร.สรรเพชญ ชื้อนิธิไพศาล)</p>
              <p>รองคณบดี</p>
            </div>
          </div>

          <br />
          <br />

          <hr className={styles["horizontal-line"]} />

          <br />
          <br />
          <br />

          <div className={styles["footer-signature"]}>
            <div className={styles["footer-signature-box"]}>
              <p>({data.responsibleStudentVenue.name})</p>
              <p>รองประธานโครงการฝ่ายสถานที่</p>
            </div>

            <div className={styles["footer-signature-box"]}>
              <p>({data.headOfVenueStaff})</p>
              <p>หัวหน้างานฝ่ายสถานที่และกายภาพ</p>
            </div>
          </div>

          <br />
          <br />
        </div>
      </div>

      <div className={clsx(styles["page"], styles["details-page"])}>
        <p className={styles["details"]}>
          รายละเอียดการขอใช้{data.requestDetailType}
        </p>
        <p className={styles["event-date"]}>
          {convertToThaiDate(data.requestDate, "descriptive")}
        </p>

        <table className={styles["detail-table"]}>
          <thead>
            <tr>
              <th>เวลา</th>
              <th>สถานที่</th>
              <th>อุปกรณ์ที่ขอใช้</th>
              <th>วัตถุประสงค์</th>
              <th>หมายเหตุ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.requestTimeFrame}</td>
              <td>
                <ul>
                  {data.requestLocations.map((location, i) => (
                    <li key={i}>{location}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {data.requestItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </td>
              <td>จัดกิจกรรม Blood Day</td>
              <td>
                <ul>
                  {data.requestPurposes.map((purpose, i) => (
                    <li key={i}>{purpose}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        <br />

        <table className={styles["detail-table"]}>
          <tbody>
            <tr>
              <td>นิสิตผู้รับผิดชอบระหว่างและหลังการใช้งาน</td>
              <td>
                {data.responsibleStudentDuring.name} &emsp; โทร.
                {data.responsibleStudentDuring.tel}
              </td>
            </tr>
            <tr>
              <td>นิสิตผู้รับผิดชอบฝ่ายสถานที่ในโครงการ</td>
              <td>
                {data.responsibleStudentVenue.name} &emsp; โทร.{" "}
                {data.responsibleStudentVenue.tel}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
