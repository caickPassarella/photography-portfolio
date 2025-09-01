import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import {
  Nav,
  NavList,
  NavItem,
  Logo,
  IconWrapper,
  StyledNavLink,
} from "./styles";

export const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <Nav>
      <IconWrapper>
        <FaInstagram cursor={"pointer"} size={25} color="white" />
      </IconWrapper>
      <IconWrapper onClick={() => setIsMobileOpen(!isMobileOpen)}>
        <GiHamburgerMenu cursor={"pointer"} size={25} color="white" />
      </IconWrapper>
      <NavList>
        <NavItem>
          <StyledNavLink to="/">Home</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/">Gallery</StyledNavLink>
        </NavItem>
      </NavList>
      <Logo>Caick Passarella</Logo>
      <NavList>
        <NavItem>
          <StyledNavLink to="/">About me</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/">Contact</StyledNavLink>
        </NavItem>
      </NavList>
      {/* <FaInstagram cursor={"pointer"} size={25} color="white" /> */}
    </Nav>
  );
};
