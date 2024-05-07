import styles from "./document.module.css";
import clsx from "clsx";
import { convertToThaiDate } from "@/utils/date";
import { api } from "@/trpc/server";
import Image from "next/image";

export default async function Document() {
  const data = await api.document.getDocument.query({ id: "0015" });

  if (!data) return null;

  return (
    <main>
      <div>
        <div className={styles.header}>
          <Image
            alt="ESC"
            src="/assets/header.png"
            width={1239}
            height={235}
            className="h-auto w-full"
          />
        </div>
        <div className={styles.page}>
          <div className={styles.heading}>
            <p className={styles["heading-documentId"]}>
              <b>ที่</b> กวศ.{data.project.id}-{data.heading.id} /{" "}
              {data.heading.term}
            </p>

            <div className={styles["heading-esc"]}>
              <p>กรรมการนิสิตคณะวิศวกรรมศาสตร์</p>
              <p>จุฬาลงกรณ์มหาวิทยาลัย</p>
            </div>
          </div>

          <br />
          <br />

          <div className={styles["heading-datetext"]}>
            <p>{convertToThaiDate(data.heading.date, "document")}</p>
          </div>

          <div className="">
            <br />
            <p>
              <b>เรื่อง</b> ขออนุญาตใช้{data.request.item_type}
            </p>
            <p>
              <b>เรียน</b> รองคณบดี ({data.staff.student_affairs_dean})
            </p>
            <p>
              <b>สิ่งที่แนบมา</b> รายละเอียดการใช้เลือกรายการ
            </p>
          </div>

          <div className={styles["body-text"]}>
            <br />
            <p>
              ตามที่{data.project.from} กรรมการนิสิตคณะวิศวกรรมศาสตร์
              จุฬาลงกรณ์มหาวิทยาลัย ได้รับอนุมัติให้จัดโครงการ
              {data.project.name} เพื่อ{data.project.objective}
            </p>
            <p>
              {data.project.from} กรรมการนิสิตคณะวิศวกรรมศาสตร์
              จุฬาลงกรณ์มหาวิทยาลัย จึงขออนุญาตใช้ สถานที่และอุปกรณ์เพื่อ
              {data.project.activity} โดยมีรายละเอียดตามเอกสารแนบ
            </p>
            <br />
            <p>จึงเรียนมาเพื่อโปรดพิจารณาอนุมัติ</p>
          </div>

          <br />
          <br />
          <br />

          <div className={styles["president-signature"]}>
            <p>({data.staff.esc_president})</p>
            <p>หัวหน้านิสิต</p>
          </div>

          <br />
          <br />

          <div className="">
            <p>
              <b>เรียน</b> รองคณบดี ({data.staff.academic_dean})
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
              <p>({data.staff.student_affairs_dean})</p>
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
              <p>({data.responsible_student.venue.name})</p>
              <p>รองประธานโครงการฝ่ายสถานที่</p>
            </div>

            <div className={styles["footer-signature-box"]}>
              <p>({data.staff.head_of_venue})</p>
              <p>หัวหน้างานฝ่ายสถานที่และกายภาพ</p>
            </div>
          </div>

          <br />
          <br />
        </div>
      </div>

      <div className={clsx(styles.page, styles["details-page"])}>
        <p className={styles.details}>
          รายละเอียดการขอใช้{data.request.item_type}
        </p>
        <p className={styles["event-date"]}>
          {convertToThaiDate(data.request.date, "descriptive")}
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
              <td>{data.request.time_frame}</td>
              <td>
                <ul>
                  {data.request.locations.map((location, i) => (
                    <li key={i}>{location}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {data.request.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </td>
              <td>จัดกิจกรรม Blood Day</td>
              <td>
                <ul>
                  {data.request.purposes.map((purpose, i) => (
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
                {data.responsible_student.during.name} &emsp; โทร.
                {data.responsible_student.during.tel}
              </td>
            </tr>
            <tr>
              <td>นิสิตผู้รับผิดชอบฝ่ายสถานที่ในโครงการ</td>
              <td>
                {data.responsible_student.venue.name} &emsp; โทร.{" "}
                {data.responsible_student.venue.tel}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
