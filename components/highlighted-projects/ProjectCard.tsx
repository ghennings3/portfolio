import Image from "next/image"
import { TechBadge } from "../tech-badge/TechBadge"
import { Link } from "../Link"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Project } from "@/app/types/projects"

type ProjectCardProps = {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div
            className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
        >
            <div
                className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full"
            >
                <Image
                    src={project.thumbnail.url}
                    width={420}
                    height={304}
                    alt={`Thumbnail do projeto ${project.title}`}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            <div className="flex-1 lg:py-[18px]">
                <h3
                    className="flex items-center gap-3 font-medium text-lg text-gray-50"
                >
                    {project.title}
                </h3>

                <p
                    className="text-gray-400 my-6"
                >
                    {project.shortDescription}
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    {project.technologies.map((tech, i) => (
                        <TechBadge
                            name={tech.name}
                            key={`${project.title}-tech-${tech.name}`}
                        />
                    ))}
                </div>

                <Link href={`/projects/${project.slug}`}>
                    Ver projeto
                    <HiArrowNarrowRight />
                </Link>
            </div>
        </div>
    )
}