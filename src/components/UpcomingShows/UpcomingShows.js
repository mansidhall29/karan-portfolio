import React from "react";
import styled from "styled-components";
import { upcomingShows } from "../../data/ProjectData";

const ShowsWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const pulseAnimation = `
  @keyframes pulse {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Card = styled.div`
  ${pulseAnimation}
  background: linear-gradient(135deg, #ff7eb3, #ffd700, #ff4500);
  background-size: 200% 200%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 250px;
  padding: 20px;
  transition: transform 0.3s ease;
  animation: pulse 5s ease-in-out infinite;

  &:hover {
    transform: translateY(-10px);
    animation: pulse 3s ease-in-out infinite;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const CardDetails = styled.p`
  font-size: 14px;
  color: #666;
`;

const ShowDate = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
`;

const Venue = styled.div`
  font-size: 14px;
  color: #666;
`;

function UpcomingShows() {
  return (
    <ShowsWrapper id="upcoming-shows">
      <div className="Container">
        <div className="SectionTitle">Upcoming Shows</div>
        <CardContainer>
          {upcomingShows.map((show, index) => (
            <Card key={index}>
              <CardImage src={show.image} alt={show.bandName} />
              <CardTitle>{show.bandName}</CardTitle>
              <CardDetails>{show.description}</CardDetails>
              <Venue>{show.venue}</Venue>
              <ShowDate>
                {show.date} - {show.time}
              </ShowDate>
            </Card>
          ))}
        </CardContainer>
      </div>
    </ShowsWrapper>
  );
}

export default UpcomingShows;
