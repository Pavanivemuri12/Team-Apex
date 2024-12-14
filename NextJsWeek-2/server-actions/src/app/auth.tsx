

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";


export const { auth ,handlers:{GET,POST}} = NextAuth({
    providers:[
        GitHubProvider({
            clientId:process.env.GIT_CLIENT_ID,
            clientSecret:process.env.GIT_SECRET

        })
    ],
   secret: process.env.AUTH_SECRET
})