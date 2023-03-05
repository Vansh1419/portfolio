import React from "react";
import Typewriter from "typewriter-effect";
import { Twitter, Instagram, LinkedIn, GitHub } from "@mui/icons-material";
const Hero = () => {
  return (
    <div>
      <div className="h-[50vh] sm:h-[60vh] md:h-[80vh] w-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-valencia -translate-y-3/4 sm:text-8xl lg:text-9xl text-center">
          Vansh Jain
        </h1>
        <span className="text-2xl font-semibold -translate-y-3/4 sm:text-4xl lg:text-5xl flex justify-center">
          I am a {"< "}
          <span className="text-green-500">
            <Typewriter
              className="text-green-500"
              options={{
                strings: ["Developer", "Designer", "Engineer", "Programmer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          {" />"}
        </span>
        <div className="flex justify-center space-x-4">
          <a target="_blank" href="https://twitter.com/VanshJa77357509">
            <Twitter />{" "}
          </a>
          <a target="_blank" href="https://www.instagram.com/_vansh_1003/">
            <Instagram />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/thatsmylink/">
            <LinkedIn />
          </a>
          <a target="_blank" href="https://github.com/Vansh1419">
            <GitHub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
