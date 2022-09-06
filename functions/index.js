import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import { createNewUser, getAllUserInfo, getUserInfo, getUserScore, updateUserScore } from './src/components/userInfo.js';
import { getGoals } from './src/components/getGoals.js';




const app = express();
app.use(cors());
app.use(express.json());


app.get("/", getGoals) // replace getUserInto general page. no user info until logged in.

app.get("/user", getUserInfo) // after logging into app. Saved user info displays
app.get("/userscore", getUserScore) // after logging into app. Saved user info displays

app.get("/signup", getAllUserInfo) 
app.post("/signup", createNewUser) // creates new user and adds to database.

app.patch("/updateScore/:userId", updateUserScore)




export const api = functions.https.onRequest(app)
