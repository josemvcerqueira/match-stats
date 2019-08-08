export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString
    .split("/")
    .map((value: string): number => parseInt(value));

  const [day, month, year] = dateParts;

  return new Date(day, month - 1, year);
};
