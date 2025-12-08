import {MongoClient} from 'mongodb'


async function handler(req, res){
    if(req.method === 'POST'){

        const email = req.body.email;
        console.log("handler email", email);
        const client = await MongoClient.connect('mongodb+srv://standon2010_db_user:s8SwwcK2rtXOTHXN@cluster0.elnravi.mongodb.net/?appName=Cluster0');
    
        const db =  client.db('newsletter');
        await  db.collection('emails').insertOne({email: email});
        client.close();
        console.log("client.close()");
        res.status(201).json({'message' : 'Signed Up !'});
    }
    
}

export default handler;