import {connectToDatabase} from '../../../lib/db'
import { hashPassword } from '../../../lib/auth';
async function handler(req, res){
  
    if(req.method === 'POST'){
    const data = req.body;

    const{ email, password} = data
    
    const client = await connectToDatabase();
    const db = client.db('userDB-management');

    const hashpassword = await hashPassword(password)
    
    const result = await db.collection('users').insertOne({
        email: email,
        password : hashpassword
    })

    res.status(201).json({ message: `user created successfully w/ userId ${result.insertedId}`})
}
}

export default handler;