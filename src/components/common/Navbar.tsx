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

interface NavLinks {
  name: string;
  href: string;
}

const navigationLinks: NavLinks[] = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/" },
  { name: "About", href: "/" },
  { name: "Contact", href: "/" },
];

export const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <Nav>
      <IconWrapper>
        <FaInstagram cursor={"pointer"} size={25} color="white" />
      </IconWrapper>
      <Logo>Caick Passarella</Logo>
      <IconWrapper onClick={() => setIsMobileOpen(!isMobileOpen)}>
        <GiHamburgerMenu cursor={"pointer"} size={25} color="white" />
      </IconWrapper>
      <NavList>
        {navigationLinks.map((link) => (
          <NavItem key={link.name}>
            <StyledNavLink to={link.href}>{link.name}</StyledNavLink>
          </NavItem>
        ))}
        <FaInstagram cursor={"pointer"} size={25} color="white" />
      </NavList>
    </Nav>
  );
};
