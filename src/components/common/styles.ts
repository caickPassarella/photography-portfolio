import styled from "styled-components";
import { heroImage } from "../../assets/images";
import { NavLink as RouterNavbLink } from "react-router-dom";
import { media } from "../../utils/media";

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

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
  gap: 30px;
  ${media.laptop`
    padding: 0 0 4rem 4rem;
  gap: 25px;
    `}
  ${media.mobile`
    padding: 0 0 5rem 0;
    align-items: center;
    `}
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.8rem 6rem;
  ${media.laptop`
    padding: 2.5rem 4rem;
  `}
  ${media.tablet`
    padding: 2.5rem 2rem;
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
  ${media.laptop`
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

  ${media.laptop`
    font-size: 1.5rem;
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

  ${media.laptop`
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
    font-size: 3.5rem;
  `}
  ${media.mobile`
    font-size: 2rem;
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
  ${media.laptop`
  width: 34rem;
  font-size: 1.4rem;
  `}
  ${media.tablet`
    width: 22rem;
    font-size: 1.2rem;
  `}
  ${media.mobile`
      width: 18rem;
    font-size: 1rem;
  `}
`;

// Sample Gallery component
export const SampleGalleryContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const Image = styled.img`
  width: 50%;
`;

// Button
export const PrimaryButton = styled.button`
  font-family: "Roboto";
  line-height: 115%;
  letter-spacing: 0.15rem;
  font-size: 1rem;
  font-weight: 600;
  background: none;
  padding: 1rem;
  border: 1px solid #ffffff;
  color: #ffffff;
  width: 13rem;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #1f1f1fff;
  }
`;

export const SecondaryButton = styled.button`
  font-family: "Roboto";
  line-height: 115%;
  letter-spacing: 0.15rem;
  font-size: 1rem;
  font-weight: 600;
  background: none;
  padding: 1rem;
  border: 1px solid #1f1f1fff;
  color: #1f1f1fff;
  width: 13rem;
  cursor: pointer;
  &:hover {
    background-color: #292929ff;
    color: #ffffff;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;
