/**
 *keeping comments just to look back on so I remember what I learned
 * Defines a new type named `blog` with three properties.
 *
 * This is a type alias, a way to give a new name to an existing type.
 * In this case, we're creating a new name for an object with specific properties.
 *
 * @property {string} title - The blog's title.
 */
type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

/**
 * Declares an array named `blog`.
 * 
 * The `: blog[]` part is a type annotation. It tells TypeScript that this array can only
 * contain objects that have the structure defined by the `blog` type.
 * This is a key feature of TypeScript; it ensures that every element in the array has
 * `title` etc and that they are all strings.
 */
const blogs: Blog[] = [
  {
    title: "Introduction Blog Post",
    date: "10/16/2025",
    description: "This is my first blog post",
    image: "image link temp",
    imageAlt: "This image is a picutre of me",
    slug: "link",
  },
  {
    title: "Introduction Blog Post",
    date: "10/16/2025",
    description: "This is my first blog post",
    image: "image link temp",
    imageAlt: "This image is a picutre of me",
    slug: "link",
  },
]

    const blogContainer = document.getElementById("blog-container");

    blogs.forEach((blog) => {
      const blogDiv = document.createElement("div");
      blogDiv.className = "blog-class-container"

      const title = document.createElement("h1");
      title.textContent = blog.title;

      const date = document.createElement("p");
      date.textContent = blog.date;

      const description = document.createElement("p");
      description.textContent = blog.description;

      const image = document.createElement("img");
      image.src = blog.image;
      image.alt = blog.imageAlt;

      const slug = document.createElement("p");
      slug.textContent = blog.slug;

        const titleLink = document.createElement("a");
        titleLink.href = `blogs/${blog.slug}.html`;
        titleLink.textContent = blog.title

      blogDiv.append (title, date, description, image);

      if (blogContainer) {
        blogContainer.appendChild(blogDiv);
      }
    });

