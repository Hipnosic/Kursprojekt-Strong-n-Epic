import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserInfo } from "./types/UserTypes";
import { Server } from "miragejs";

let userArray: UserInfo[] = [
  {
    id: 1,

    username: "Hotdog56",
    password: "123",
    role: "ADMIN",
    sessions: [],
  },

  {
    id: 2,

    username: "Arnoldfan123",
    password: "123",
    role: "USER",
    sessions: [],
  },

  {
    id: 3,

    username: "lol123",
    password: "123",
    role: "USER",
    sessions: [],
  },
];

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
      const isregisterd = userArray.find((user) => user.username.toLowerCase().includes(body.username.toLowerCase()));
      if (isregisterd !== undefined) throw new Error("user already exist");
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
