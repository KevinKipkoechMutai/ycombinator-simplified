import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"


export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [GitHub],
    secret: process.env.NEXT_AUTH_SECRET,
    trustHost: true,
})