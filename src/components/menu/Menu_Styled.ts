import styled from "styled-components";
import { MenuPropsType } from "./Menu";
import { MyTheme } from "../../styles/Theme.styled";

export const MenuStyled = styled.ul<MenuPropsType>`
  display: flex;
  justify-content:  ${(props)=> props.justify || "space-between"};
  align-items: center;
  flex-direction: ${(props)=> props.direction || "row"};
  padding: 0;
  max-width: 610px;
  width: 100%;
  margin: ${(props) => props.margin || "auto"};
  flex-wrap: ${(props) => props.wrap || "wrap"};
  gap: ${(props) => props.gap || "20px"};

  a {
    text-decoration: none;
    font-family: ${(props) => props.fontFamily || "DM Sans"};
    font-weight:  ${(props) => props.weight || 500 };
    font-size:  ${(props) => props.fontSize || "20px"};
    line-height:  ${(props) => props.lineH || 1.3};
    color:  ${(props) => props.color || `${MyTheme.colors.light.lightContent}`};
  }

  li {
    list-style: none;

  }

  @media ${MyTheme.media.tablet} {
   justify-content: center;

}
`;
