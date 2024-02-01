import React from "react";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/flexWrapper/FlexWrapper";
import styled from "styled-components";
import { SpanForAccentStyled } from "../sections/main/Main";
import { IconSet } from "../../components/iconSet/IconSet";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/container/Container.styled";

export function Footer() {
  return (
    <Container>
    <StyledFooter>
      <FlexWrapper justify="flex-end">

          <a href="#">+91 12345 09876</a>
          <a href="">info@example.com</a>
    
        <IconSet fill="#42446E"/>
      </FlexWrapper>

      <hr />
      <FlexWrapper  justify="space-around">

        <Menu/>
        </FlexWrapper>
        <small>Designed and built by Pavan MG with <SpanForAccentStyled>Love & Coffee</SpanForAccentStyled> </small>
    
    </StyledFooter>
    </Container>
  );
}

const StyledFooter = styled.footer`
padding: 40px 0;

`