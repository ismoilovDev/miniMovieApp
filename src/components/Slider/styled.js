import styled from "styled-components";
import { Link } from 'react-router-dom';

export const View = styled(Link)`
   position: relative;
   width: 100%;
   height: 100%;
   background-color: darkgrey;
   opacity: 1;
   transform: opacity 0.3s linear;
   .view_drop {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 101%;
      background:
         linear-gradient(180deg, rgba(22, 21, 26, 0.82) 5.05%, rgba(22, 21, 26, 0) 31.31%),
         linear-gradient(0deg, #16151A -2%, rgba(22, 21, 26, 0) 48.02%),
         linear-gradient(89.65deg, rgba(7, 6, 14, 0.88) -0.74%, rgba(7, 6, 14, 0) 50.25%);
      z-index: 1;
      user-select: none;
   }
   .view_box {
      width: 100vw;
      height: 0;
      padding: 112% 20px 0;
      overflow: hidden;
      img {
         position: absolute;
         width: 100%;
         height: 100%;
         top: 0;
         left: 0;
         object-fit: cover;
      }

      @media (min-width: 600px) {
         padding: 40% 18px 0;
      }
   }

   .view_content {
      position: absolute;
      bottom: 12px;
      left: 10px;
      z-index: 2;
      @media (min-width: 992px) {
         left: 30px;
         bottom: 17px;
      }
      span {
         color: #fff;
         font-size: 3vw;
         font-weight: 500;
         letter-spacing: 1px;
         padding: 0 10px;
         @media (min-width: 420px) {
            font-size: 14px;
         }
      }
   }
`