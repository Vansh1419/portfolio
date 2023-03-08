import { blogsCollectionRef } from "@/utils/Firebase/firebaseConfig";
import { getDocs } from "firebase/firestore";
import { Button, Paper } from "@mui/material";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
const blogs = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      const blogs = await getDocs(blogsCollectionRef);
      setBlogs(blogs.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBlogs();
  }, []);
  return (
    <div>
      <Head>
        <title>Blogs</title>
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
          blogs?.map((blog) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default blogs;
