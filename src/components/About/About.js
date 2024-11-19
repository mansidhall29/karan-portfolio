import React from "react";
import { upcomingOriginals } from "../../data/ProjectData";
import { Image, ContactWrapper } from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";
import { FaMusic } from "react-icons/fa";

const UpcomingWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 250px;
  padding: 20px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div
          className="BigCard"
          style={{
            background: "linear-gradient(135deg, #ff7eb3, #ffd700, #ff4500)",
            boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
          }}
        >
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/about-image.png" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio" style={{ color: "black" }}>
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Karan Mehrotra</strong>. An Independent
              Artist based in Delhi, India.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              I am a singer/songwriter who is on a journey to write some of the
              very heartfelt, relatable lyrics that capture the essence of love,
              loss, and self-discovery Soul-stirring melodies that will leave
              you breathless and yearning for more A genuine, passionate artist
              who wears their heart on their sleeve and invites you to join them
              on their musical journey
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              I have worked with various well recognized brands as a composer
              and instrumentalist such as Vi- JOHN , Karcher India etc and some
              political parties too for their Jingles and campaigns
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Stay tuned for new music, behind-the-scenes insights, and a
              healthy dose of creativity and inspiration.
            </ScrollAnimation>

            <br />
            <br />

            {/* <ScrollAnimation animateIn="fadeInLeft">
              UPCOMING ORIGINALS
            </ScrollAnimation>
            <Technologies>
              {upcomingOriginals.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies> */}

            <UpcomingWrapper>
              <ScrollAnimation animateIn="fadeInUp">
                <FaMusic></FaMusic> Upcoming Originals <FaMusic></FaMusic>
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
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
