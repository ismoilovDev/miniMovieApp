import styled from "styled-components";

export const DescriptionBox = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   flex-direction: column;
   padding: 2.5rem 0;
   .image_content {
      max-width: 250px;
      padding-right: 1rem;
      img {
         width: 100%;
         border-radius: 10px;
      }
   }
   .text_content {
      padding-left: 0;
      &_head {
         li {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding-bottom: 10px;
            @media (min-width: 768px) {
               margin-bottom: 15px;
            }
            span {
               color: #8f8f8f;
               margin-right: 10px;
               font-weight: 500;
               font-size: 3vw;
               @media (min-width: 420px) {
                  font-size: 14px;
               }
            }
            p {
               display: flex;
               flex-wrap: wrap;
               align-items: center;
               span {
                  padding: 5px;
                  background-color: #1F1F1F;
                  margin: 5px;
                  color: #fff;
                  border-radius: 5px;
               }
            }
         }
      }
      @media (min-width: 992px) {
         padding-left: 1rem;
      }
   }
   .dscr {
      margin-top: 10px;
   }
   @media (min-width: 768px) {
      flex-direction: row;
   }
`