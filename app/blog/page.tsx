import BlogPreview from '@/components/blogPreview';
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";

export const metadata = { title: "Tharini - Blog" };

export default async function Blog() {
  try {
  await connectDB();
  const blogs = await BlogModel.find().sort({date: -1}).lean();

  return (
    <div>
      <main>
        <h1 className="blog-title">My Blog</h1>
        <p className="blog-des">This is my blog stay tuned for updates!</p>

        {blogs.map((blog: any) => (
          <BlogPreview
            key={String(blog._id)}
            title={blog.title}
            description={blog.description}
            date={String(blog.date)}
            slug={blog.slug} 
          />
        ))}
      </main>

      <div id="blog-container"></div>
    </div>
  );
   } catch (err: any) {
    // If something goes wrong, show the error
    return (
      <div>
        <h1>Error loading blogs</h1>
        <p>{String(err)}</p>
      </div>
    );
  }
}
