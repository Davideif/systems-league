import { prisma } from "@lib/prisma"
import bcrypt from "bcrypt"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email", placeholder: "Enter your email" },
          password: { label: "Password", type: "password" },
        },

          async authorize(credentials) {

        const user = await prisma.user.findUnique({
            where: {
                email: credentials.email
            }
        });

        if (!user) throw new Error("No user found");

        if (!credentials.password || !credentials.email) throw new Error("Password and email are required");

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) throw new Error("Wrong password");

        return { id: user.id, email: user.email, username: user.name};
        },
          }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

}

