import connectDB from "@/database/db";
import ProjectModel from "@/database/projectSchema";
import PortfolioCommentForm from "./[slug]/commentForm";
import Link from "next/link";

export const metadata = { title: "Tharini - Portfolio" };

export default async function Portfolio() {
  await connectDB();
  const projects = await ProjectModel.find().lean();

  return (
    <main>
      <h1 className="portfolio-title">Portfolio</h1>

      <div className="portfolio-container">
        {projects.map((project: any) => (
          <div className="project" key={project._id}>
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

              <Link className="project-link" href={`/portfolio/${project.slug}`}>
                View Project
              </Link>
            </div>

            <h3>Comments</h3>
            {project.comments.length === 0 && (
              <p>No comments yet</p>
            )}
            {project.comments.length > 0 && (
              <div>
                {project.comments.map((comment:any , index:number) => (
                  <div key={index}>
                    <strong>{comment.user}</strong>
                    <p>{comment.comment}</p>
                    <p>{new Date(comment.time).toLocaleString()}</p>
                    <hr />
                  </div>
                ))}
              </div>
            )}

            <PortfolioCommentForm slug={project.slug} />
          </div>
        ))}
      </div>
    </main>
  );
}
