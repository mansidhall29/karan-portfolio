import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin-top: 5rem;
  padding: 2rem 1rem;
  background-size: 200% 200%; /* Necessary for the animation */
  animation: gradientAnimation 10s ease infinite;
  color: white; /* Ensures text is readable */
  text-align: center;

  /* Keyframe animation for dynamic background */
  @keyframes gradientAnimation {
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

export const Image = styled.img`
  max-width: 200px;
  margin: 0 auto;
  margin-bottom: 1rem;
  border-radius: 100px;
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: -2rem;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  min-width: 100px;
  margin-bottom: 2rem;
`;

export const TechImg = styled.img`
  height: 40px;
  width: 40px;
  padding-bottom: 5px;
`;

export const TechName = styled.div`
  font-size: 14px;
`;
