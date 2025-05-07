import Image from "next/image"
import { TechBadge } from "../tech-badge/TechBadge"
import { Button } from "../button/Button"
import {HiArrowNarrowRight} from 'react-icons/hi'
import {TbBrandGithub, TbBrandLinkedin} from 'react-icons/tb'

const MOCK_CONTACTS = [
    {
        href: 'https://github.com/ghennings3',
        icon: <TbBrandGithub />
    },
    {
        href: 'https://www.linkedin.com/in/gustavohennings/',
        icon: <TbBrandLinkedin />
    }
]

export const HeroSection = () => {
    return(
        <section className="w-full bg-gray-950/50 lg:h-[755px] flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[100px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--tertiary)] bg-clip-text text-transparent mb-6">
                        Front-End
                        <br />
                        <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--tertiary)] bg-clip-text text-transparent">
                            Developer
                        </span>
                    </h1>
                    <p className="text-gray-400 my-6 text-sm sm:text-base">E aí! Sou o Gustavo Hennings — apaixonado por tecnologia e sempre fuçando novas ideias. Comecei minha jornada no front-end, mas minha meta é crescer cada vez mais e me tornar um dev full stack completo.</p>
                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {Array.from({length: 7}).map((_, index) => (
                            <TechBadge name="next.js" key={index} />
                        ))}
                    </div>
                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Button className="w-max shadow-button">
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>
                        <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a href={contact.href} key={`contact-${index}`} target="_blank" className="hover:text-gray-100 transition-colors">
                                    {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <Image width={420} height={404} src="https://avatars.githubusercontent.com/u/55541385?v=4" alt="avatar" className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"></Image>
            </div>
        </section>
    )
}