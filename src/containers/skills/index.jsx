import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent/PageHeader.jsx";
import { skillData } from "./utils.js";
import { AnimateKeyframes } from "react-simple-animate";
import { Animate } from "react-simple-animate";
import { Line } from "rc-progress";
import "./style.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
        <div class="custom-shape-divider-bottom-1728679027">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      <div className="skills_content-wrapper">
        {skillData.map((item, i) => (
          <div key={i} className="skills_content-wrapper_inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translatex(0px)",
              }}
            >
              <h3 className="skills_content-wrapper_inner-content_catagory-text">
                {item.label}
              </h3>
              <div className="skills_content-wrapper_inner-content_progressbar">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity:1", "opacity:0"]}
                    iterationCount="1"
                    key={j} // Add the key prop here
                  >
                    <div className="progressbar-wrapper">
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="2"
                        strokeLinecap="square"
                        key={j} // Add the key prop here
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;