import Image from "next/image"
import { TechBadge } from "../tech-badge/TechBadge"
import { Link } from "../Link"
import { HiArrowNarrowRight } from "react-icons/hi"

export const ProjectCard = () => {
    return(
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image className="w-full lg:min-h-full object-cover rounded-lg h-[200px] sm:h-[300px] lg:w-[420px]" width={420} height={304} src='https://images.unsplash.com/photo-1618422168439-4b03d3a05b15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="imagem do projeto" />
            </div>
            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    Projeto
                </h3>
                <p className="text-gray-400 my-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quos cum unde ex nesciunt iste dignissimos. Nam porro laboriosam modi.</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                </div>
                <Link href={''}>
                    Ver projeto
                    <HiArrowNarrowRight />
                </Link>
            </div>
        </div>
    )
}