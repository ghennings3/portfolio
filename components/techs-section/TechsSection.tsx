import { TbBrandNextjs } from "react-icons/tb"
import { SectionTitle } from "../SectionTitle"
import { KnownTech } from "./KnownTech"

export const TechSection = () => {
    return(
        <section className="container py-16">
            <SectionTitle subtitle="competências" title="Conhecimentos"></SectionTitle>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {Array.from({length: 8}).map((_, index) => (
                    <KnownTech tech={{icon: <TbBrandNextjs/>, name: 'Next.js', startDate: '2025-04-08'}} key={index} />
                ))}
            </div>
        </section>
    )
}