export const map = <B, T>(arr: T[], cb: (i: T, idx: number) => B): B[] => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i));
  }
  return result;
};
