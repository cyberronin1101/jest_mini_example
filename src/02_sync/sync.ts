export class Lodash {
  compact = <T>(arr: T[]) => {
    return arr.filter((i): i is Exclude<T, false> => {
      return !!i;
    });
  };

  groupBy = <T>(arr: T[], prop: keyof T | Function) => {
    return arr.reduce((acc, i) => {
      let key;
      if (typeof prop === "function") {
        key = prop(i);
      } else {
        key = i[prop];
      }

      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(i);
      return acc;
    }, {} as { [key: string]: T[] });
  };
}
