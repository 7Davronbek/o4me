export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

  return formattedDate;
};

export const numberFormat = (x) => {
  return `${x.toLocaleString()}`;
};

export const getTrimmedDescription = (description) => {
  if (!description) return "";
  return description.length > 200
    ? `${description.slice(0, 200)}...`
    : description;
};
