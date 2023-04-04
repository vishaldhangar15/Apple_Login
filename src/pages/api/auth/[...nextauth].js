import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import InstagramProvider from "next-auth/providers/instagram";

// hello vishal bhai :)

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: "506971020877-eka4q32l89r1u3qeif4mcvnkkdfmnjms.apps.googleusercontent.com",
            clientSecret: "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"
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

