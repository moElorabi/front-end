export function extractYearFromDate(dateString: string) {
  const dateParts = dateString.split(" ");
  if (dateParts.length === 3) {
    return parseInt(dateParts[2], 10);
  } else {
    throw new Error("Invalid date format");
  }
}
