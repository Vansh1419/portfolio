import {
  doc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { blogsCollectionRef } from "../../../utils/Firebase/firebaseConfig";
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
const BlogEditing = ({ blogId }) => {
  const [blog, setBlog] = useState({});
  const [data, setData] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [load, setLoad] = useState(true);
  const [newImage, setNewImage] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const q = query(blogsCollectionRef, where("id", "==", blogId));
  const [blogsSnapshot] = useCollection(q);
  const updateHandler = async (e) => {
    await updateDoc(doc(blogsCollectionRef, blogId), {
      content: data === "" ? blog?.content : data,
      timeStamp: serverTimestamp(),
      title: newTitle === "" ? blog?.title : newTitle,
      image: newImage === "" ? blog?.image : newImage,
      description: newDescription === "" ? blog?.description : newDescription,
    });
    setLoad(false);
  };
  useEffect(() => {
    if (blogsSnapshot) {
      setBlog(blogsSnapshot?.docs[0]?.data());
    }
  }, [blogsSnapshot]);
  return (
    <div>
      <Head>
        <title>Update the Blog</title>
      </Head>
      <BackendNavbar />
      <h2 className="text-3xl font-medium text-center p-4 bg-cyan-100 sticky top-0">
        Update the Blog
      </h2>
      {load ? (
        <>
          <form className="max-w-3xl mx-auto my-5 flex flex-col space-y-4">
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={newTitle === "" ? blog?.title : newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              value={newDescription === "" ? blog?.description : newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Main Image"
              variant="outlined"
              value={newImage === "" ? blog?.image : newImage}
              onChange={(e) => setNewImage(e.target.value)}
            />
            <QuillNoSSRWrapper
              theme="snow"
              value={data === "" ? blog?.content : data}
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
            Blog has been updated !!
          </h3>
          <h3 className="text-xl font-semibold text-center">
            Thanks for updating
          </h3>
        </div>
      )}
    </div>
  );
};

export default BlogEditing;

export const getServerSideProps = ({ params }) => {
  return {
    props: {
      blogId: params.edit_blog,
    },
    // revalidate: 10,
  };
};
// export const getStaticPaths = async () => {
//   const getBlogs = await getDocs(blogsCollectionRef);
//   const paths = getBlogs?.docs?.map((blogsArray) => ({
//     params: { edit_blog: blogsArray.id },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };
