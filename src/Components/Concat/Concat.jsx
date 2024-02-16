import { useLayoutEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { BsSendFill } from "react-icons/bs";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function Contact() {
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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ygnykqr",
        "template_t9igj9l",
        form.current,
        "si-Ejo-XA1XDMJ3et"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email");
        }
      );
  };

  return (
    <div id="Contact">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        ContactMe
      </motion.h1>
      <div className="contactBody">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="contactRow">
            <FaPhoneAlt className="icon" />
            <div className="contactLine">
              <p className="contactMeTitle">Call Me</p>
              <p className="contactMeSubTitle ">01066868100</p>
            </div>
          </div>
          <div className="contactRow">
            <AiOutlineMail className="icon" />
            <div className="contactLine">
              <p className="contactMeTitle">Email</p>
              <p className="contactMeSubTitle ">
                abdullah.mahmoud.f196 @gmail.com
              </p>
            </div>
          </div>
          <div className="contactRow">
            <FaLocationDot className="icon" />
            <div className="contactLine">
              <p className="contactMeTitle">Location</p>
              <p className="contactMeSubTitle ">Alexandria - Egypt</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Form
            className={screenWidth > 767 ? "" : "my-3 p-2"}
            ref={form}
            onSubmit={sendEmail}
          >
            <Row className="mb-3">
              <Form.Group as={Col} controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  name="user_name"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="user_email"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control name="subject" placeholder="Subject" type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Message"
                name="message"
              />
            </Form.Group>
            <Button type="submit" style={{ backgroundColor: "#1b7be2" }}>
              <BsSendFill /> Contact me
            </Button>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}
