import { blogsCollectionRef } from '@/utils/Firebase/firebaseConfig';
import { getDocs } from 'firebase/firestore';
import { Button, Paper } from "@mui/material";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import React from 'react'
const important = (blogs) => {
    const router = useRouter();
    return blogs?.map((blog) => (
      <Paper key={blog?.id} elevation={3} className="py-3 px-2 my-2 mx-1">
        <h2 className="text-3xl font-bold text-blue-700 mb-3 text-center">
          {blog?.title}
        </h2>
        <p className="font-light">{blog?.description}</p>
        <div className="flex flex-wrap items-center justify-around">
          <Button
            onClick={(e) => {
              router.push({
                pathname: "/blogs/[id]",
                query: { id: blog?.id },
              });
            }}
            className=""
            variant="outlined"
          >
            Read More
          </Button>
        </div>
      </Paper>
    ));
  };
const blogs = ({blogs}) => {
  return (
    <div>
      <Head>
        <title>blogs</title>
      </Head>
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <h1
          className={`text-transparent text-7xl md:text-9xl sticky top-22 leading-tight bg-clip-text font-valencia font-normal text-center `}
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3826328/pexels-photo-3826328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        >
          blogs
        </h1>
        {blogs?.length === 0 ? (
          <div className="flex justify-center">
            <CircularProgress />
          </div>
        ) : (
          important(blogs)
        )}
      </div>
    </div>
  )
}

export default blogs

export const getServerSideProps = async () => {
    const getBlogs = await getDocs(blogsCollectionRef);
    const blogs = getBlogs.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(blogs);
    return {
      props: { blogs: JSON.parse(JSON.stringify(blogs)) },
    };
  };
  