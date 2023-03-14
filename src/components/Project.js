import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Project1 from "../pages/Project1";
import Project2 from "../pages/Project2";
import Project3 from "../pages/Project3";
import Project4 from "../pages/Project4";
import Project5 from "../pages/Project5";
import Project6 from "../pages/Project6";

// import NavTabs from "./NavTabs";

class Project extends Component {
  state = {
    currentPage: "Project1"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Project1") {
      return <Project1/>;
    } else if (this.state.currentPage === "Project2") {
      return <Project2/>;
    } else if (this.state.currentPage === "Project3") {
        return <Project3/>;
    } else if (this.state.currentPage === "Project4") {
        return <Project4/>;
    } else if (this.state.currentPage === "Project5") {
        return <Project5/>;
    } else {
        return <Project6/>;
    } 
    };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
    </div>)
  }
}

export default Project;