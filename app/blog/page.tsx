import BlogPreview from '@/components/blogPreview';
import blogs from "@/blogData";
    // somewhere in the return statement
 
export const metadata = { title: "Tharini — Blog" }; 
    export default function Blog() {
  return (
    <div>
            <main>
            <h1 className="blog-title">My Blog</h1>
            <p className="blog-des">This is my blog stay tuned for updates!</p>
            {blogs.map((blog) => (
      <BlogPreview // This is how we call the component
			
                // These are the props we are passing in
                key={blog.slug}
                title={blog.title}
                description={blog.description}
                image={blog.image}
                date={blog.date}
                imageAlt={blog.image} 
                slug={blog.slug}      />
  ))}
            </main>
            <div id="blog-container"></div>
        
    </div>
  );
}