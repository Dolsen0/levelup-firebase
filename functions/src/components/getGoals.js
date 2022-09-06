import { dbConnect } from "./dbConnect.js";

export async function getGoals(){
    const db = dbConnect();
    const collection = db.collection('goals').get()
        .catch(err => res.status(500).send(err));
    const goals = collection.docs.map(doc=> {
        let goal = doc.data();
        goal.id = doc.id;
        return goal
    })
    res.send(goals)
}