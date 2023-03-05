import React, { useEffect, useState } from "react";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { blogsCollectionRef } from "../../../utils/Firebase/firebaseConfig";
import style from "react-quill/dist/quill.snow.css";
import { Button } from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import BackendNavbar from "../../../components/Admin/BackendNavbar";

const BlogAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlog = async () => {
      const getBlogs = await getDocs(blogsCollectionRef);
      setBlogs(
        getBlogs?.docs?.map((blogsArray) => ({
          ...blogsArray?.data(),
          id: blogsArray.id,
        }))
      );
    };
    getBlog();
    console.log(blogs);
  }, []);
  const editHandler = (id) => {
    console.log(id);
  };
  const deleteHandler = async (id) => {
    const docRef = doc(blogsCollectionRef, id);
    await deleteDoc(docRef);
    console.log("deleted");
  };
  /*
   ! &>h1 -> heading 1
   ! &>h2 -> heading 2
   ! &>h3 -> heading 3
   ! &>h4 -> heading 4
   ! &>h5 -> heading 5
   ! &>h6 -> heading 6
   ! &>p -> paragraph
   ! &>p>a -> anchor
   ! &>p>strong ->bold
   ! &>p>em -> italic
   ! &>p>u -> underline
   ! &>p>strong>em -> bold italic
   ! &>p>strong>em>u -> bold italic underline
   ! &>p>em>u -> italic underline
   ! &>ol>li -> ordered list
   ! &>ul>li -> unordered list
   ! &>iframe -> video
   */
  return (
    <div>
      <Head>
        <title>Blog Admin</title>
      </Head>
      <BackendNavbar />
      <div>
        <h1 className="text-4xl text-center break-words font-semibold p-4 ">
          Blog Admin
          <hr />
        </h1>
        <div className="max-w-4xl mx-auto flex flex-col">
          <Link href="/admin/blogadmin/addblog" className="flex-1">
            <Button className="w-full" variant="outlined">
              Add a Blog
            </Button>
          </Link>
          {blogs?.map((blog, index) => (
            <div
              key={index}
              className="flex p-3 my-3 border space-x-2 items-center"
            >
              <h2 className="flex-1 text-ellipsis overflow-hidden">
                {blog.title}
              </h2>
              <Link href={`/admin/blogadmin/${blog.id}`}>
                <Button
                  onClick={() => {
                    editHandler(blog.id);
                  }}
                  variant="outlined"
                >
                  Edit
                </Button>
              </Link>
              <Button
                onClick={() => {
                  deleteHandler(blog.id);
                }}
                variant="outlined"
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;
