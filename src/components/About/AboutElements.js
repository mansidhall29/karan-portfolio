import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
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

  .BigCard {
    position: relative;
    padding: 40px;

    @media screen and (max-width: 768px) {
      padding: 20px;
    }
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  width: 300px;
  display: block;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 200px;
  }
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
