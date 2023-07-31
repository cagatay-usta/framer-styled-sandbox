import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"


const Navbar = styled.nav`
  height: 60px;
  background-color: rgba(0, 0, 0, 0.084);
  backdrop-filter: drop-shadow(4px 4px 4px black);
  padding: 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItems = styled.div``;

const NavbarLink = styled(NavLink)`
  color: #fff;
  padding: 1rem;
  text-decoration: none;
`
const Logo =styled(Link)`
  color: #fff;
  padding-left: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;



const Header = () => {
  return (
    <Navbar>
      <Logo to="/">Animal</Logo>
      <NavItems>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/services">Services</NavbarLink>
      </NavItems>

    </Navbar>
  )
}

export default Header