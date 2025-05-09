import { HeroSection } from "@/components/hero-section/HeroSection";
import { HighlightedProjects } from "@/components/highlighted-projects/HighlightedProjects";
import { TechSection } from "@/components/techs-section/TechsSection";
import { fetchHygraphQuery } from "./lib/fetchHygraphQuery";
import { HomePageData } from "./types/pageInfo";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          technologies {
            name
          }
        }
      }
    }
  `
  return fetchHygraphQuery(
    query,// 1 day
    0
  )
  
}

export default async function Home() {

  const {page: pageData} = await getPageData();

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <TechSection techs={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
    </>
  )
}
