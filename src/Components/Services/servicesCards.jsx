import { useState } from "react";
import PropTypes from "prop-types";
import "./services.css";
import { BsArrowRight, BsCodeSlash } from "react-icons/bs";
import { AiOutlineLine } from "react-icons/ai";
import Card from "react-bootstrap/Card";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function ServicesCards({ title, image, whatICanProvide }) {
  const [show, setShow] = useState(false);
  const y = useMotionValue(0);
  const translateYRange = [-200, 0];
  const opacityRange = [0, 1];
  const opacity = useTransform(y, translateYRange, opacityRange);
  const toggleShow = () => setShow(!show);

  return (
    <motion.div
      className="serviceCard"
      style={{ background: `url(${image})` }}
      onTap={toggleShow}
    >
      <div className="content">
        <BsCodeSlash
          style={{
            fontSize: "50px",
            backgroundColor: "#1b7be2",
            padding: "8px",
            borderRadius: "10px",
            marginBottom: "24px",
          }}
        />
        <p className="title">{title}</p>
        <p className="text">
          Read More <BsArrowRight />
        </p>
      </div>
      {show && (
        <motion.div
          className="bottomSheet"
          style={{ y, opacity }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging within the parent
          dragElastic={0.3} // Adjust the elasticity of the dragging
        >
          <span className="d-flex justify-content-center" onClick={toggleShow}>
            <AiOutlineLine style={{ fontSize: "40px", cursor: "pointer" }} />
          </span>
          <Card.Body className="h-100">
            <Card.Title className="shadow-lg sticky-top p-2">
              What I Provide?
            </Card.Title>
            <Card.Text className="overflow-auto h-75 cardText">
              {whatICanProvide}
            </Card.Text>
          </Card.Body>
        </motion.div>
      )}
    </motion.div>
  );
}

ServicesCards.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  whatICanProvide: PropTypes.string,
};
