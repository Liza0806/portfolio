import React from "react";
import { Logo } from "../../components/logo/Logo";
import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { Icon } from "../../components/icon/Icon";
import { IconSet } from "../../components/iconSet/IconSet";
import { Container } from "../../components/container/Container.styled";

export function Header() {
  return (
    <Container>
    <HeaderStyled>
      <NavStyled>
        <Logo />
        <Menu />
        <IconSet fill="#666666"/>
      </NavStyled>
    </HeaderStyled>
    </Container>
  );
}

const HeaderStyled = styled.header`
  background-color: #ffd8d8;
`;
const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
