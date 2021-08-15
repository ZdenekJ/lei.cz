export function dateFormat(dateString) {
  const d = new Date(dateString);
  const month = "" + (d.getMonth() + 1);
  const day = "" + d.getDate();
  const year = d.getFullYear();
  return `${day}. ${month}. ${year}`;
}

export function timeFormat(dateString) {
  const d = new Date(dateString);
  const hours = "" + d.getHours();
  const minutes = "" + ((d.getMinutes() < 10 ? "0" : "") + d.getMinutes());
  return `${hours}:${minutes}`;
}

export function dateTimeFormat(dateString) {
  return dateFormat(dateString) + " " + timeFormat(dateString);
}
