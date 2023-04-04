import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import InstagramProvider from "next-auth/providers/instagram";

// hello vishal bhai :)

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        InstagramProvider({
            clientId: "705322318012564",
            clientSecret: "0905fc66c03a4cd73cdc231903ff3414"
        })
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_CLIENT_ID,
        //     clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        // })
    ],
    secret: process.env.JWT_SECRET
})

