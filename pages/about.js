import Head from "next/head";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
const about = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <div>
        <Navbar />
        <div>
          <h3
            className={`text-transparent text-7xl md:text-9xl sticky top-22 leading-tight bg-clip-text font-valencia font-normal text-center mb-12 `}
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/3826328/pexels-photo-3826328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          >
            About
          </h3>
          <div className="max-w-3xl mx-auto">
            <p className="tracking-wider leading-7">
              Welcome to my portfolio website! I Vansh Jain, a self-taught programmer and
              web developer with expertise in React, Firebase, and other
              frontend technologies. Throughout my journey, I have honed my
              skills and created numerous projects that showcase my versatility
              and ability to bring ideas to life. From simple websites to
              complex web applications, I have a passion for building intuitive
              and engaging user experiences. Have a look around and if you like
              what you see, don't hesitate to get in touch!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
