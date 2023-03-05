import { Paper } from "@mui/material";
import React from "react";

const datas = [
  {
    course: "High School - 10th",
    venue: "Shiksha Niketan Senior Secondary School",
    information:
      "I passed my high school from Shiksha Niketan Senior Secondary School, Jammu. I scored 9.8 CGPA in my 10th grade.",
  },
  {
    course: "Senior Secondary - 12th",
    venue: "Shiksha Niketan Senior Secondary School",
    information:
      "I passed my high school from Shiksha Niketan Senior Secondary School, Jammu. I scored 91.2% in my 12th grade.",
  },
  {
    course: "Btech, Electrical Engineering",
    venue: "National Institute of Technology, Srinagar",
    information:
      "I am currently pursuing my Btech in Electrical Engineering from National Institute of Technology, Srinagar. I am in my 2nd year.",
  },
];

const EduacationComponent = ({ course, venue, information }) => {
  return (
    <Paper elevation={2} className="px-4 py-6  my-4">
      <div className=" w-full h-full space-y-3">
        <h4 className="text-3xl text-blue-400 font-extrabold">{course}</h4>
        <p className="text-lg text-blue-700 font-bold">{venue}</p>
        <p className="text-xl font-normal leading-5">{information}</p>
      </div>
    </Paper>
  );
};
const Education = () => {
  return (
    <div className="max-w-5xl mx-auto mb-10">
      <h3
        className={`text-transparent text-6xl md:text-9xl sticky top-22 leading-tight bg-clip-text font-valencia font-normal text-center `}
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3826328/pexels-photo-3826328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        Education
      </h3>
      {datas.map((data, index) => (
        <EduacationComponent
          key={index}
          course={data.course}
          information={data.information}
          venue={data.venue}
        />
      ))}
    </div>
  );
};

export default Education;
