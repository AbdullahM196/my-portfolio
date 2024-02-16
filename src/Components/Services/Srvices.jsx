import data from "../../assets/data";
import "./services.css";
import ServicesCards from "./servicesCards";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div id="Services">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Services
      </motion.h1>
      <div className="servicesRow">
        {" "}
        <div>
          <ServicesCards
            title={"Frontend"}
            image={"../frontend.jpg"}
            whatICanProvide={data.Services.frontend.whatICanProvide}
          />
        </div>
        <div>
          <ServicesCards
            title={"Backend"}
            image={"../backend.jpg"}
            whatICanProvide={data.Services.frontend.whatICanProvide}
          />
        </div>
      </div>
    </div>
  );
}
