import styled from "styled-components";

export const Details = styled.div`
   position: absolute;
   left: 2rem;
   bottom: 10%;
   @media (min-width: 768px) {
      left: 3rem;
   }
   @media (min-width: 1200px) {
      left: 4rem;
   }
   h2 {
      font-size: 7vw;
      margin-bottom: 15px;
      @media (min-width: 420px) {
         font-size: 1.8rem;
      }
      @media (min-width: 992px) {
         font-size: 2.4rem;
      }
      @media (min-width: 992px) {
         font-size: 2.7rem;
      }
   }
`

export const Button = styled.button`
   display: inline-flex;
   -webkit-box-align: center;
   align-items: center;
   -webkit-box-pack: center;
   justify-content: center;
   position: relative;
   box-sizing: border-box;
   -webkit-tap-highlight-color: transparent;
   outline: 0px;
   border: 0px;
   margin: 0px 10px 0px 0px;
   cursor: pointer;
   user-select: none;
   vertical-align: middle;
   appearance: none;
   text-decoration: none;
   letter-spacing: 0px;
   font-size: 17px;
   font-family: inherit;
   text-transform: initial;
   padding: 6.25px 25px;
   line-height: 1;
   font-weight: 600;
   border-radius: 10px;
   color: rgb(255, 255, 255);
   background-color: rgb(82, 176, 56);
   transition: background-color 0.2s ease 0s;
   height: 50px;
`