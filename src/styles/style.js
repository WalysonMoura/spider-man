import styled from "styled-components";
import { Colors, fontSize, fontWeight } from "../styles/config"
export const Content = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
`
export const Principal = styled.section`
     background-color: ${Colors.branco};
    width: 100%;

    .predios{
        width: 100%;
    }

`
export const Historia = styled.section`
  width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    div{
        display: flex;
        align-items: center;
        gap: .5rem;

        p{
            font-size: ${fontSize.describre};
            font-weight: ${fontWeight.describre};
            text-align: center;
            color: ${Colors.branco};
        }
        
    }

    @media (max-width: 768px) {
        div{
            flex-wrap: wrap;
        }
        .stan{
            flex-direction: column-reverse;
        }   
    }

  
`

export const Filmes = styled.section`
   width: 100%;
   background-color: ${Colors.branco};
   border-top-left-radius: 40px;
border-top-right-radius: 40px;
`