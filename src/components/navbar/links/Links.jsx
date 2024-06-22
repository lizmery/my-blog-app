'use client'

import styles from "./links.module.css"
import NavLink from "./navLink/navLink"
import { useState } from "react"
import { handleLogout } from "../../../lib/action"
import { Menu } from 'lucide-react'
import Link from "next/link"

const links = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Portfolio",
        path: "/portfolio",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
]

const Links = ({ session }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                {session?.user ? (
                    <>
                        {session.user?.isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
                        <form action={handleLogout}>
                            <button className={styles.logout}>Logout</button>
                        </form>
                    </>
                ) : (
                    <Link className={styles.login} href='/login'>Login</Link>
                )}
            </div>
            <Menu 
                className={styles.menuBtn}
                width={30}
                height={30}
                onClick={() => setOpen((prev) => !prev)}
            />
            {open && (
                <div className={styles.mobileLinks} onClick={() => setOpen((prev) => !prev)}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title}  />
                    ))}
                    {session?.user ? (
                    <>
                        {session.user?.isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
                        <form action={handleLogout}>
                            <button className={styles.logout}>Logout</button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{ title: 'Login', path: '/login', additionalClass: 'styles.login' }} />
                )}
                </div>
            )}

        </div>
    )
}

export default Links