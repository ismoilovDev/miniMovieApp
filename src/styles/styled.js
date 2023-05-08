import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   padding: 0 1rem;
   @media (min-width: 420px) {
      padding: 0 2rem;
   }
   @media (min-width: 768px) {
      width: 90%;
      margin: 0 auto;
   }
   @media (min-width: 1200px) {
      width: 85%;
   }
`

export const Wrap = styled.div`
   position: relative;
   width: 100%;
   min-height: 600px;
   padding: 3rem 2rem;
   display: flex;
   justify-content: flex-end;
   background-color: ${props => props.red};
   background-image: linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 30%, rgba(31.5, 31.5, 31.5, 0.84) 100%), url(${props => props.bg_url});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   @media (min-width: 992px) {
      padding: 3rem;
   }
   @media (min-width: 1200px) {
      padding: 3rem 6rem 3rem 3rem;
   }
`

export const CaruselBox = styled.div`
   width: 100%;
   padding: 2rem 0;
`