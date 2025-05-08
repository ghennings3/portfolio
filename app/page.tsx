import { HeroSection } from "@/components/hero-section/HeroSection";
import { HighlightedProjects } from "@/components/highlighted-projects/HighlightedProjects";
import { TechSection } from "@/components/techs-section/TechsSection";

export default async function Home() {
  return (
    <>
      <HeroSection/>
      <TechSection/>
      <HighlightedProjects />
    </>
  )
}
