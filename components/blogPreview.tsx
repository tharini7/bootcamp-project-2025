
import style from './blogPreview.module.css'
import { Blog } from "@/blogData"; // importing the type/interface we defined earlier
import Image from "next/image";
import Link from 'next/link';


export default function BlogPreview(props: Blog) {
  return (
    <div className="blog-class-container">
      <h3 className="blog-box-title">
        <Link href={`/blog/${props.slug}`}>{props.title}</Link>
      </h3>
       <p className="blog-des">{props.description}</p>
       <p className="blog-des">{props.date}</p>
    </div>
  );
}
