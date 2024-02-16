import { useLayoutEffect, useState } from "react";
import "./skills.css";
import Accordion from "react-bootstrap/Accordion";
import { Row, Col } from "react-bootstrap";
import { BsCodeSlash } from "react-icons/bs";
import { BiSolidServer } from "react-icons/bi";
import ProgressBar from "react-bootstrap/ProgressBar";
import { motion } from "framer-motion";
import data from "../../assets/data";
export default function Skills() {
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
  const [key, setKey] = useState(null);
  const [key2, setKey2] = useState(null);
  function handleOnSelect(key) {
    setKey(key);
  }
  function handleOnSelect2(key2) {
    setKey2(key2);
  }
  return (
    <div id="Skills">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Skills
      </motion.h1>{" "}
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h2 className={`${screenWidth > 576 ? "" : "text-center"}`}>
          Skills & Tools
        </h2>
        <Row className="row-cols-md-2 row-cols-1 w-100 mx-auto mx-md-0">
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <Accordion
              style={{ width: "100%", height: key == null ? "71px" : "327px" }}
              onSelect={handleOnSelect}
            >
              <Accordion.Item eventKey="0" className="h-100 border-0">
                <Accordion.Header className="mb-0">
                  <div>
                    <Row className="w-100">
                      <Col xs={6}>
                        <BsCodeSlash className="col-12 fs-2" />
                      </Col>
                      <Col xs={6}>
                        <h3>Frontend</h3>
                      </Col>
                    </Row>
                  </div>
                </Accordion.Header>
                <Accordion.Body className="d-flex flex-column">
                  {data.skills.frontend.map((skill, index) => (
                    <div key={index}>
                      <label
                        htmlFor={skill.name}
                        className="d-flex justify-content-between"
                      >
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </label>
                      <ProgressBar now={skill.level} id={skill.name} />
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <Accordion
              style={{ width: "100%", height: key2 == null ? "71px" : "327px" }}
              onSelect={handleOnSelect2}
              className="border-0 my-2 m-md-0"
            >
              <Accordion.Item eventKey="1" className="h-100 border-0">
                <Accordion.Header className="mb-0">
                  <div>
                    <Row className="w-100">
                      <Col xs={6}>
                        <BiSolidServer className="col-12 fs-2" />
                      </Col>
                      <Col xs={6}>
                        <h3>Backend</h3>
                      </Col>
                    </Row>
                  </div>
                </Accordion.Header>
                <Accordion.Body className="d-flex flex-column">
                  {data.skills.backend.map((skill, index) => (
                    <div key={index}>
                      <label
                        htmlFor={skill.name}
                        className="d-flex justify-content-between"
                      >
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </label>
                      <ProgressBar now={skill.level} id={skill.name} />
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </motion.div>
        </Row>
      </motion.section>
      <section className="Education w-100">
        <motion.h2
          className={`${screenWidth > 576 ? "" : "text-center"}`}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Education & Experience
        </motion.h2>
        <motion.h3
          className={`${screenWidth > 576 ? "" : "text-center"}`}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h3>
        <Row className="w-100">
          <Col sm={12} md={6}>
            <motion.div
              className="mx-auto"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <ul className="timeline">
                <li className="h-100 mt-2 timeline-item bg-white rounded ml-3 p-4 shadow">
                  <div className="timeline-arrow"></div>
                  <h2 className="h5 mb-0" style={{ fontSize: "20px" }}>
                    Faculty of Commerce - Alexandria
                  </h2>
                  <span className="small text-gray">
                    <i className="fa fa-clock-o mr-1"></i>9 May, 2020
                  </span>
                  <p className="text-small mt-2 font-weight-light">
                    I graduated from Faculty of Commerce Alexandria university
                    in 2020 Department of Management information systems
                  </p>
                </li>
                <li className="h-100 mt-2 timeline-item bg-white rounded ml-3 p-4 shadow">
                  <div className="timeline-arrow"></div>
                  <h2 className="h5 mb-0" style={{ fontSize: "20px" }}>
                    Software fundamentals - ITI
                  </h2>
                  <span className="small text-gray">
                    <i className="fa fa-clock-o mr-1"></i>9 May, 2023
                  </span>
                  <p className="text-small mt-2 font-weight-light">
                    I have successfully completed the Software Fundamentals
                    Diploma program at the Information Technology Institute
                    (ITI).
                  </p>
                </li>
                <li className="h-100 mt-2 timeline-item bg-white rounded ml-3 p-4 shadow">
                  <div className="timeline-arrow"></div>
                  <h2 className="h5 mb-0" style={{ fontSize: "20px" }}>
                    MERN Stack development- ITI
                  </h2>
                  <span className="small text-gray">
                    <i className="fa fa-clock-o mr-1"></i>18 October, 2023
                  </span>
                  <p className="text-small mt-2 font-weight-light">
                    I have attained a MERN Fullstack Diploma from the
                    Information Technology Institute (ITI).
                  </p>
                </li>
              </ul>
            </motion.div>
          </Col>
          <Col sm={12} md={6}>
            <motion.div
              className="mx-auto"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <ul className="timeline">
                <li className="h-100 mt-2 timeline-item bg-white rounded ml-3 p-4 shadow">
                  <div className="timeline-arrow"></div>
                  <h2 className="h5 mb-0" style={{ fontSize: "20px" }}>
                    Clone Amazon - ITI Graduation project
                  </h2>
                  <span className="small text-gray">
                    <i className="fa fa-clock-o mr-1"></i>18 October,2023
                  </span>
                  <p className="text-small mt-2 font-weight-light">
                    In this graduation project, my team and I endeavored to
                    replicate the full functionality of the Amazon website. To
                    accomplish this, we utilized the Angular framework for the
                    administrative side, employed React.js for the user-facing
                    website, and implemented Node.js and Express for the
                    backend. Data was stored in a MongoDB database.
                  </p>
                </li>
              </ul>
            </motion.div>
          </Col>
        </Row>
      </section>
    </div>
  );
}
