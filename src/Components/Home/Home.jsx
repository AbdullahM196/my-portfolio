import { useLayoutEffect, useState } from "react";
import "./Home.css";
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { motion } from "framer-motion";
export default function Home() {
  const [screenWidth, setScreen] = useState(window.innerWidth);
  useLayoutEffect(function () {
    function handleResize() {
      setScreen(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div id="Home">
      <motion.div
        className="text-Col"
        initial={{ opacity: 0, x: -100, y: 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className={`${screenWidth > 576 ? "" : "text-center"}`}>
          Hi {"I'm"} Abdullah
        </h1>
        <p className={`job ${screenWidth > 576 ? "" : "text-center"}`}>
          {"I'm"} a <span>FullStack developer</span>
        </p>
        <p className={`text ${screenWidth > 576 ? "" : "text-center"}`}>
          {"I'm"} a passionate FullStack developer with a strong focus on
          Backend development.
        </p>
        <div className="socials">
          <a
            href="https://www.facebook.com/abdullah.mahmoud.39904181"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/abdullah-mahmoud-f196/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AbdullahM196"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare />
          </a>
        </div>
        <motion.a
          href="#Contact"
          className="btn"
          whileHover={{
            scale: 1.1,
            transition: {
              type: "spring",
              stiffness: 120,
              duration: 0.3,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            },
          }}
        >
          Contact Me <BsFillSendFill />
        </motion.a>
      </motion.div>

      <motion.div
        className="img-Col"
        initial={{ opacity: 0, x: 100, y: 0, originY: 0 }}
        animate={{ opacity: 1, x: 0, y: 0, originY: 0 }}
        transition={{ duration: 1.5 }}
      >
        <img src="./my-photo.png" alt="myImage" />
      </motion.div>
    </div>
  );
}
