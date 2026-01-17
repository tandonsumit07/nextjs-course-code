import { connectToDatabase } from "../../../lib/db"
import {hashPassword} from "../../../lib/auth"
async function handler(req, res){
 if(req.method === 'POST'){
        const data = req.body;
        const {email, password} = data;

        const client = await connectToDatabase();
        const db = client.db('userDB-management');

        const existingUser = await db.collection('users').findOne({email: email})
        if(existingUser){
            return res.status(422).json({message: 'User Exist already'})
        }

        db.collection('users').insertOne({
            email: email,
            password: await hashPassword(password) 
        });

        res.status(201).json({message: 'Created User Successfully'})
    }
}

export default handler