import { dbConnect } from "./dbConnect.js";

export async function getUserInfo(req,res){
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

export async function createNewUser(req, res){
    const newUser = req.body;
    if(!newUser || !newUser.user){
        res.status(400).send( {success: false, message: "invalid" });
        return;
    }
    const db = dbConnect();
    await db.collection('Users').add('newUser')
    .catch(err => res.status(500).send(err));
    res.status(201);
    getUsers(req, res);
}


export async function updateUserScore(req, res){
    const scoreUpdate = req.body;
    const { userId } = req.params;
    res.send(203).send('Score Updated')
    console.log("updated")
}