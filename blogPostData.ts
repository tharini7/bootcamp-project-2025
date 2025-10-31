export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

export const blogs: Blog[] = [
  {
    title: "Introduction Blog Post",
    date: "10/16/2025",
    description: "This is my first blog post.",
    image: "image link temp",
    imageAlt: "This image is a picutre of me",
    slug: "IntroBlog",
  },
  {
    title: "Second Blog Post: Farmers Market",
    date: "10/16/2025",
    description: "Farmers Market!",
    image: "image link temp",
    imageAlt: "Image at the farmers market",
    slug: "SecondBlog",
  },
]
export default blogs;
