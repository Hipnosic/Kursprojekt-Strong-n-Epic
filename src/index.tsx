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
    id: 1,
    title: "Muscle Training",
    trainer: "Arnold Schwarzenegger",
    start: new Date("2023-10-02T15:20").toLocaleTimeString(),
    end: new Date("2023-10-02T16:30").toLocaleTimeString(),
    date: new Date("2023-10-02T15:20").toLocaleDateString(),
    spots: 15,
    registered: [],
  },
  {
    id: 2,
    title: "Basic Wing-chun",
    trainer: "Jackie Chan",
    start: new Date("2023-10-05T12:00").toLocaleTimeString(),
    end: new Date("2023-10-02T13:30").toLocaleTimeString(),
    date: new Date("2023-10-02T12:00").toLocaleDateString(),
    spots: 10,
    registered: [],
  },
  {
    id: 3,
    title: "Advanced Kung-Fu",
    trainer: "Jet Li",
    start: new Date("2023-10-08T16:40").toLocaleTimeString(),
    end: new Date("2023-10-08T18:00").toLocaleTimeString(),
    date: new Date("2023-10-08T16:40").toLocaleDateString(),
    spots: 15,
    registered: [],
  },
];

new Server({
  routes() {
    this.namespace = "api";

    this.get("/users", () => {
      return userArray;
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

    this.post("/signup", (schema, request) => {
      let body = JSON.parse(request.requestBody);
      const isRegisterd = userArray.find((user) => user.username.toLowerCase().includes(body.username.toLowerCase()));
      if (isRegisterd !== undefined) throw new Error("user already exist");
      body.id = userArray.length + 1;
      body.session = [];
      userArray.push(body);

      return body;
    });

    this.get("/session", () => {
      return sessionArray;
    });

    this.put("/bookSession", (schema, request) => {
      const quary = JSON.parse(request.requestBody);

      const session = sessionArray.find((session) => session.title === quary.title);
      if (session === undefined) throw new Error("Session cant be found in the server");
      const user = userArray.find((user) => user.username.toLowerCase().includes(quary.username.toLowerCase()));
      if (user === undefined) throw new Error("user could not be found in the server");
      const isBooked = user.sessions.find((session) => session.title === quary.title);
      if (isBooked !== undefined) throw new Error("its already added");

      const obj = {
        id: session.id,
        title: session.title,
        trainer: session.trainer,
        start: session.start,
        end: session.end,
        date: session.date,
      };

      session.registered.push(user);
      user.sessions.push(obj);

      return session;
    });

    this.post("/session", (schema, request) => {
      console.log("recieved post");
      const sessionData = JSON.parse(request.requestBody);
      const newSession = {
        id: sessionArray.length + 1, // Automatically assign an ID
        title: sessionData.title,
        trainer: sessionData.trainer,
        start: sessionData.start,
        end: sessionData.end,
        date: sessionData.date,
        spots: sessionData.spots,
        registered: [],
      };
      sessionArray.push(newSession);
      return newSession;
    });

    this.delete("/session/:id", (schema, request) => {
      const sessionId = request.params.id;
      const sessionIndex = sessionArray.findIndex((session) => session.id === parseInt(sessionId));

      if (sessionIndex === -1) {
        throw new Response("Session not found", { status: 404 });
      }

      sessionArray.splice(sessionIndex, 1);

      return sessionArray;
    });

    this.get("/user/:username", (schema, request) => {
      const username = request.params.username;

      const user = userArray.find((user) => user.username.toLowerCase().includes(username.toLowerCase()));
      if (user === undefined) throw new Error("user could not be found in the server");

      return user;
    });

    this.delete("/user/:id", (schema, request) => {
      const id = request.params.id;

      const user = userArray.findIndex((user) => user.id === parseInt(id));
      if (user === undefined) throw new Error("user could not be found in the server");
      userArray.splice(user, 1);

      return userArray;
    });

    this.put("/user/:id", (schema, request) => {
      const id = request.params.id;
      const role = JSON.parse(request.requestBody);
      const user = userArray.find((user) => user.id === parseInt(id));
      if (user === undefined) throw new Error("user could not be found in the server");
      user.role = role;

      return user;
    });

    this.put("/session/:id", (schema, request) => {
      const id = request.params.id;
      const updatedSession = JSON.parse(request.requestBody);
      const session = sessionArray.find((session) => session.id === parseInt(id));
      if (session === undefined) throw new Error("session could not be found in the server");
      if (updatedSession.title !== "") session.title = updatedSession.title;
      if (updatedSession.trainer !== "") session.trainer = updatedSession.trainer;
      if (updatedSession.start !== "") session.start = updatedSession.start;
      if (updatedSession.end !== "") session.end = updatedSession.end;
      if (updatedSession.date !== "") session.date = updatedSession.date;
      if (updatedSession.spots !== 0) session.spots = parseInt(updatedSession.spots);

      return session;
    });

    this.delete("/user/session/:id", (schema, request) => {
      const sessionId = request.params.id;
      const username = JSON.parse(request.requestBody);
      const user = userArray.find((user) => user.username.toLowerCase().includes(username.toLowerCase()));
      if (user === undefined) throw new Error("user could not be found in the server");
      const session = sessionArray.find((session) => session.id === parseInt(sessionId));
      if (session === undefined) throw new Error("session could not be found in the server");
      const findUserIndex = session.registered.findIndex((user) => user.username === username);
      if (findUserIndex === -1) throw new Error("could not find user in this session");
      session.registered.splice(findUserIndex, 1);
      const findSessionIndex = user.sessions.findIndex((session) => session.id === parseInt(sessionId));
      if (findSessionIndex === -1) throw new Error("could not find session in users list");
      user.sessions.splice(findSessionIndex, 1);

      return { usersList: user.sessions, sessionList: session.registered };
    });
  },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
