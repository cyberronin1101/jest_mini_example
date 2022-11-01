// const expect = <T>(value: T) => ({
//   toBe: (exp: T) => {
//     if (value === exp) {
//       console.log("success");
//     } else {
//       console.error(`value is ${value}, but exp ${exp}`);
//     }
//   },
// });

export const sum = (a: number, b: number) => a + b;
export const nativeNull = () => null;

// expect(sum(41, 1)).toBe(42);
