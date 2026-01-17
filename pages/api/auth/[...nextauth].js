import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const client = await connectToDatabase();
        const db = client.db("userDB-management");
        const existingUser = await db
          .collection("users")
          .findOne({ email: credentials.email });
        if (!existingUser) {
          client.close();
          throw new Error("No user found! ");
        }

        const passwordMatched = await verifyPassword(
          credentials.password,
          existingUser.password
        );
        if (!passwordMatched) {
          client.close();
          throw new Error("No password Match");
        }

        return {
          email: existingUser.email,
        };
      },
    }),
  ],
});
