import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  margin-top: 5rem;

  .Container {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 15px;

    @media screen and (max-width: 768px) {
      padding: 0;
    }
  }

  .SectionTitle {
    font-size: 28px;
    font-weight: 700;
    color: #151418;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

function Projects() {
  return (
    <ProjectsContainer id="projects">
      <div className="Container">
        <div className="SectionTitle">Latest Releases</div>
        <div
          className="BigCard"
          style={{
            background: "#fff",
            boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)",
            borderRadius: "20px",
            padding: "40px",
            margin: "0 15px",
            overflowX: "hidden",
            "@media (max-width: 768px)": {
              padding: "20px",
              margin: "0 10px",
            },
          }}
        >
          <ProjectCard />
        </div>
      </div>
    </ProjectsContainer>
  );
}

export default Projects;
