import React from "react";
import styled from "styled-components";
import { MyTheme } from "../../styles/Theme.styled";


type MenuPropsType = {
fontFamily?: string
weight?: number
fontSize?: string
lineH?: number
color?: string
margin?: string
direction?: string
}

export function Menu(props: MenuPropsType) {
  return (
    <MenuStyled 
    margin={props.margin}
    fontFamily={props.fontFamily}
    fontSize={props.fontSize}
    weight={props.weight}
    lineH={props.lineH}
    color={props.color}
    direction={props.direction}

    >
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">About</a>
      </li>
      <li>
        <a href="">Tech Stack</a>
      </li>
      <li>
        <a href="">Projects</a>
      </li>
      <li>
        <a href="">Contacts</a>
      </li>
    </MenuStyled>
  );
}

const MenuStyled = styled.ul<MenuPropsType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props)=> props.direction || "row"};
  padding: 0;
  max-width: 610px;
  width: 100%;
  margin: ${(props) => props.margin || "auto"};
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
`;
