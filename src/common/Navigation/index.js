import {
  NavigationStyled,
  Wrapper,
  NavGroup,
  Logo,
  LogoIcon,
  LogoTitle,
  NavItemList,
  NavItem,
  StyledNavLink,
  SearchContainer,
  SearchIcon,
  Input,
} from "./styled";
import { toMovieList, toPeople } from "../../routes";

export const Navigation = () => {
  return (
    <NavigationStyled>
      <Wrapper>
        <NavGroup>
          <Logo to="/">
            <LogoIcon />
            <LogoTitle>Movies Browser</LogoTitle>
          </Logo>
          <NavItemList>
            <NavItem>
              <StyledNavLink to={toMovieList()}>
                Movies
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to={toPeople()}>
                People
              </StyledNavLink>
            </NavItem>
          </NavItemList>
        </NavGroup>
        <SearchContainer>
          <SearchIcon />
          <Input type="text" placeholder="Search for movies..." />
        </SearchContainer>
      </Wrapper>
    </NavigationStyled>
  );
};
