export class Ajax {
  static echo(data?: string) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (data) {
          res(data);
        } else {
          rej(new Error("specific error"));
        }
      }, 300);
    });
  }
}
