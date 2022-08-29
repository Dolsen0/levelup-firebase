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