import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserInfo } from "./types/UserTypes";
import { Session } from "./types/Session";
import { Server } from "miragejs";

let userArray: UserInfo[] = [
  {
    id: 1,

    username: "Hotdog56",
    password: "123",
    email: "hotdoglover@gmail.com",
    role: "ADMIN",
    sessions: [],
  },

  {
    id: 2,

    username: "Arnoldfan123",
    password: "123",
    email: "arnoldisthebest@hotmail.com",
    role: "USER",
    sessions: [],
  },

  {
    id: 3,

    username: "lol123",
    password: "123",
    email: "redditmoderator@gmail.com",
    role: "USER",
    sessions: [],
  },
];

let sessionArray: Session[] = [
  {
    title: "Muscle Training",
    trainer: "Arnold Schwarzenegger",
    start: new Date("2023-10-02T15:20").toLocaleTimeString(),
    end: new Date("2023-10-02T16:30").toLocaleTimeString(),
    date: new Date("2023-10-02T15:20").toLocaleDateString(),
    spots: 15,
    registered: [],
  },
  {
    title: "Basic Wing-chun",
    trainer: "Jackie Chan",
    start: new Date("2023-10-05T12:00").toLocaleTimeString(),
    end: new Date("2023-10-02T13:30").toLocaleTimeString(),
    date: new Date("2023-10-02T12:00").toLocaleDateString(),
    spots: 10,
    registered: [],
  },
  {
    title: "Advanced Kung-Fu",
    trainer: "Jet Li",
    start: new Date("2023-10-08T16:40").toLocaleTimeString(),
    end: new Date("2023-10-08T18:00").toLocaleTimeString(),
    date: new Date("2023-10-08T16:40").toLocaleDateString(),
    spots: 15,
    registered: [],
  }
]

new Server({
  routes() {
    this.namespace = "api";

    this.get("/login", () => {
      return { users: userArray };
    });

    this.post("/login", (schema, request) => {
      const body = JSON.parse(request.requestBody);
      const user = userArray.find((user) => user.username.toLowerCase().includes(body.username.toLowerCase()));
      if (user === undefined) throw new Error("user could not be found in the db");
      if (body === undefined || body.password !== user.password) {
        let error = new Error("Failed to identify user with given credentials");
        error.name = "InvalidAuthenticationException";
        throw error;
      }

      return { users: body };
    });

    this.post("/signup", (schema, request) => {
      let body = JSON.parse(request.requestBody);
      const isRegisterd = userArray.find((user) => user.username.toLowerCase().includes(body.username.toLowerCase()));
      if (isRegisterd !== undefined) throw new Error("user already exist");
      body.id = userArray.length + 1;
      body.session = [];
      userArray.push(body);

      return { users: body };
    });
  },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
