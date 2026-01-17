import {MongoClient} from 'mongodb'

export async function connectToDatabase(){
   const dbConnection = await MongoClient.connect("mongodb+srv://standon2010_db_user:s8SwwcK2rtXOTHXN@cluster0.elnravi.mongodb.net/?appName=Cluster0");
   return dbConnection;
}