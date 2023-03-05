import { Paper } from "@mui/material";
import Image from "next/image";
import React from "react";
const datas = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    imageAlt: "html-image",
    name: "HTML5",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    imageAlt: "css-image",
    name: "CSS3",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png",
    imageAlt: "javascript-image",
    name: "JavaScript",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    imageAlt: "sass-image",
    name: "SASS",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    imageAlt: "tailwind-image",
    name: "TailwindCSS",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
    imageAlt: "firebase-image",
    name: "Firebase",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    imageAlt: "c-image",
    name: "C/C++",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/GitHub_logo_2013.svg",
    imageAlt: "github-image",
    name: "Github",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
    imageAlt: "linux-image",
    name: "Linux",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    imageAlt: "reactjs-image",
    name: "ReactJS",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Next.js_Logotype_Light_Background.svg",
    imageAlt: "nextjs-image",
    name: "NextJS",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png",
    imageAlt: "redux09-image",
    name: "Redux",
  },
];

const SkillComponent = ({ image, imageAlt, name }) => (
  <Paper className="m-3 p-2" elevation={2}>
    <div className=" flex flex-col items-center ">
      <div className="w-20 h-16 object-contain mb-4 flex flex-col items-center justify-center  ">
        <Image width={64} height={80} src={image} alt={imageAlt} />
      </div>
      <h4 className="text-base">{name}</h4>
    </div>
  </Paper>
);

const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto mb-10">
      <h3
        className={`text-transparent text-7xl md:text-9xl sticky top-22 leading-tight bg-clip-text font-valencia font-normal text-center `}
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3826328/pexels-photo-3826328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        Skills
      </h3>
      <div className="flex flex-wrap justify-around">
        {datas.map((data, index) => (
          <SkillComponent
            key={index}
            image={data.image}
            imageAlt={data.imageAlt}
            name={data.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
