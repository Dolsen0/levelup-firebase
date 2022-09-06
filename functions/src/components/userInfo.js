import { dbConnect } from "./dbConnect.js";

//gets all users in db. Used for testing and not necessary to run.
export async function getAllUserInfo(req,res){
    const db = dbConnect();
    const collection = await db.collection('Users').get()
        .catch(err => res.status(500).send(err));
    const users = collection.docs.map(doc =>{
        let user = doc.data();
        user.id = doc.id;
        return user;
    })
    res.send(users)
}


// gets individual user info. Needs to authenticate user. 
// Currently displays first user in DB
export async function getUserInfo(req,res){
    const db = dbConnect();
    const collection = await db.collection('Users').get()
        .catch(err => res.status(500).send(err));
    const users = collection.docs.map(doc =>{
        let user = doc.data();
        user.id = doc.id;
        return user;
    })
    res.send(users[0])
}


//get user score

export async function getUserScore(req,res){
    const db = dbConnect();
    const collection = await db.collection('Users').doc('User1').get()
        .catch(err => res.status(500).send(err));
    const user = collection.docs.map(doc =>{
        let userScore = doc.data("score")
        return userScore
    })
    res.send(user)
}


// Post request. New Signup -  creates user. Needs..
export async function createNewUser(req, res){
    const newUser = req.body;
    
    // create auth to make sure user has access to email.
    // if email exists in DB inform user their email is in use.  
    
    const db = dbConnect();
    await db.collection('Users').add(newUser)
        .catch(err => res.status(500).send(err));
    res.status(201);
    getUserInfo(req, res); //create message to update user they were added.
}


export async function updateUserScore(req, res){
    const scoreUpdate = req.body;
    const { userId } = req.params;
    res.send(203).send('Score Updated')
    console.log("updated")
}