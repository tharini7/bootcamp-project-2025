import Link from "next/link";
import style from "./blogPreview.module.css";

type BlogPreviewProps = {
  title: string;
  description: string;
  date: string;
  slug: string;
};


export default function BlogPreview(props: BlogPreviewProps) {
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


