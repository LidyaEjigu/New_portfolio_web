import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent/PageHeader";
import { Animate } from "react-simple-animate";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import "./style.scss";
const personalDetails = [
  {
    label: "Name",
    value: "Lidya Ejigu",
  },
  {
    label: "Address",
    value: "ADDISABABA",
  },
  {
    label: "Email",
    value: "liduejigu@gmail.com",
  },
  {
    label: "Contact Me",
    value: "+251962614739",
  },
];
const jobSummary= "I am a passionate full-stack developer in front-end and back-end technologies. Skilled in JavaScript, React, Node.js, and more, I love creating user-friendly applications and efficient solutions. With acollaborative mindset and a thirst for learning, I enjoy tackling new challenges and contributing to innovative projects that make a difference"

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      
       <div className="about-content">
        <div className="about-content_personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Fullstack Developer</h3>
            <div className="paragraph">
              <p>I am a passionate full-stack developer in front-end and back-end</p>
              <p> technologies. Skilled in JavaScript, React, Node.js, and more, I love </p>
              <p>creating user-friendly applications and efficient solutions. With a</p>
              <p>collaborative mindset and a thirst for learning, I enjoy tackling new</p>
              <p>challenges and contributing to innovative projects that make a difference</p>
            </div>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalinformationheadertext">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about-content_serviceWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about-content_serviceWrapper_innercontent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
          </div>
          </div>
          
      {/* <div className="about-content">
        <div className="about-content_personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Fullstack Developer</h3>
            <div className="paragraph">
              <p>I am a passionate full-stack developer in front-end and back-end</p>
              <p> technologies. Skilled in JavaScript, React, Node.js, and more, I love </p>
              <p>creating user-friendly applications and efficient solutions. With a</p>
              <p>collaborative mindset and a thirst for learning, I enjoy tackling new</p>
              <p>challenges and contributing to innovative projects that make a difference</p>
            </div>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalinformationheadertext">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about-content_serviceWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about-content_serviceWrapper_innercontent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div> */}
    </section>
  );
};

export default About;
