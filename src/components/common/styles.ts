import styled from "styled-components";
import { heroImage } from "../../assets/images";
import { NavLink as RouterNavbLink } from "react-router-dom";
import { media } from "../../utils/media";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center center;
  height: 100vh;
`;

export const ImgOverlay = styled.div`
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

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.8rem;
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

export const Logo = styled.h1`
  color: #ffffff;
  font-size: 1.2rem;
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
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;
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
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  line-height: 115%; /* 3.45rem */
  letter-spacing: 0.27rem;
  ${media.tablet`
    font-size: 2.5rem;
  `}
  ${media.mobile`
    font-size: 2rem;
  `}
  ${media.mobileS`
    width: 80%;
    line-height: 100%; /* 3.45rem */
  `}
`;

export const Subtitle = styled.h2`
  color: #ffffff;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: 115%; /* 1.4375rem */
  letter-spacing: 0.1125rem;
  padding-top: 0.1rem;

  ${media.tablet`
    font-size: 1rem;
  `}
  ${media.mobile`
    font-size: 0.8rem;
  `}
`;

export const Subtext = styled.p`
  color: #ffffff;
  text-align: justify;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 129%;
  letter-spacing: 0.04063rem;
  width: 27rem;
  padding-left: 3rem;
  padding-bottom: 3rem;
  white-space: pre-wrap;
  ${media.tablet`
    font-size: 0.8rem;
    width: 22rem;
  `}
  ${media.mobile`
    font-size: 0.8rem;
    padding: 2rem;
    width: 22rem;
  `}
  ${media.mobileS`
    width: 20rem;
  `}
`;
