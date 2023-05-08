import styled from "styled-components";

export const Poster = styled.div`
   width: 300px;
   display: none;
   border-radius: 7px;
   margin-top: 2rem;
   @media (min-width: 1200px) {
      display: block;
   }
   img {
      width: 100%;
      border-radius: 7px;
   }
`