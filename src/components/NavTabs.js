import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#project1"
          onClick={() => props.handlePageChange("Project1")}
          className={props.currentPage === "Project1" ? "nav-link active" : "nav-link"}
        >
          Kitten Diary
        </a>
      </li>
    
      <li className="nav-item">
        <a
          href="#project2"
          onClick={() => props.handlePageChange("Project2")}
          className={props.currentPage === "Project2" ? "nav-link active" : "nav-link"}
        >
          Weather Dashboard
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#project3"
          onClick={() => props.handlePageChange("Project3")}
          className={props.currentPage === "Project3" ? "nav-link active" : "nav-link"}
        >
          JavaScript Quiz
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#project4"
          onClick={() => props.handlePageChange("Project4")}
          className={props.currentPage === "Project4" ? "nav-link active" : "nav-link"}
        >
          Password Generator
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#project5"
          onClick={() => props.handlePageChange("Project5")}
          className={props.currentPage === "Project5" ? "nav-link active" : "nav-link"}
        >
          Weekly Scheduler
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#project6"
          onClick={() => props.handlePageChange("Project6")}
          className={props.currentPage === "Project6" ? "nav-link active" : "nav-link"}
        >
          Improving SEO
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
