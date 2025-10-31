import projects from "@/projectData";
import ProjectCard from "@/components/project";

export const metadata = { title: "Tharini — Portfolio" };

export default function Portfolio() {
  return (
    <main>
      <h1 className="portfolio-title">Portfolio</h1>

      <div className="portfolio-container">
        {projects.map((project) => (
          <div className="project" key={project.title}>
            <div className="item-link">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              )}
            </div>
            <div className="project-details">
              <p className="project-name">{project.title}</p>
              <p className="project-description">{project.description}</p>
              <a className="project-link" href={project.href}>
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
