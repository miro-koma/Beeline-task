import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";
import useFetch from "../hooks/useFetch";

// const {  users, fetchUser, clearUser, removeUser, loading  } = useFetch();

jest.mock("../hooks/useFetch");

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
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      },
];

describe("Home", () => {
  it("shows loading when data are being fetched", () => {
    useFetch.mockReturnValue({
      loading: true,
      users: [],
    });

    const { getByTestId } = render(<Home />);

    expect(getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("shows the number of users when data are fetched", () => {
    useFetch.mockReturnValue({
      loading: false,
      users: stubbedUsers
    });
    const { getByTestId } = render(<Home />);

    expect(getByTestId("user-number")).toBeInTheDocument();
  });

  it("show the list of users when data are fetched", () => {
    useFetch.mockReturnValue({
      loading: false,
      users: stubbedUsers,
    });
    const { getByTestId } = render(<Home />);

    expect(getByTestId("user-list")).toBeInTheDocument();
  });
});