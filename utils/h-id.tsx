export const createHeaderId = (id: string): string => {
  return id.split(" ").join("-");
};

export function createUniqueHeaderId(
  text: string,
  seen: Record<string, number>
): string {
  seen[text] = (seen[text] || 0) + 1;
  return createHeaderId(`${text}${seen[text] > 1 ? ` ${seen[text] - 1}` : ""}`);
}
