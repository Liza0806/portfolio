import styled from "styled-components";
import { MyTheme } from "../../styles/Theme.styled";

export const DesctopNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  padding-top: 40px;
 ul > li {
  &:hover,
  &:focus
   {
    color: ${MyTheme.colors.light.desctopHoverMenutems}
  }
 }

  /* position: sticky;
  top:0;
  left: 0;
  right:0;
  z-index: 9; */

  @media ${MyTheme.media.landscape} {
    display: none;
  }

`;