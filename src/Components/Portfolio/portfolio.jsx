import "./portfolio.css";
import { motion } from "framer-motion";
import data from "../../assets/data";
import { Button } from "react-bootstrap";
export default function portfolio() {
  return (
    <div id="Portfolio">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Portfolio
      </motion.h1>
      <div className="portfolioCards">
        {data.portfolio.map((project, index) => {
          return (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={project.imglink}
                alt={project.name}
                className="card__image w-100 h-100 "
              />
              <div className="card__content">
                <p className="card__title">{project.name}</p>
                <p className="card__description">{project.description}</p>
                <span className="d-flex justify-content-center gap-3 mt-2">
                  <Button
                    as="a"
                    href={project.websiteLink}
                    target="_blank"
                    rel="noreferrer"
                    className="card__button btn"
                  >
                    Visit
                  </Button>
                  <Button
                    as="a"
                    href={project.GithubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="card__button"
                  >
                    Github
                  </Button>
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
