export function dateFormat(dateString) {
  const d = new Date(dateString);
  const month = "" + (d.getMonth() + 1);
  const day = "" + d.getDate();
  const year = d.getFullYear();
  return `${day}. ${month}. ${year}`;
}
