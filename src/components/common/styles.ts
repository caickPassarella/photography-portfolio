import styled from "styled-components";
import { heroImage } from "../../assets/images";
import { NavLink as RouterNavbLink } from "react-router-dom";
import { media } from "../../utils/media";

export const HeaderContainer = styled.header`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center center;
  height: 100vh;
`;

export const HeroContent = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${media.mobile`
    align-items: center;
  `}
`;

export const HeroTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 4rem 6rem;
  ${media.mobile`
    padding: 3rem;
    `}
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.8rem 6rem;
  ${media.tablet`
    padding: 2.5rem;
  `}
  ${media.mobile`
    padding: 1.5rem;
  `}
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.8rem;
  ${media.tablet`
    gap: 2.5rem;
  `}
  ${media.mobile`
    display: none;
  `}
`;

export const NavItem = styled.li`
  list-style: none;
  text-decoration: none;
`;

export const Logo = styled.p`
  color: #ffffff;
  font-size: 2rem;
  font-family: "Roboto Serif";
  font-style: normal;
  font-weight: 700;
  line-height: 115%;
  letter-spacing: 0.15rem;

  ${media.tablet`
    font-size: 0.9rem;
  `}
`;

export const IconWrapper = styled.div`
  display: none;

  ${media.mobile`
    display: flex;
  `}
`;

export const StyledNavLink = styled(RouterNavbLink)`
  text-decoration: none;
  color: #ffffff;
  font-family: "Roboto Serif";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 200;
  line-height: 115%;

  ${media.tablet`
    font-size: 1rem;
  `}

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  width: 50%;
  font-size: 6.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 115%; /* 3.45rem */
  letter-spacing: 0.27rem;
  ${media.desktop`
    font-size: 5.5rem;
  `}
  ${media.tablet`
    font-size: 4.5rem;
  `}
  ${media.mobile`
    font-size: 3rem;
    width: 100%;
  `}
  ${media.mobileS`
    font-size: 2rem;
    width: 100%;
  `}
`;

export const Subtext = styled.p`
  color: #ffffff;
  font-family: "Roboto Serif";
  text-align: justify;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 100;
  line-height: 129%;
  letter-spacing: 0.04063rem;
  width: 40rem;
  white-space: pre-wrap;
  ${media.tablet`
    font-size: 0.8rem;
    width: 22rem;
  `}
  ${media.mobile`
    font-size: 0.8rem;
    width: 22rem;
  `}
  ${media.mobileS`
    width: 20rem;
  `}
`;
