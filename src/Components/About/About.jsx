import { useLayoutEffect, useState } from "react";
import "./about.css";
import { HiOutlineDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import data from "../../assets/data";
import { Button } from "react-bootstrap";
import myCv from "../../assets/AbdullahM198-CV.pdf";
export default function About() {
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
    <div id="About">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        About ME
      </motion.h1>
      <div className="about-Body">
        <motion.img
          src="./my-photo.png"
          alt="my Photo"
          initial={{ opacity: 0, x: -100, y: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            type: "spring",
          }}
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, x: 100, y: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            type: "spring",
          }}
          viewport={{ once: true }}
        >
          <p
            className={`aboutHeader ${screenWidth > 576 ? "" : "text-center"}`}
          >
            {"I'm "}Abdullah Mahmoud
          </p>
          <p className={`aboutText ${screenWidth > 576 ? "" : "text-center"}`}>
            {data.aboutME}
          </p>
          <Button
            as={"a"}
            href={myCv}
            download={true}
            className="btn downloadBtn"
          >
            Download CV <HiOutlineDownload />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
