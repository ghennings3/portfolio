'use client'

import Image from "next/image"
import { TechBadge } from "../tech-badge/TechBadge"
import { Button } from "../button/Button"
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb'
import { HomePageInfo } from "@/app/types/pageInfo"
import { RichText } from "@graphcms/rich-text-react-renderer"
import { CmsIcon } from "../CmsIcon"
import { motion } from "framer-motion"
import { techBadgeAnimation } from "@/app/lib/animations"

type HomeSectionProps = {
    homeInfo: HomePageInfo
}

export const HeroSection = ({ homeInfo }: HomeSectionProps) => {

    console.log(homeInfo.introduction.raw)
    const handleContact = () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <section className="w-full bg-gray-950/50 lg:h-[755px] flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[100px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="w-full lg:max-w-[530px]">
                    <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--tertiary)] bg-clip-text text-transparent mb-6">
                        Front-End
                        <br />
                        <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--tertiary)] bg-clip-text text-transparent">
                            Developer
                        </span>
                    </h1>
                    <div className="text-gray-400 rich-text my-6 text-sm sm:text-base"><RichText content={homeInfo.introduction.raw} /></div>
                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {homeInfo.technologies.map((tech, i) => (
                            <TechBadge {...techBadgeAnimation} transition={{ duration: 0.2, delay: i * 0.1 }} key={tech.name} name={tech.name} />
                        ))}
                    </div>
                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Button className="w-max shadow-button" onClick={handleContact}>
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>
                        <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                            {homeInfo.socials.map((contact, i) => (
                                <a
                                    href={contact.url}
                                    key={`contact-${i}`}
                                    target="_blank"
                                    className="hover:text-gray-100 transition-colors"
                                    rel="noreferrer"
                                >
                                    <CmsIcon icon={contact.iconSvg} />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0, y: 200, scale: 0.5}} whileInView={{opacity: 1, y: 0, scale: 1}} exit={{opacity: 0, y: 200, scale: 0.5}} transition={{duration: 0.5}} >
                    <Image width={420} height={404} src="https://avatars.githubusercontent.com/u/55541385?v=4" alt="avatar" className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"></Image>
                </motion.div>
            </div>
        </section>
    )
}