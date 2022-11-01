import axios from "axios";

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

  static async get() {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
