import { getAllUsers } from "./getAllUsers";

const stubbedUsers = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
];

describe("all users request", () => {
  it("should return status code 200 and a defined body as response", async () => {
    // Mock API
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve<any>({
        json: () =>
          Promise.resolve({
            status: 200,
            data: stubbedUsers,
          }),
      })
    );

    const result = await getAllUsers();

    expect(result.status).toBe(200);
    expect(result.data).toBe(stubbedUsers);
  });

  it("should catch error", async () => {
    // Mock API
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve<any>({
        json: () =>
          Promise.resolve({
            status: 500,
          }),
      })
    );

    const result = await getAllUsers();

    expect(result.status).toBe(500);
    expect(result.data).not.toBeDefined();
  });
});
