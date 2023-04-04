import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
// import { data } from 'autoprefixer';
const Login = () => {

    const { data: session } = useSession()
    // const { data } = useSession()
    console.log(session);

    if (session) {
        return (
            <div>
                <div>welcome , {session.user.email}</div>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    }
    else {
        return (
            <div>
                <div>you r not signed in </div>
                <button onClick={() => signIn("instagram")} >Sign In  </button>
            </div>

        )
    }
}

export default Login