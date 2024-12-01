// src/components/UpcomingShows/UpcomingShows.js
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { getCalendarEvents } from "../../utils/googleCalendar";
import { FaCalendar, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ShowsWrapper = styled.section`
  margin: 2rem 0;
  padding: 1.5rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background.secondary},
    ${({ theme }) => `${theme.colors.primary}15`}
  );
  min-height: 60vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 0.5rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  font-size: 1.875rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

const FilterDropdown = styled.select`
  padding: 0.5rem 1rem;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.background.primary},
    ${({ theme }) => `${theme.colors.primary}10`}
  );
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 15px ${({ theme }) => `${theme.colors.primary}40`};
    transform: translateY(-2px);
  }

  option {
    background: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: minmax(
      280px,
      320px
    ); // Single column with fixed width range
    justify-content: center; // Center the grid items
    padding: 1rem 0.5rem;
  }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const Card = styled.article`
  background: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.3s ease;
  position: relative;
  width: 100%; // Take full width of grid cell
  margin: 0 auto; // Center the card

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary},
      ${({ theme }) => theme.colors.accent}
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-0.25rem) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.lg};

    &::before {
      opacity: 1;
    }
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform 0.5s ease;

  &.loading {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 1000px 100%;
    animation: ${shimmer} 2s infinite;
  }

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: #333;
  margin: 0 0 0.75rem;
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.875rem;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}10`};
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.2);
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.875rem;
  margin-top: 0.75rem;
  line-height: 1.6;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: 1.125rem;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 2s infinite linear;
`;

const NoShowsMessage = styled(LoadingMessage)`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const filterShows = (shows, filter) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const formatDate = (date) => {
    return new Date(date).toISOString().split("T")[0];
  };

  switch (filter) {
    case "past":
      return shows.filter((show) => new Date(show.date) < today);
    case "today":
      return shows.filter(
        (show) => formatDate(show.date) === formatDate(today)
      );
    case "upcoming":
      return shows.filter((show) => new Date(show.date) >= today);
    default:
      return shows;
  }
};

const getNoShowsMessage = (filter) => {
  switch (filter) {
    case "past":
      return "No past shows available";
    case "today":
      return "No shows scheduled for today";
    case "upcoming":
      return "No upcoming shows scheduled";
    default:
      return "No shows available";
  }
};

function UpcomingShows() {
  const [filter, setFilter] = useState("upcoming");
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShows = async () => {
      setLoading(true);
      const events = await getCalendarEvents();
      setShows(events);
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
      <ShowsWrapper>
        <Container>
          <Header>
            <SectionTitle>Upcoming Shows</SectionTitle>
            <FilterDropdown
              value={filter}
              onChange={handleFilterChange}
              aria-label="Filter shows"
            >
              <option value="past">Past Shows</option>
              <option value="today">Today's Shows</option>
              <option value="upcoming">Upcoming Shows</option>
            </FilterDropdown>
          </Header>
          <LoadingMessage>Loading shows...</LoadingMessage>
        </Container>
      </ShowsWrapper>
    );
  }

  return (
    <ShowsWrapper>
      <Container>
        <Header>
          <SectionTitle>Upcoming Shows</SectionTitle>
          <FilterDropdown
            value={filter}
            onChange={handleFilterChange}
            aria-label="Filter shows"
          >
            <option value="past">Past Shows</option>
            <option value="today">Today's Shows</option>
            <option value="upcoming">Upcoming Shows</option>
          </FilterDropdown>
        </Header>
        {filteredShows.length > 0 ? (
          <CardGrid role="list">
            {filteredShows.map((show, index) => (
              <Card key={index} role="listitem">
                <CardImage
                  src={show.image}
                  alt={`${show.bandName} show poster`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/default-show-image.jpeg";
                  }}
                />
                <CardContent>
                  <CardTitle>{show.bandName}</CardTitle>
                  <CardDetails>
                    <DetailRow>
                      <FaMapMarkerAlt aria-hidden="true" />
                      <span>{show.venue}</span>
                    </DetailRow>
                    <DetailRow>
                      <FaCalendar aria-hidden="true" />
                      <span>{show.date}</span>
                    </DetailRow>
                    <DetailRow>
                      <FaClock aria-hidden="true" />
                      <span>{show.time}</span>
                    </DetailRow>
                    <Description>{show.description}</Description>
                  </CardDetails>
                </CardContent>
              </Card>
            ))}
          </CardGrid>
        ) : (
          <NoShowsMessage>{getNoShowsMessage(filter)}</NoShowsMessage>
        )}
      </Container>
    </ShowsWrapper>
  );
}

export default UpcomingShows;
