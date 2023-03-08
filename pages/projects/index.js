import { projectsCollectionRef } from "@/utils/Firebase/firebaseConfig";
import { Button, Paper } from "@mui/material";
import { getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
const projects = () => {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      const projects = await getDocs(projectsCollectionRef);
      setProjects(projects.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProjects();
  }, []);
  return (
    <div>
      <Head>
        <title>Projects</title>
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
          Projects
        </h1>
        {projects?.length === 0 ? (
          <div className="flex justify-center">
            <CircularProgress />
          </div>
        ) : (
          projects?.map((project) => (
            <Paper
              key={project?.id}
              elevation={3}
              className="py-3 px-2 my-2 mx-1"
            >
              <h2 className="text-3xl font-bold text-blue-700 mb-3 text-center">
                {project?.title}
              </h2>
              <p className="font-light">{project?.description}</p>
              <div className="flex flex-wrap items-center justify-around">
                <a target="_blank" className="my-2" href={project.github}>
                  <Button className="" variant="outlined">
                    Github
                  </Button>
                </a>
                <a target="_blank" className="my-2" href={project.projectLink}>
                  <Button className="" variant="outlined">
                    Project
                  </Button>
                </a>
                <Button
                  onClick={(e) => {
                    router.push({
                      pathname: "/projects/[id]",
                      query: { id: project?.id },
                    });
                  }}
                  className=""
                  variant="outlined"
                >
                  Know More
                </Button>
              </div>
            </Paper>
          ))
        )}
      </div>
    </div>
  );
};

export default projects;
