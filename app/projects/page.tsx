import { PageIntroduction } from "@/components/PageIntroduction";
import { ProjectList } from "@/components/project-list/ProjectList";
import { fetchHygraphQuery } from "../lib/fetchHygraphQuery";
import { ProjectsPageData } from "../types/pageInfo";

export const metadata = {
    title: 'Projetos',
  }
  
  const getPageData = async (): Promise<ProjectsPageData> => {
    const query = `
      query ProjectsQuery {
        projects {
          shortDescription
          slug
          title
          thumbnail {
            url
          }
          technologies {
            name
          }
        }
      }
      `
  
    return fetchHygraphQuery(
      query,
      0
    )
  }

export default async function Projects(){
    const {projects} = await getPageData();

    return(
        <>
            <PageIntroduction />
            <ProjectList projects={projects} />
        </>
    )
}