export const getDateInOneMonth = () => {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  return date.toJSON();
};

export const getDateOneMonthAgo = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  return date.toJSON();
};
