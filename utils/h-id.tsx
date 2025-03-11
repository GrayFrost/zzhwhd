export const createHeaderId = (id: string): string => {
  return id.split(" ").join("-");
};
