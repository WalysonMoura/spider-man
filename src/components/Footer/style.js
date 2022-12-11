import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;

  background-color: #0f0f0f;
  padding: 3rem 3rem 2rem;
  color: #f8f8f8;
  font-family: inherit;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  div {
    width: 100%;
    max-width: 900px;
    display: grid;
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    align-items: flex-start;

    .icons {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    nav {
      display: flex;
      align-items: flex-start;
      gap: 10rem;

      section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;

        h2 {
          font-weight: 700;
          font-size: 1rem;
        }

        div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
          p {
            font-weight: 100;
          }
        }
      }
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      nav{
        gap: 8rem;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 2rem 2rem 1rem;
  }
`;
export const Copy = styled.section`
  width: 100%;
  max-width: 900px;
  padding-top: 1rem;
  border-top: 1px solid #d5d5d5d2;
  text-align: center;
  font-weight: 100;
`;

export const Follow = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  h2{
    font-weight: 700;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
`;
