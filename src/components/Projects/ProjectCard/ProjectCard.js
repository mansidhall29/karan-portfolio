import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";

const StyledCard = styled.div`
  background: #151418;
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VideoTitle = styled.h4`
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const VideoDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #ffffff;
  margin-bottom: 25px;
`;

const Button = styled.a`
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;

  &.watch-btn {
    background: linear-gradient(135deg, #ff4500, #ff7eb3);
    color: white;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(255, 69, 0, 0.2);
    }
  }

  &.github-btn {
    background: rgba(255, 255, 255, 0.15);
    color: white;

    &:hover {
      background: rgba(255, 255, 255, 0.25);
      transform: translateY(-3px);
    }
  }
`;

const TechBadge = styled(TechCard)`
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 14px;
  transition: all 0.3s ease;
  margin: 5px;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
    display: block;
  }

  &:hover img {
    transform: scale(1.02);
  }
`;

function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <StyledCard>
            <CardLeft>
              <ImageWrapper>
                <a
                  href={list.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={list.img} alt={list.name} />
                </a>
              </ImageWrapper>
            </CardLeft>
            <CardRight>
              <VideoTitle>{list.title}</VideoTitle>
              <VideoDescription style={{ color: "white" }}>
                {list.description}
              </VideoDescription>
              <TechCardContainer>
                {list.skills.map((tech, index) => (
                  <TechBadge key={index}>{tech}</TechBadge>
                ))}
              </TechCardContainer>
              <BtnGroup>
                {list.demo_url.length > 0 && (
                  <Button
                    className="watch-btn"
                    href={list.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaPlay /> Watch Now
                  </Button>
                )}
              </BtnGroup>
            </CardRight>
          </StyledCard>
        </ScrollAnimation>
      ))}
    </>
  );
}

export default ProjectCard;
