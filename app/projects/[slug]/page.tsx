import { fetchHygraphQuery } from "@/app/lib/fetchHygraphQuery";
import { ProjectPageData, ProjectsPageStaticData } from "@/app/types/pageInfo";
import { ProjectDetails } from "@/components/projects/ProjectDetails";
import { ProjectSections } from "@/components/projects/ProjectSections";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type ProjectProps = {
  params: Promise<{ slug: string }>;
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
export default async function Project(props: ProjectProps) {
  const params = await props.params; // Aguarde a resolução do Promise
  const slug = params.slug;

  const { project } = await getProjectDetails(slug);

  if (!project?.title) return notFound();

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  );
}


export async function generateMetadata({
  params
}: ProjectProps): Promise<Metadata> {
  const resolvedParams = await params; // Resolve o Promise
  const slug = resolvedParams.slug;

  const data = await getProjectDetails(slug);
  const project = data.project;

  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        }
      ]
    }
  };
}
