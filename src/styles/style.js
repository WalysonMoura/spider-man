import styled from "styled-components";
import { Colors, fontSize, fontWeight } from "../styles/config";
export const Content = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;
export const Principal = styled.section`
  background-color: ${Colors.branco};
  position: relative;
  width: 100%;
  height: 95vh;
  background-image: url("/predios.svg");

  background-position: bottom center;
  background-repeat: no-repeat;

  background-size: contain;
  display: grid;
  place-items: center;

  h1,
  .img1,
  .img2,
  .img3 {
    position: absolute;
    top: 0;
  }
  .img1 {
    left: 0;
  }
  .img2 {
    right: 0;
  }
  .spiderImage2 {
    display: none;
  }

  h1 {
    @font-face {
      font-family: Gilc;
      src: url(/Fonts/Gilc.ttf);
    }
    top: 6rem;
    font-family: Gilc;
    font-size: ${fontSize.title};
    font-weight: ${fontWeight.title};
  }

  @media (max-width: 768px) {
    background-size: auto;

    background-position: bottom center;

    h1 {
      font-size: 6.5rem;
      top: 7rem;
    }
    .spiderImage1 {
      display: none;
    }
    .spiderImage2 {
      display: block;
    }
    .img3 {
      top: 4rem;
     right: 0;
    }
  }
`;
export const Historia = styled.section`
  width: 100%;
  background-color: ${Colors.preto};

  .content {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 8rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    div {
      width: 100%;
      height: auto;
      display: grid;
      grid-column-gap: 2rem;

      p {
        padding-top: 2rem;
        font-size: ${fontSize.describre};
        font-weight: ${fontWeight.describre};
        text-align: center;
        color: ${Colors.branco};
      }
    }

    .hq {
      grid-template-columns: 1fr 1.5fr;
    }
    .stan {
      grid-template-columns: 1.5fr 1fr;
    }
  }

  @media (max-width: 768px) {
    .content {
      div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        p {
          font-size: 1.25rem;
        }
      }
      .stan {
        flex-direction: column-reverse;
      }
    }
  }
`;

export const Filmes = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
  background-color: ${Colors.branco};
`;
