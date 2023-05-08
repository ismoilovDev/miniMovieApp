import styled from "styled-components";
import useScroll from './../../hooks/useScroll';

const Wrap = styled.main`
   position: relative;
   width: 100%;
   padding-top: ${props => props.isMoviesPage ? '80px': '0'};
   @media (min-width: 992px) {
      padding-top: ${props => props.isMoviesPage ? '100px': '0'};
   }
`

const Main = ({ isMoviesPage, children }) => {
   const scrolled = useScroll();

   return (
      <Wrap scrolled={scrolled} isMoviesPage={isMoviesPage}>{children}</Wrap>
   )
}

export default Main