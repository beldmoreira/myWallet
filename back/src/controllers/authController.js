import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import db from "../db.js";




export async function login (req,res){
    try{
        const { email, password } = req.body;
        const user = await db.collection("users").findOne({ email });
        if (!user) {
          return res.sendStatus(404);
        }
        if(bcrypt.compareSync(password, user.password)) {
            const token = uuid();
            await db.collection("sessions").insertOne({token, userId: user._id});
            return res.send({token, name: user.name});
          }
          return res.sendStatus(404);
    } catch (error) {
        console.log("Error to access user profile");
        console.log(error);
        return res.sendStatus(500);
    }
}

