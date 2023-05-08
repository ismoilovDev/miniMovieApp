import { Link, NavLink } from 'react-router-dom';
import { Logo, Nav, NavLinks } from './styled';
import useScroll from '../../hooks/useScroll';
import logo from '../../assets/imgs/logo.png';

function Navbar() {
   const scrolled = useScroll();

   return (
      <Nav scrolled={scrolled}>
         <Link to={'/'}>
            <Logo src={logo} />
         </Link>
         <NavLinks>
            <NavLink
               exact='true'
               to={'/movies/1'}
               activeclassname="active"
            >
               Фильмы
            </NavLink>
            <NavLink
               exact='true'
               to={'/series/1'}
               activeclassname="active"
            >
               Сериалы
            </NavLink>
         </NavLinks>
      </Nav>
   )
}

export default Navbar