import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            TECHNICAL SKILLS
          </span>
          {/* <span>Brands & Clients</span> */}
          <spane>
            <ul>
            <img width="48" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="react-native"/>
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/c-sharp-logo.png" alt="c-sharp-logo"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/net-framework.png" alt="net-framework"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/mongodb.png" alt="mongodb"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/microsoft-sql-server.png" 
            alt="microsoft-sql-server"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/> <br/>
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/css3.png" alt="css3"/>
            <img width="48" height="48" src="https://img.icons8.com/ios-filled/48/git.png" alt="git"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/bootstrap.png" alt="bootstrap"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/material-ui.png" alt="material-ui"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/figma--v1.png" alt="figma--v1"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/trello.png" alt="trello"/>
            <img width="48" height="48" src="https://img.icons8.com/ios/48/notion.png" alt="notion"/>
            <img width="48" height="48" src="https://img.icons8.com/fluency/48/wordpress.png" alt="wordpress"/>
            <img width="48" height="48" src="https://img.icons8.com/color/48/npm.png" alt="npm"/>
            </ul>
          </spane>
          
          {/* <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link> */}
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        <div>
          <h1 className="awesomes" style={{ color: darkMode ? "white" : "" }}>
              SOFT SKILLS: 
          </h1>
          <ul>
            <li>Teamwork, team management, problem-solving.</li>
            <li>Communication, public speaking, presentation.</li>
            <li>Time management, self-study, research.</li>
            <li>Ability to think logically, creatively, eager to learn.</li>
            <li>Systems thinking, analysis, design, evaluation, synthesis and planning.</li>
          </ul>
        </div>
        <div>
          <h1 className="awesomes" style={{ color: darkMode ? "white" : "" }}>
            WORKFLOW
          </h1>
          <ul style={{listStyle:'none', paddingLeft:'20px'}} >
            <li><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/checkmark--v1.png" alt="checkmark--v1"/> Git, Github for Teamwork</li>
            <li><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/checkmark--v1.png" alt="checkmark--v1"/> Testing & Debugging.</li>
            <li><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/checkmark--v1.png" alt="checkmark--v1"/> Responsive Web Design.</li>
            <li><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/checkmark--v1.png" alt="checkmark--v1"/> Agile Development & Scrum.</li>
            <li><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/checkmark--v1.png" alt="checkmark--v1"/> If you do not have an awesome brain, you have to ceaselessly learn!.</li>
          </ul>
        </div>
        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
