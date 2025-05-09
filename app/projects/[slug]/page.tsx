import { fetchHygraphQuery } from "@/app/lib/fetchHygraphQuery";
import { ProjectPageData, ProjectsPageStaticData } from "@/app/types/pageInfo";
import { ProjectDetails } from "@/components/projects/ProjectDetails";
import { ProjectSections } from "@/components/projects/ProjectSections";

type ProjectProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const query = `
    query {
      projects {
        slug
      }
    }
  `;

  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query, 0);

  return projects.map((project: { slug: string }) => ({
    slug: project.slug,
  }));
}

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
    const query = `
  query ProjectQuery {
    project(where: { slug: "${slug}" }) {
      pageThumbnail {
        url
      }
      thumbnail {
        url
      }
      sections {
        title
        image {
          url
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      technologies {
        name
      }
      liveProjectUrl
      githubUrl
    }
  }
`
  
    return fetchHygraphQuery(query, 0)
  }
  export default async function Project({ params: { slug } }: ProjectProps) {
    const { project } = await getProjectDetails(slug)
  
    return (
      <>
        <ProjectDetails project={project} />
        <ProjectSections sections={project.sections} />
      </>
    )
  }
  