import BlogPreview from '@/components/blogPreview';
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";

export const metadata = { title: "Tharini - Blog" };

export default async function Blog() {
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
}
