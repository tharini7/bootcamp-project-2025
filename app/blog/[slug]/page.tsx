import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";
import Comment from "@/components/Comment";
import CommentForm from "./commentForm";


type Props = {
  params: Promise<{slug: string}>;
};


export default async function Blog({params}: Props) {
  const {slug} = await params;

  await connectDB();
  const blog: any = await BlogModel.findOne({slug}).lean();

  if (!blog) {
    return (
        <h1>Blog not found</h1>
    );
  }

  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{String(blog.date)}</p>
      <p>{blog.description}</p>

      {blog.image && (
        <img src={blog.image} alt={blog.imageAlt ?? blog.title} />
      )}
      <p>{blog.content}</p>

      <h3>Comments</h3>
            {blog.comments.length === 0 && (
              <p>No comments yet</p>
            )}
            {blog.comments.length > 0 && (
              <div>
                {blog.comments.map((comment:any , index:number) => (
                  <div key={index}>
                    <strong>{comment.user}</strong>
                    <p>{comment.comment}</p>
                    <p>{new Date(comment.time).toLocaleString()}</p>
                    <hr />
                  </div>
                ))}
              </div>
            )}
      <CommentForm slug={slug} />
    </main>
  );
}

