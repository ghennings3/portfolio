import { TbBrandGithub } from "react-icons/tb"
import { Button } from "../button/Button"
import { SectionTitle } from "../SectionTitle"
import { TechBadge } from "../tech-badge/TechBadge"
import {FiGlobe} from 'react-icons/fi'
import { Link } from "../Link"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const ProjectDetails = () => {
    return(
        <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
            <div className="absolute inset-0 z-[-1] bg-[url(https://images.unsplash.com/photo-1618422168439-4b03d3a05b15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] opacity-25 bg-no-repeat bg-center bg-cover"/>
        
            <SectionTitle subtitle="projetos" title="Projeto" className="text-center items-center sm:[&>h3]:text-4xl" />
            <p className="text-gray-400 text-center max-w-[640px] my-4  sm:my-6 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum voluptate necessitatibus vitae dolorem quo.
            </p>
            <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
                <TechBadge name="Next.js" />
                <TechBadge name="Next.js" />
                <TechBadge name="Next.js" />
                <TechBadge name="Next.js" />
                <TechBadge name="Next.js" />
                <TechBadge name="Next.js" />
            </div>
            <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
                <a href="https://github.com" target="_blank">
                    <Button className="min-w-[180px]">
                        <TbBrandGithub />
                        Repositório
                    </Button>
                </a>
                <a href="https://github.com" target="_blank">
                    <Button className="min-w-[180px]">
                        <FiGlobe />
                        Projeto online
                    </Button>
                </a>
            </div>
            <Link href='/projects'>
                <HiArrowNarrowLeft size={20} />
                Voltar para projetos
            </Link>
        </section>
    )
}