'use client'

import Image from "next/image"
import Link from "next/link"
import { NavItems } from "./NavItems"
import { motion } from "framer-motion"

const NAV_ITEMS = [
    {
        label: "home",
        href: "/"
    },
    {
        label: "Projetos",
        href: "/projects"
    }
]

export const Header = () => {
    

    return(
        <motion.header initial={{top: -100}} animate={{top: 0}} transition={{duration: 0.5}} className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <Image width={58} height={49} src="/logo2.png" alt="Logo GH Dev"></Image>
                </Link>
                <nav className="flex items-center gap-4 sm:gap-10 ">
                    {NAV_ITEMS.map(item => (
                        <NavItems {...item} key={item.label}></NavItems>
                    ))}
                </nav>
            </div>
        </motion.header>
    )
}