import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { ReactComponent as IconCamera } from "../../images/iconCamera.svg";
import { ReactComponent as IconSearch } from "../../images/iconSearch.svg";

export const NavigationStyled = styled.nav`
  background-color: ${({ theme }) => theme.color.black};
  padding: 0 16px;
  display: flex;
  align-items: center;
  height: 94px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 142px;
    min-width: 320px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1368px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: grid;
    padding-top: 24px;
    gap: 24px;
    justify-content: center;
  }
`;

export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 24px;
  }
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 8px;
  }
`;
export const LogoIcon = styled(IconCamera)`
  height: 40px;
  width: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 17px;
    width: 17px;
  }
`;

export const LogoTitle = styled.h1`
  color: ${({ theme }) => theme.color.white};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: -1.5px;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
    letter-spacing: -0.5px;
  }
`;

export const NavItemList = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;
  padding: 0;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 12px;
  }
`;

export const NavItem = styled.li`
  min-width: 102px;
  min-height: 48px;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    min-width: 70px;
    min-height: 34px;
  }
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName: "active",
}))`
  color: ${({ theme }) => theme.color.white};
  align-content: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  text-decoration: none;
  text-transform: uppercase;
  padding: 8px 24px;
  border-radius: 24px;
  cursor: pointer;
  transition: background-color 0.3s;

  &.active {
    border: 1px solid ${({ theme }) => theme.color.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    padding: 8px 12px;
    border-radius: 29px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 33px;
  width: 432px;
  height: 48px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 12px 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 288px;
    height: 44px;
    gap: 8px;
    padding: 14px 16px;
    margin-bottom: 16px;
  }
`;

export const SearchIcon = styled(IconSearch)`
  height: 24px;
  min-width: 24px;
  color: ${({ theme }) => theme.color.darkergrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 16px;
    width: 16px;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;
