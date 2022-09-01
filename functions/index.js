import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import { createNewUser, getAllUserInfo, getUserInfo, updateUserScore } from './src/components/userInfo.js';
// import { Header } from './src/components/Header.js';
// import  getUser  from './src/components/getUser.js';
// import { User } from './src/components/User.js';
// import { Fun } from './src/components/Fun.js';
// import { Physical } from './src/components/Physical.js';
// import { Mental } from './src/components/Mental.js';
// import { Creative } from './src/components/Creative.js';
// import { UpdatePhysical } from './src/components/UpdatePhysical.js';
// import { CreateFun } from './src/CreateFun.js';



const app = express();
app.use(cors());
app.use(express.json());


app.get("/", getAllUserInfo) // replace getUserInto general page. no user info until logged in.
app.get("/user", getUserInfo) // after logging into app. Saved user info displays
app.get("/signup", getAllUserInfo) 
app.post("/signup", createNewUser)
app.patch("/updateScore/:userId", updateUserScore)




export const api = functions.https.onRequest(app)
