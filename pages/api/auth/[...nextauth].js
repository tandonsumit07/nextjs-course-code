import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { verifyPassword } from '../../../lib/auth';

import {connectToDatabase} from '../../../lib/db'


export default NextAuth({
    session: {
        jwt: true,
    },
    providers: [CredentialsProvider({
       async authorize(credentials) {
        //   const client = await  connectToDatabase();
        //   const db = client.db('userDB-management');
        //   const user = await db.collections('users').findOne({email: credentials.email});

        //   if(!user){
        //     client.close();
        //     throw new Error('No user Found') 
        //   }

        //   const isValiPassword = await verifyPassword(credentials.password, user.password);
        //   if(!isValiPassword){
        //     client.close();
        //     throw new Error('Password Missmatch');
        //   }

        //   client.close();
          return {
            email: 'tandonsumit07@rediffmail.com'
          }
        }
    })],
});