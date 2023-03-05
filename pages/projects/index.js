import { projectsCollectionRef } from "@/utils/Firebase/firebaseConfig";
import { Button } from "@mui/material";
import { getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import React from "react";

const projects = ({ projects }) => {
  const router = useRouter();
  return (
    <div>
      projects
      {projects?.map((project, index) => (
        <div key={index}>
          <span>{project?.title} </span>
          <Button
            onClick={(e) => {
              router.push({
                pathname: "/projects/[id]",
                query: { id: project?.id },
              });
            }}
            variant="outlined"
          >
            Click
          </Button>
        </div>
      ))}
    </div>
  );
};

export default projects;

export const getServerSideProps = async () => {
  const getProjects = await getDocs(projectsCollectionRef);
  const projects = getProjects.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(projects);
  return {
    props: { projects: JSON.parse(JSON.stringify(projects)) },
  };
};
