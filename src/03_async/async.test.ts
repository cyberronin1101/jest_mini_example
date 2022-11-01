import { Ajax } from "./async";
import axios from "axios";
// import Mock = jest.Mock;

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Ajax: echo", () => {
  test("should return value async", async () => {
    const result = await Ajax.echo("some data");
    expect(result).toBe("some data");
  });

  test("should return value with promise", () => {
    return Ajax.echo("some data").then((data) => {
      expect(data).toBe("some data");
    });
  });

  test("should catch error with promise", () => {
    return Ajax.echo().catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  });

  test("should catch error with promise", async () => {
    try {
      await Ajax.echo();
    } catch ({ message }) {
      expect(message).toBe("specific error");
    }
  });
});

describe("Ajax: GET", () => {
  type todoType = { id: number; title: string; completed: boolean };

  let response: {
    data: { todos: todoType[] };
  };

  let todos: todoType[];
  // let axiosGet: Mock;

  beforeEach(() => {
    // axiosGet = jest.fn(axios.get);
    todos = [{ id: 1, title: "todo 1", completed: false }];
    response = {
      data: { todos },
    };
  });

  test("Should return data from backend", () => {
    // axiosGet.mockReturnValue(response);

    mockedAxios.get.mockReturnValue(
      new Promise((res) => {
        res(response);
      })
    );

    return Ajax.get().then((data) => {
      expect(data.todos).toEqual(todos);
    });
  });
});
