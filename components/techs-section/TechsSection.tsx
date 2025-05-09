import { TbBrandNextjs } from "react-icons/tb"
import { SectionTitle } from "../SectionTitle"
import { KnownTech } from "./KnownTech"
import { KnownTech as IKnownTech} from "@/app/types/projects"

type KnownTechsProps = {
    techs: IKnownTech[]
}

export const TechSection = ({techs}: KnownTechsProps) => {
    return(
        <section className="container py-16">
            <SectionTitle subtitle="competências" title="Conhecimentos"></SectionTitle>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {techs?.map((tech) => (
                    <KnownTech key={tech.name} tech={tech} />
                ))}
            </div>
        </section>
    )
}