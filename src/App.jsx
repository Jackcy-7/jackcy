import { useState } from "react";
import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = [
    { name: "About Me", id: "abt" },
    { name: "Qualification", id: "qual" },
    { name: "Skills", id: "skill" },
    { name: "Project", id: "proj" },
    { name: "Contact", id: "cont" },
  ];

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; 
    link.download = "CV_Jackcy_Antony.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  const sendWhatsApp = () => {
    const message = document.getElementById("msg").value;
    const number = "917200446750"; 

    if (message.trim() === "") {
      alert("Please type a message before sending!");
      return;
    }

    const url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
    document.getElementById("msg").value = "";
  };


  return (
    <>
      <header>
        <h1>🕸️🎀</h1>
        <input type="checkbox" id="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul className="ulone">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={"#" + item.id}
                className={activeIndex === index ? "active" : ""}
                onClick={() => {
                  setActiveIndex(index);
                  const checkbox = document.getElementById("nav-toggle");
                  if (checkbox) checkbox.checked = false;
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </header>
        <div className="bod">
          <h1>Jackcy A</h1>
          <h3>🕸️ Aspiring MERN Stack Developer</h3>
          <h2>꒷꒦︶꒷꒦︶ ๋ ࣭ ⭑꒷꒦</h2>
          <p>Hi, I’m Jackcy Antony, a professional web developer specializing in building modern, responsive,<b/> and efficient web applications.</p>  
          <img src="./src/assets/mern.png" alt="" />
          <br/>
          <button onClick={downloadCV}>Download CV</button>
        </div>
        <div className="abt" id="abt">
          <h1>About Me:-</h1>
          <img src="./src/assets/img.jpg" alt="" />
          <h3 className="a">Hello! I am a Full-Stack Developer passionate about creating seamless user experiences on the front end while developing efficient and scalable logic on the back end. I specialize in front-end and back-end development using JavaScript technologies, including React, Node.js, Express, and MongoDB.</h3>
          <h3 className="b">I enjoy solving real-world problems through technology and transforming ideas into functional products. Coding provides me with endless opportunities to learn and innovate, allowing me to create solutions that make an impact.</h3>
          <h3 className="c">My goal is to continue growing as a Full-Stack Developer, contribute to innovative projects, and continuously enhance my skills.</h3>
          <h3 className="d">Soft Skills:</h3>
          <ul className="e">
            <li>Quick learner</li>
            <li>Team collaboration</li>
            <li>Attention to detail</li>
            <li>Creativity</li>
          </ul>
        </div>
        <div className="qual" id="qual">
          <h1>Qualification:-</h1>
          <p className="para1">
            I completed my 10th grade in 2022 from "Our Lady of Snows Matric Hr. Sec. School" 
            with a score of 81.2%. This laid the foundation for my interest in technology and problem-solving.
          </p>
          <img src="./src/assets/ols.png" alt="" className="f"/>
          <p class="para2">
            I completed my 12th grade in 2024 from St. Ann’s Matric Hr. Sec. School with an outstanding score of 96.15%. 
            This strengthened my academic foundation and deepened my passion for technology and innovation.
          </p>
          <img src="./src/assets/anns.png" alt="" className="g"/>
          <p className="para3">
            I am currently pursuing my Bachelor of Engineering in Computer Science and Engineering (B.E CSE) at Government College of Engineering, Tirunelveli, for the academic period 2024 – 2028. 
            I am in my 2nd year with a current CGPA of 8.52, consistently working to deepen my knowledge in software development, problem-solving, and modern technologies.
          </p>
          <img src="./src/assets/gce.png" alt="" className="h"/>
        </div>
        <div className="skill" id="skill">
          <h1>Skills:-</h1>
          <img src="./src/assets/html.png" alt="" className="one"/>
          <img src="./src/assets/css.svg" alt="" className="two"/>
          <img src="./src/assets/js.webp" alt="" className="three"/>
          <img src="./src/assets/react.png" alt="" className="four"/>
          <img src="./src/assets/exp.png" alt="" className="five"/>
          <img src="./src/assets/nodejs.png" alt="" className="six"/>
          <img src="./src/assets/mg.png" alt="" className="seven"/>
          <img src="./src/assets/git.png" alt="" className="eight"/>
          <img src="./src/assets/code-stable.png" alt="" className="nine"/>
          <img src="./src/assets/canva.png" alt="" className="ten"/>
          <img src="./src/assets/gi.png" alt="" className="eleven" />
          <h4>I have developed a strong foundation in both front-end and back-end technologies, enabling me to build responsive, user-friendly, and efficient web applications.
            My skill set includes working with HTML, CSS, JavaScript, and React for creating dynamic interfaces, while Node.js, Express, and MongoDB help me manage server-side development and databases. 
            I am also familiar with Git and GitHub for version control and project collaboration. Along with these technical skills, I continuously focus on improving my problem-solving ability, logical thinking, 
            and clean coding practices, which help me build scalable and maintainable applications.
          </h4>
        </div>
        <div className="proj" id="proj">
          <h1>Projects:-</h1>
          <p className="para4">
            I developed a Number Guessing Game using HTML, CSS, and JavaScript, where the player has only three attempts to correctly guess a randomly generated number, 
            earning one point for each correct guess, and needing 3 points to win the game. The project features a clean and interactive user interface, while JavaScript 
            controls the game logic, including random number generation, score tracking, and attempt validation, providing an engaging and responsive gameplay experience.
          </p>
          <img src="./src/assets/guess.png" alt="" className="i"/>
          <p className="para5">
            I am building a Voice-Activated To-Do List using the MERN stack, where users can manage their tasks through voice commands instead of typing. 
            The project uses Speech Recognition to detect spoken inputs and seamlessly convert them into actions like adding, marking as completed, updating, and deleting tasks. 
            The MongoDB database securely stores all tasks, Express and Node.js handle the backend API, while React provides a smooth and responsive interface for real-time task updates. 
            This project focuses on improving productivity through hands-free task management and integrates modern voice-processing features for an efficient and interactive user experience.
          </p>
          <img src="./src/assets/voice to-do.png" alt="" className="j"/>
        </div>
        <div className="cont" id="cont">
          <h3>For contact</h3>
          <a href="mailto:jackcyantony7@gmail.com"><img src="./src/assets/gmail.png" alt="" className="k"/></a>
          <a href="https://github.com/Jackcy-7"><img src="./src/assets/git.png" alt="" className="l"/></a>
          <a href="https://www.linkedin.com/in/jackcy-a-08a6b0329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="./src/assets/linkedin.png" alt="" className="m"/></a>
          <a href="https://www.instagram.com/im_jackz_?igsh=dGh4cXh4andhb2N2"><img src="./src/assets/insta.png" alt="" className="n"/></a>
          <h2>Let's talk</h2>
          <textarea name="message" id="msg" placeholder="Type your message......"></textarea>
          <button onClick={sendWhatsApp}>Send ➤</button>
        </div>
      
    
    </>
  );
}

export default App;

