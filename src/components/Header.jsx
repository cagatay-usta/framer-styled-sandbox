import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"


const Navbar = styled.nav`
  height: 60px;
  background-color: #000;
  padding: 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItems = styled.div`
  
`
const Logo =styled(Link)``;



const Header = () => {
  return (
    <Navbar>
      <Logo to="/">Animal</Logo>
      <NavItems>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
      </NavItems>

    </Navbar>
  )
}

export default Header