import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <div className="resume">
      <div className="nav">
        <div className="head">Resume</div>
        <button className="btn">Download</button>
      </div>
      <div className="info-v">
        <span>Suryansh Singh Bisen</span>
        <span>07suryansh@gmail.com</span>
        <span>+919889666781</span>
      </div>
      <div className="info-v">
        <span>LinkedIn</span>
        <span>Github</span>
      </div>
      <div className="info-v">
        <span>Leetcode</span>
        <span>Codeforces</span>
        <span>Codechef</span>
      </div>
      <div className="heading">Education</div>
      <div className="info-v">
        <span>National Institute of Technology Hamirpur</span>
        <span>B.Tech in Electronics and Communication</span>
        <span>8.3/10 CGPA</span>
        <span>2020-2024</span>
      </div>
      <div className="heading">Technical Skills</div>
      <div className="info-v">
        <span>
          <b>Languages:</b> C++, Java , JavaScript , HTML , CSS , SQL
        </span>
        <span>
          <b>Frameworks:</b> ReactJs , NodeJs , Express , Bootstrap , Tailwind
          CSS
        </span>
        <span>
          <b>Developer Tools:</b> Git, GitHub, Figma, Adobe Illustrator, Adobe
          Photoshop, VS Code, Postman, MongoDB Compass
        </span>
        <span>
          <b>Databases:</b> MongoDB, MySQL, PostgreSQL
        </span>
        <span>
          <b>Fundamental:</b> OOPS , OS , DBMS
        </span>
      </div>

      <div className="heading">Experience</div>
      <div className="info-v">
        <span>
          <b>App Team NITH | Frontend Developer</b>
        </span>
        <span>Feb 2022 - Apr 2022</span>
        <span>
          Developed a user feed post upload feature for the Hill’ffair 2k22 App
          using Java and Android Studio, which included image uploads, post
          likes, and comments functionality.
        </span>
      </div>
      <div className="info-v">
        <span>
          <b>Codelabz | Open Source (Remote)</b>
        </span>
        <span>Dec 2022 - Jan 2023</span>
        <span>
          Contributed to 5 key features across 2 repositories, improving the
          signup page UI and increasing user satisfaction by 20%.
        </span>
      </div>
      <div className="info-v">
        <span>
          <b>Mentomeet | Graphic Designer Intern (Remote)</b>
        </span>
        <span>Jun 2022 - Jul 2022</span>
        <span>
          Designed 10+ event posters and prepared Instagram post templates,
          increasing social media engagement by 25%.
        </span>
      </div>

      <div className="heading">Projects</div>
      <div className="info-v">
        <span>
          <b>Freedom of Gaming</b>
        </span>
        <span>
          <a>Link →</a>
        </span>
        <span>
          Engineered and launched a React.js-based game dashboard UI clone on
          Vercel, incorporating settings, advanced features, rules, and map
          rotation; enhanced user experience and engagement by 40% by conducting
          user feedback sessions.
        </span>
        <span>
          Architected the backend with Express and utilised MongoDB for data
          storage, deployed on Vercel for the frontend to access, resulting in a
          30% reduction in load times.
        </span>
        <span>
          Reactjs, Nodejs, Express, Javascript, MongoDB, REST API, Postman
        </span>
      </div>

      <div className="info-v">
        <span>
          <b>Dynamic Task List</b>
        </span>
        <span>
          <a>Link →</a>
        </span>
        <span>
          Developed features allowing users to add tasks with titles and
          optional details, relocate tasks between categories (Pending, In
          Progress, Completed), and record timestamps upon task completion,
          improving task management by 50%.
        </span>
        <span>
          Created a user-friendly interface that facilitates effortless task
          tracking and organisation, increasing user satisfaction by 30%.
        </span>
        <span>
          Utilised MongoDB for efficient storage and access of task data.
          Implemented Express.js for backend server setup and API creation,
          reducing server response time by 20%.
        </span>
        <span>ReactJs, NodeJs, Express, MongoDB, Vercel</span>
      </div>

      <div className="info-v">
        <span>
          <b>Order Management System</b>
        </span>
        <span>
          <a>Link →</a>
        </span>
        <span>
          Designed and implemented the Order Management System (OMS) API,
          streamlining order processes and reducing order processing time by
          35%. Facilitated users in creating, updating, and making payments
          collaboratively.
        </span>
        <span>
          Created detailed API documentation, clarifying integration processes,
          reducing onboarding time by 40%, and enhancing operational efficiency
          by 30.
        </span>
        <span>Nodejs, Express, Javascript, MongoDB, REST API, Postman</span>
      </div>

      <div className="info-v">
        <span>
          <b>Finearts NITH</b>
        </span>
        <span>
          <a>Link →</a>
        </span>
        <span>
          Led the creation of the ”FineArts NITH” website using React.js,
          Node.js, Express.js, MongoDB, and Cloudinary, increasing student
          engagement by 25%.
        </span>
        <span>
          Executed a comprehensive college club platform, hosted on Vercel,
          utilizing React.js for front-end and Node.js, Express.js, MongoDB for
          back-end, resulting in a 30% increase in user engagement.
        </span>
        <span>
          Implemented Cloudinary for advanced media management, deployed and
          maintained the website, ensuring optimal performance and reliability,
          reducing media load time by 20%.
        </span>
        <span>ReactJs, NodeJs, Express, MongoDB, Cloudinary, Vercel</span>
      </div>

      <div className="heading">Achievements</div>
      <div className="info-v">
        <span>Max rating of 1756 on Leetcode</span>
        <span>Max rating of 1688 (3 stars) on Codechef</span>
        <span>Max rating of 1222 (Pupil) on Codeforces</span>
      </div>

    </div>
  );
}
