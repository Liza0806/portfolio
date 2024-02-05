import styled from "styled-components";
import { IconSet } from "../iconSet/IconSet";
import { Logo } from "../logo/Logo";
import { Menu } from "../menu/Menu";
import { MyTheme } from "../../styles/Theme.styled";

export function DesctopNavStyled() {
    return (     
        <DesctopNav>
          <Logo />
          <Menu margin="0 0 0 auto"/>
          <IconSet fill="#666666"
          margin="50px"/>
        </DesctopNav>
    );
  }
  const DesctopNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  top:0;
  left: 0;
  right:0;
  z-index: 9;

  @media ${MyTheme.media.tablet} {
    display:none;
  }

`;