import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserInfo } from "./types/UserTypes";
import { Response, Server } from "miragejs";

let userArray: UserInfo[] = [
  {
    username: "Hotdog56",
    password: "123",
    role: "ADMIN",
  },
  {
    username: "Arnoldfan123",
    password: "123",
    role: "USER",
  },
  {
    username: "lol123",
    password: "123",
    role: "USER",
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

      return user;
    });
  },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
