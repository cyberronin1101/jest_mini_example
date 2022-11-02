export const validateValue = (value: number) => !(value < 0 || value > 100);

export const mapArrayToString = (arr: (number | string)[]): string[] =>
  arr.filter((item) => Number.isInteger(item)).map(String);
