/**
 * Declares an array named `blog`.
 *
 * The `: blog[]` part is a type annotation. It tells TypeScript that this array can only
 * contain objects that have the structure defined by the `blog` type.
 * This is a key feature of TypeScript; it ensures that every element in the array has
 * `title` etc and that they are all strings.
 */
var blogs = [
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
];
var blogContainer = document.getElementById("blog-container");
blogs.forEach(function (blog) {
    var blogDiv = document.createElement("div");
    blogDiv.className = "blog-class-container";
    var title = document.createElement("h1");
    title.textContent = blog.title;
    var date = document.createElement("p");
    date.textContent = blog.date;
    var description = document.createElement("p");
    description.textContent = blog.description;
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    var slug = document.createElement("p");
    slug.textContent = blog.slug;
    blogDiv.append(title, date, description, image);
    if (blogContainer) {
        blogContainer.appendChild(blogDiv);
    }
});
