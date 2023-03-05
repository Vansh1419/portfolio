import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { addDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { projectsCollectionRef } from "../../../utils/Firebase/firebaseConfig";
import { Button, TextField } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import Head from "next/head";
import BackendNavbar from "../../../components/Admin/BackendNavbar";
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { code: "code-block" }, { font: [] }],
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

const addproject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [load, setLoad] = useState(true);
  const [github, setGithub] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    const requestObj = {
      title: title,
      content: content,
      timeStamp: serverTimestamp(),
      description: description,
      github: github,
      projectLink: projectLink,
      image: image,
    };

    try {
      const docRef = await addDoc(projectsCollectionRef, requestObj);
      setTitle("");
      setContent("");
      setImage("");
      setLoad(false);
      await setDoc(docRef, { ...requestObj, id: docRef.id });
      console.log("Document written with ID: ", docRef.id);
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };
  return (
    <div>
      <Head>
        <title>Add Project</title>
      </Head>
      <BackendNavbar />
      <h2 className="text-3xl font-medium text-center p-4 bg-cyan-100 sticky top-0">
        Add a new Project
      </h2>
      {load ? (
        <form
          className="max-w-3xl mx-auto my-5 flex flex-col space-y-4"
          onSubmit={submitHandler}
        >
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />{" "}
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <TextField
            id="outlined-basic"
            label="Github Link"
            variant="outlined"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            required
          />
          <TextField
            id="outlined-basic"
            label="Project Link"
            variant="outlined"
            value={projectLink}
            onChange={(e) => setProjectLink(e.target.value)}
            required
          />
          <TextField
            id="outlined-basic"
            label="Main Image (link)"
            variant="outlined"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <QuillNoSSRWrapper
            modules={modules}
            onChange={setContent}
            theme="snow"
            value={content}
          />
          <Button type="submit" variant="outlined">
            Save
          </Button>
        </form>
      ) : (
        <div className="max-w-3xl mx-auto my-5 flex flex-col space-y-4">
          <h3 className="text-2xl font-bold text-center">
            Project has been Added !!
          </h3>
          <h3 className="text-xl font-semibold text-center">
            Thanks for adding
          </h3>
        </div>
      )}
    </div>
  );
};

export default addproject;
