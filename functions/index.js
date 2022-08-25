import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import { Header } from './src/components/Header.js';
import { User } from './src/components/User.js';
import { Fun } from './src/components/Fun.js';
import { Physical } from './src/components/Physical.js';
import { Mental } from './src/components/Mental.js';
import { Creative } from './src/components/Creative.js';



const app = express();
app.use(cors());
app.use(express.json());

app.get("/", Header)
app.get("/user", User)


app.get("/physical", Physical)
app.get("/mental", Mental)
app.get("/creative", Creative)
app.get("/fun", Fun)


export const api = functions.https.onRequest(app)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
