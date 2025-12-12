import blogs from "@/blogData";
import BlogPost from "@/components/blogPost";

export const metadata = { title: "Tharini — Farmers Market Blog" };

export default function SecondBlogPage() {
  const blog = blogs.find((b) => b.slug === "Second");
  if (!blog) return <main>Post not found.</main>;

  return (
    <main>
      <BlogPost
        title={blog.title}
        date={blog.date}
        description={blog.description}
        image={blog.image}
        imageAlt={blog.imageAlt}
      />
    </main>
  );
}
