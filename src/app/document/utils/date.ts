// input Date and returns a thai date of the format วันพฤหัสบดีที่ 10 สิงหาคม พ.ศ. 2566
export function convertToThaiDate(date: Date): string {
  const thaiDays = [
    "อาทิตย์",
    "จันทร์",
    "อังคาร",
    "พุธ",
    "พฤหัสบดี",
    "ศุกร์",
    "เสาร์",
  ];

  const thaiMonths = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

  const thaiYearOffset = 543;

  const day = thaiDays[date.getDay()];
  const month = thaiMonths[date.getMonth()];
  const year = date.getFullYear() + thaiYearOffset;

  return `วัน${day}ที่ ${date.getDate()} ${month} พ.ศ. ${year}`;
}
