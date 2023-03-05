import { projectsCollectionRef } from "@/utils/Firebase/firebaseConfig";
import { query, where, getDocs } from "firebase/firestore";
import React from "react";

const invividualProject = ({ project }) => {
  console.log(project);
  return <div>{project?.title}</div>;
};

export default invividualProject;

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const q = query(projectsCollectionRef, where("id", "==", id));
  const getProject = await getDocs(q);
  const datas = getProject.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return {
    props: { project: JSON.parse(JSON.stringify(datas[0])) },
  };
};
