'use client'

import { cn } from "@/app/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavItemsProps = {
    label: string
    href: string
}

export const NavItems = ({label, href}: NavItemsProps) => {

    const pathname = usePathname();

    const isActive = pathname == href;

    return(
        <Link href={href} className={cn("text-gray-400 flex items-center gap-2 font-medium font-mono", isActive && 'text-gray-50')}>
            <span className="text-violet-400">#</span>
            {label}
        </Link>
    )
}