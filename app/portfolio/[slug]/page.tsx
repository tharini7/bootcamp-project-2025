import connectDB from "@/database/db";
import Project from "@/database/projectSchema";
import PortfolioCommentForm from "./commentForm";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: any) {
  const { slug } = await params;
  await connectDB();

  const project: any = await Project.findOne({ slug }).lean();

  if (!project) 
    return <p>Project not found</p>;

  return (
    <main className="portfolio-item">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />

            {project.comments.length === 0 && (
              <p>No comments yet</p>
            )}
            {project.comments.length > 0 && (
              <div className = "comments-section">
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
        <div className = "comment-form">
            <PortfolioCommentForm slug={slug} />
        </div>
    </main>
  );
}
