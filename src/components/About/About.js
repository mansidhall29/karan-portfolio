import React from "react";
import { upcomingOriginals } from "../../data/ProjectData";
import { Image, ContactWrapper } from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";
import { FaMusic, FaHeart } from "react-icons/fa";

const UpcomingWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
    margin-top: 30px;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
  justify-content: center;
  gap: 20px;
  margin-top: 25px;
  padding: 0 15px;

  @media screen and (max-width: 768px) {
    gap: 15px;
    padding: 0;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 15px;
  transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
    padding: 12px;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const BioSection = styled.div`
  line-height: 1.8;
  font-size: 1.1rem;
  text-align: justify;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 0;
    text-align: left;
  }
`;

const SectionHeading = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  svg {
    color: #ff4500;
  }
`;

const ImageContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const AboutContainer = styled.div`
  .SectionTitle {
    font-size: 28px;
    font-weight: 700;
    color: #151418;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

function About() {
  return (
    <ContactWrapper id="about">
      <AboutContainer className="Container">
        <div className="SectionTitle">About Me</div>
        <div
          className="BigCard"
          style={{
            background: "linear-gradient(135deg, #ff7eb3, #ffd700, #ff4500)",
            boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)",
            borderRadius: "20px",
            padding: "40px",
            margin: "0 15px",
            "@media (max-width: 768px)": {
              padding: "20px",
              margin: "0 10px",
            },
          }}
        >
          <ScrollAnimation animateIn="fadeInLeft">
            <ImageContainer>
              <Image
                src="/about-image.png"
                alt="Karan Mehrotra"
                style={{
                  borderRadius: "100px",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                }}
              />
            </ImageContainer>
          </ScrollAnimation>

          <BioSection className="AboutBio" style={{ color: "#333" }}>
            <ScrollAnimation animateIn="fadeInLeft">
              <p>
                Hello! I'm <strong>Karan Mehrotra</strong>, an Independent
                Artist based in Delhi, India.{" "}
                <FaHeart style={{ color: "#ff4500" }} />
              </p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInLeft">
              <p>
                As a singer/songwriter, I pour my heart into creating authentic,
                soul-stirring melodies that resonate with the human experience.
                My lyrics delve deep into the realms of love, loss, and
                self-discovery, crafting musical stories that connect with
                listeners on a profound level.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInLeft">
              <p>
                My professional journey includes collaborations with renowned
                brands such as Vi-JOHN, Karcher India and Maggi, where I've
                contributed as both a composer and instrumentalist. I've also
                lent my musical expertise to political campaigns, creating
                impactful jingles that leave a lasting impression.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInLeft">
              <p>
                Join me on this musical journey as I continue to create,
                inspire, and share behind-the-scenes glimpses into my creative
                process.
              </p>
            </ScrollAnimation>

            <UpcomingWrapper>
              <ScrollAnimation animateIn="fadeInUp">
                <SectionHeading>
                  <FaMusic /> Upcoming Originals <FaMusic />
                </SectionHeading>
              </ScrollAnimation>
              <CardContainer>
                {upcomingOriginals.map((original, index) => (
                  <ScrollAnimation animateIn="fadeInUp" key={index}>
                    <Card>
                      <CardTitle>{original.name}</CardTitle>
                    </Card>
                  </ScrollAnimation>
                ))}
              </CardContainer>
            </UpcomingWrapper>
          </BioSection>
        </div>
      </AboutContainer>
    </ContactWrapper>
  );
}

export default About;
