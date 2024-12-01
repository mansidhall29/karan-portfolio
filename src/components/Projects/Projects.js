import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import styled from "styled-components";
import { FaVideo } from "react-icons/fa";

const ProjectsContainer = styled.div`
  background: #f5f5f5;
  padding: 80px 0;
  position: relative;
`;

const WaveTop = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateY(-99%);
`;

const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const ProjectsTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  svg {
    color: #ff4500;
  }
`;

const ProjectsSubtitle = styled.p`
  color: #666;
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
`;

function Projects() {
  return (
    <>
      <WaveTop
        height="100%"
        width="100%"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#151418ff"
          transform="rotate(-180 720 200)"
        ></path>
      </WaveTop>
      <ProjectsContainer id="projects">
        <div className="Container">
          <ProjectsHeader>
            <ProjectsTitle>
              <FaVideo /> Latest Releases
            </ProjectsTitle>
            <ProjectsSubtitle>
              Check out my latest music videos and collaborations
            </ProjectsSubtitle>
          </ProjectsHeader>
          <ProjectCard />
        </div>
      </ProjectsContainer>
    </>
  );
}

export default Projects;
