import styled from "styled-components";

export const Nav = styled.nav`
   position: fixed;
   width: 100%;
   height: 70px;
   display: flex;
   align-items: center;
   left: 0;
   top: 0;
   padding: 0 1rem;
   background-color: ${props => props.scrolled ? 'rgb(31, 29, 36)' : 'transparent'};
   transition: background-color 0.1s ease 0s;
   z-index: 10;
   @media (min-width: 420px) {
      padding: 0 2rem;
   }
   @media (min-width: 768px) {
      padding: 0 3rem;
   }
   @media (min-width: 1200px) {
      padding: 0 4rem;
   }
`

export const Logo = styled.img`

`
export const NavLinks = styled.div`
   display: flex;
   margin-left: 20px;
      a {
         position: relative;
         display: inline-block;
         color: rgba(255, 255, 255, 0.7);
         font-weight: 400;
         font-size: 3.5vw;
         z-index: 1;
         margin: 0 15px;
         &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -5px;
            left: 0;
            background-color: #fff;
            z-index: -1;
            transition: transform 0.25s ease-in;
            transform: scaleX(0);
            transform-origin: right;
            // opacity: 0;
         }

         &:hover {
            color: #fff;
            &::after {
               transform: scaleX(1);
               // opacity: 1;
               transform-origin: left;
            }

         }
         @media (min-width: 360px) {
            font-size: 14px;
         }
         @media (min-width: 556px) {
            font-size: 1rem;
         }
      }

      a.active {
         &::after {
            transform: scaleX(1);
            opacity: 1;
         }
      }
`