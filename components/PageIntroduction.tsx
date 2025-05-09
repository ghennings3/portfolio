'use client'

import { HiArrowNarrowLeft } from "react-icons/hi"
import { Link } from "./Link"
import { SectionTitle } from "./SectionTitle"
import { motion } from "framer-motion"

export const PageIntroduction = () => {
    return(
        <section className="bg-gray-950/50 flex w-full h-[450px] lg:h-[630px] flex-col items-center justify-center px-2">
            <SectionTitle className="text-center items-center [&>h3]:text-4xl" subtitle="projetos" title="Meus Projetos" />
            <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} exit={{opacity: 0, y: 100}} transition={{duration: 0.6}} className="flex flex-col items-center">
                <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
                    Nesta seção, você encontra alguns dos projetos que desenvolvi com dedicação e criatividade. Cada um deles representa um aprendizado, um desafio superado e um passo na minha jornada como desenvolvedor. Explore à vontade!
                </p>
                <Link href='/'>
                    <HiArrowNarrowLeft size={20} />
                    Voltar para Home
                </Link>
            </motion.div>
        </section>
    )
}