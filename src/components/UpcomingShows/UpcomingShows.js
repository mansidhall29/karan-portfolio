import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getCalendarEvents } from "../../utils/googleCalendar";

const ShowsWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
`;

const FilterDropdown = styled.select`
  padding: 10px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  background-color: #f9f9f9;
  color: #333;
  cursor: pointer;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    border-color: #ff7eb3;
    box-shadow: 0 2px 6px rgba(255, 126, 179, 0.2);
  }

  &:focus {
    border-color: #ff4500;
    box-shadow: 0 0 0 2px rgba(255, 69, 0, 0.2);
  }
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

const NoShowsMessage = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #666;
  margin-top: 20px;
`;

function filterShows(shows, filter) {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  switch (filter) {
    case "past":
      return shows.filter((show) => new Date(show.date) < new Date(today));
    case "today":
      return shows.filter((show) => show.date === today);
    case "upcoming":
      return shows.filter((show) => new Date(show.date) > new Date(today));
    default:
      return shows;
  }
}

function getNoShowsMessage(filter) {
  switch (filter) {
    case "past":
      return "No Past Shows";
    case "today":
      return "No Shows Today";
    case "upcoming":
      return "No Upcoming Shows";
    default:
      return "No Shows Available";
  }
}

function UpcomingShows() {
  const [filter, setFilter] = useState("upcoming");
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      const calendarEvents = await getCalendarEvents();
      setShows(calendarEvents);
      setLoading(false);
    };

    fetchShows();
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredShows = filterShows(shows, filter);

  if (loading) {
    return (
      <ShowsWrapper id="upcoming-shows">
        <div className="Container">
          <Header>
            <SectionTitle>Upcoming Shows</SectionTitle>
            <FilterDropdown value={filter} onChange={handleFilterChange}>
              <option value="past">Past</option>
              <option value="today">Today</option>
              <option value="upcoming">Upcoming</option>
            </FilterDropdown>
          </Header>
          <div>Loading shows...</div>
        </div>
      </ShowsWrapper>
    );
  }

  return (
    <ShowsWrapper id="upcoming-shows">
      <div className="Container">
        <Header>
          <SectionTitle>Upcoming Shows</SectionTitle>
          <FilterDropdown value={filter} onChange={handleFilterChange}>
            <option value="past">Past</option>
            <option value="today">Today</option>
            <option value="upcoming">Upcoming</option>
          </FilterDropdown>
        </Header>
        {filteredShows.length > 0 ? (
          <CardContainer>
            {filteredShows.map((show, index) => (
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
        ) : (
          <NoShowsMessage>{getNoShowsMessage(filter)}</NoShowsMessage>
        )}
      </div>
    </ShowsWrapper>
  );
}

export default UpcomingShows;
