import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";



const Navbar = async () => {
    const session = await auth()
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans text-black">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={140} height={30} />
                </Link>
                {/* afficher les éléments là si l'utilisateur est connecté!!!, du coup on vérifie avec la session */}
                <div className="flex items-center gap-5">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>

                            {/* <button onClick={signOut}>
                                <span>Logout</span>
                            </button> */}
                            <form action={async () => {
                                "use server";
                                await signOut({ redirectTo: "/" });
                            }
                            }>
                                <button type="submit">Logout</button>
                            </form>

                            {/* url dynamique */}
                            <Link href={"/user/${session?.id}"}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form
                            action={async () => {
                                "use server";

                                await signIn("github");
                            }}
                        >
                            <button type="submit">Login</button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}
export default Navbar