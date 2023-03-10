import { blogsCollectionRef } from "@/utils/Firebase/firebaseConfig";
import { query, where, getDocs } from "firebase/firestore";
import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@mui/material";
const individualBlog = ({ blog }) => {
  return (
    <div>
      <Head>
        <title>{blog?.title}</title>
      </Head>
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <img
          src={blog?.image}
          loading="lazy"
          className="h-40 object-contain mx-auto"
        />
        <h2 className="text-3xl md:4xl text-center break-words font-bold p-4 ">
          {blog?.title}
        </h2>
        <div
          className="p-2 break-words
           [&>p>img]:w-[100%] [&>p>img]:mx-auto [&>p>img]:mb-3 [&>p>img]:mt-5
           [&>h1]:text-3xl [&>h1]:font-semibold  [&>h1]:mb-3 [&>h1]:mt-4
           [&>h2]:text-2xl  [&>h2]:mb-2 [&>h2]:mt-4
           [&>h2]:font-medium 
           [&>h3]:text-lg 
           [&>h4]:text-base 
           [&>h5]:text-sm 
           [&>h6]:text-xs 
           [&>.ql-size-small]:text-red-600 [&>p>a]:text-indigo-700 [&>p>a]:underline  hover:[&>p>a]:text-blue-400
           "
          dangerouslySetInnerHTML={{ __html: blog?.content }}
        />
        <hr className="pb-10" />
      </div>
    </div>
  );
};

export default individualBlog;

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const q = query(blogsCollectionRef, where("id", "==", id));
  const getBlog = await getDocs(q);
  const datas = getBlog.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return {
    props: { blog: JSON.parse(JSON.stringify(datas[0])) },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const getBlogs = await getDocs(blogsCollectionRef);
  const blogs = getBlogs.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  const paths = blogs.map((blog) => ({
    params: { id: blog.id },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};
