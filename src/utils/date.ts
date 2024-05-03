export function parseDateString(dateInput: string): Date {
  return new Date(dateInput);
}

export function convertToThaiDate(
  dateInput: string,
  mode: "document" | "descriptive",
): string {
  const date = parseDateString(dateInput);

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

  switch (mode) {
    case "document":
      return `วันที่ ${date.getDate()} ${month} ${year}`;
    case "descriptive":
      return `วัน${day}ที่ ${date.getDate()} ${month} พ.ศ. ${year}`;
  }
}
