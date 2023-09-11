import { Session } from "../types/Session";
import { UserInfo } from "../types/UserTypes";

interface loginProps {
  username: string;
  password: string;
}

interface signupProps {
  username: string;
  password: string;
  email: string;
}

interface bookSessionProps {
  title:string
  username:string
}

/**
 * fetchOptions is a fetch builder that takes in diffrent url and can send diffrent request and send with data if needed
 * @param url is a string type http url to the server
 * @param method is to declare which type of request to make to the server
 * @param data is used to send any type of data to the server in a request
 * @returns a fetch with a any url and a finnished build fetch options
 */

const fetchOptions = async <T>(url: string, method: string, data?: T): Promise<Response> => {
  const options = {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await fetch(url, options);
};

/**
 * login is a function that takes in data through userDetails and send a post request to the server
 * @param userDetails is an object that contains {username, password} with type string on both
 * @returns a server response
 */

async function login(userDetails: loginProps): Promise<Response> {
  return await fetchOptions(`api/login`, "POST", userDetails);
}

/**
 * signup is a function that takes in data through userDetails and send a post request to the server
 * @param userDetails is an object that contains {username, password,email} with type string on all three
 * @returns a server response
 */

async function signup(userDetails: signupProps): Promise<Response> {
  return await fetchOptions(`api/signup`, "POST", userDetails);
}

/**
 * fetchSession is a function that makes a request to server to get all the session on the server
 * @returns data in json format
 */

const fetchSession = async (): Promise<Session[]> => {
  const response = await fetchOptions("api/session", "GET");
  if (response === null) throw new Error("could not find session list");
  const data = await response.json() as Session[];

  return data;
};

const deleteSession = async (sessionId: number): Promise<Response> => {
  return await fetchOptions(`api/session/${sessionId}`, "DELETE");
}

/**
 * bookSession is a function that takes in a quary and send a PUT request to the server to update two diffrent objects
 * @param quary is an object that contains two diffrent property
 * @returns a server response
 */

const bookSession = async (quary:bookSessionProps):Promise<Response> => {
  return await fetchOptions("api/bookSession", "PUT", quary);
  
}

/**
 * getUser is a function to get a user by its username with a param
 * @param username is a string type that comes from local storage
 * @returns an object which contains the users data
 */

const getUser = async (username:string):Promise<UserInfo> => {
  
  const res = await fetchOptions(`api/user/${username}`, 'GET')
  if (res === null) throw new Error("could not find user");
  const data = await res.json() as UserInfo
  return data
} 

/**
 * getUsers is a function that fetched all registerd users in the server 
 * @returns registerd users data
 */

const getUsers = async ():Promise<UserInfo[]> => {
  const res = await fetchOptions('api/users','GET')
  if (res === null) throw new Error("could not find the array in the server");
  const data = await res.json() as UserInfo[]
  return data
  
}

/**
 * deleteUser is a function that takes in a id to delete a user form the server 
 * @param id is a number to help the server find the right user
 * @returns a server response
 */

const deleteUser = async (id:number):Promise<Response> => {
  return await fetchOptions(`api/user/${id}`,'DELETE')
  
}


const requestService = { fetchSession, login, signup,bookSession,getUser,getUsers,deleteUser };

export default requestService;
