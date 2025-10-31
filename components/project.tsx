import React from 'react';
import style from "./project.module.css";
import { Project } from '@/projectData';
import Link from 'next/link';
import Image from 'next/image';


export default function ProjectLayout(props: Project) {
  return (
    <div className={style.project}>
      <div className={style.itemlink}>
        {props.image && ( <img className={style.projectimage} src={props.image}
            alt={props.title}
          />
        )}
      </div>

      <div className={style.projectdetails}>
        <p className={style.projectname}>{props.title}</p>
        <p className={style.projectdescription}>{props.description}</p>
        <Link className={style.projectlink} href={props.href}>
          Learn More
        </Link>
      </div>
    </div>
  );
}
