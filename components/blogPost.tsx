import style from "./blogPost.module.css";

type BlogPostProps = {
  title: string;
  date: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export default function BlogPost({ title, date, description, image, imageAlt }: BlogPostProps) {
  return (
    <article className={style.post}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.date}>{date}</p>

      {image && <img className={style.image} src={image} alt={imageAlt || title} />}

      <p className={style.content}>{description}</p>
    </article>
  );
}
