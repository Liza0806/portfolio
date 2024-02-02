import React from "react";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/flexWrapper/FlexWrapper";
import styled from "styled-components";
import { SpanForAccentStyled } from "../sections/main/Main";
import { IconSet } from "../../components/iconSet/IconSet";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/container/Container.styled";
import { MyTheme } from "../../styles/Theme.styled";
export function Footer() {
  return (
    <Container>
    <StyledFooter>
      <FlexWrapper justify="flex-end" margin="0 0 40px 0">

          <a href="#">+91 12345 09876</a>
          <a href="">info@example.com</a>
    
        <IconSet fill={MyTheme.colors.light.solidSubTitle}/>
      </FlexWrapper>

      <HrStyled />
      <FlexWrapper  justify="space-between" margin="40px 0 0 0">

        <Menu margin="0 auto 0 0"/>
        <small>Designed and built by Pavan MG with <SpanForAccentStyled>Love & Coffee</SpanForAccentStyled> </small>
        </FlexWrapper>
    
    
    </StyledFooter>
    </Container>
  );
}

const StyledFooter = styled.footer`
padding: 40px 0;
a {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.44;
  color: ${MyTheme.colors.light.solidSubTitle};
}
a + a {
  margin-left: 30px;
}

`
const HrStyled = styled.hr`
  height: 2px;
  background-color:  ${MyTheme.colors.light.lightContent};
`