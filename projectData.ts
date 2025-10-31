export interface Project {
  title: string;
  description: string;
  href: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "My Personal Website",
    description: "This project is my personal website, designed to showcase my skills, projects, and contact information. It features a clean layout, responsive design, and easy navigation between pages.",
    href: "/",
    image: "/projectSS.PNG",
  }
]

export default projects;