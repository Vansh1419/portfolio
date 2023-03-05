import {
  doc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { projectsCollectionRef } from "../../../utils/Firebase/firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Button, TextField } from "@mui/material";
import Head from "next/head";
import BackendNavbar from "../../../components/Admin/BackendNavbar";
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};
const UpdateProject = ({ projectId }) => {
  const [project, setProject] = useState({});
  const [data, setData] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newGithub, setNewGithub] = useState("");
  const [newProjectLink, setNewProjectLink] = useState("");
  const [load, setLoad] = useState(true);
  const q = query(projectsCollectionRef, where("id", "==", projectId));
  const [projectsSnapshot] = useCollection(q);
  const updateHandler = async (e) => {
    await updateDoc(doc(projectsCollectionRef, projectId), {
      content: data === "" ? project?.content : data,
      updatedTimeStamp: serverTimestamp(),
      title: newTitle === "" ? project?.title : newTitle,
      description:
        newDescription === "" ? project?.description : newDescription,
      image: newImage === "" ? project?.image : newImage,
      github: newGithub === "" ? project?.github : newGithub,
      projectLink:
        newProjectLink === "" ? project?.projectLink : newProjectLink,
    });
    setLoad(false);
  };
  useEffect(() => {
    if (projectsSnapshot) {
      setProject(projectsSnapshot?.docs[0]?.data());
    }
  }, [projectsSnapshot]);
  return (
    <div>
      <Head>
        <title>Update Project</title>
      </Head>
      <BackendNavbar />
      <h2 className="text-3xl font-medium text-center p-4 bg-cyan-100 sticky top-0">
        Update the Project
      </h2>
      {load ? (
        <>
          <form className="max-w-3xl mx-auto my-5 flex flex-col space-y-4">
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={newTitle === "" ? project?.title : newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              value={
                newDescription === "" ? project?.description : newDescription
              }
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Github Link"
              variant="outlined"
              value={newGithub === "" ? project?.github : newGithub}
              onChange={(e) => setNewGithub(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Project Link"
              variant="outlined"
              value={
                newProjectLink === "" ? project?.projectLink : newProjectLink
              }
              onChange={(e) => setNewProjectLink(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Main Image"
              variant="outlined"
              value={newImage === "" ? project?.image : newImage}
              onChange={(e) => setNewImage(e.target.value)}
            />
            <QuillNoSSRWrapper
              theme="snow"
              value={data === "" ? project?.content : data}
              modules={modules}
              onChange={setData}
            />
            <Button variant="outlined" onClick={updateHandler}>
              Update
            </Button>
          </form>
        </>
      ) : (
        <div className="max-w-3xl mx-auto my-5 flex flex-col space-y-4">
          <h3 className="text-2xl font-bold text-center">
            Project has been updated !!
          </h3>
          <h3 className="text-xl font-semibold text-center">
            Thanks for updating
          </h3>
        </div>
      )}
    </div>
  );
};

export default UpdateProject;
export const getServerSideProps = ({ params }) => {
  return {
    props: {
      projectId: params.edit_project,
    },
    // revalidate: 10,
  };
};
// export const getStaticPaths = async () => {
//   const getProjects = await getDocs(projectsCollectionRef);
//   const paths = getProjects?.docs?.map((projectsArray) => ({
//     params: { edit_project: projectsArray.id },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };
