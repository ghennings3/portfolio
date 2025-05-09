import Image from "next/image"
import { Project } from "@/app/types/projects"

type ProjectCardProps = {
    project: Project
}

export const ProjectCard = ({project}: ProjectCardProps) => {
    const technologies = project.technologies.map(x => x.name).join(', ')

    return(
        <div className="group rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-violet-500 opacity-70 hover:opacity-100 transition-all">
            <div className="w-full h-48 overflow-hidden">
                <Image className="group-hover:scale-110 w-full h-full object-cover duration-500 transition-all" width={380} height={200} unoptimized src={project.thumbnail.url} alt={`Thumbnail do projeto ${project.title}`} />
            </div>
            <div className="flex-1 flex flex-col p-8">
                <strong className="font-medium text-gray-50/90 group-hover:text-violet-500 transition-colors">{project.title}</strong>
                <p className="mt-2 text-gray-400 line-clamp-4">
                    {project.shortDescription}
                </p>
                <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
                    {technologies}
                </span>
            </div>
        </div>
    )
}