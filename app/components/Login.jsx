import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
    const { data: session } = useSession()
    if (session) {
        // true
        return (
            <>
                Signed in as {session.user.email} <br />
                <button className="border-2 bg-blue-500 text-white border-black rounded-xl hover:text-black hover:bg-white w-full"
                    onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    // false
    return (
        <>
            Not signed in <br />
            <button className="border-2 bg-blue-500 text-white border-black rounded-xl hover:text-black hover:bg-white w-full"
                onClick={() => signIn()}>Sign in</button>
        </>
    )
}