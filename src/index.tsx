import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserInfo } from "./types/UserTypes";
import { Server } from "miragejs";

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
      let body = JSON.parse(request.requestBody);
      console.log(body);
      // const user = userArray.find((user) => user.username.toLowerCase().includes(body.username.toLowerCase()));

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
