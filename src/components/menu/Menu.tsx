import React from "react";
import styled from "styled-components";

type MenuPropsType = {
fontFamily?: string
weight?: number
fontSize?: string
lineH?: string
color?: string
}

export function Menu(props: MenuPropsType) {
  return (
    <MenuStyled>
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
  gap: 20px;
  margin:0;
    padding: 0
  a {
    text-decoration: none;
    font-family: ${(props) => props.fontFamily || "DM Sans"};
    font-weight:  ${(props) => props.weight || 500 };
    font-size:  ${(props) => props.fontSize || "20px"};
    line-height:  ${(props) => props.lineH || "26"};
    color:  ${(props) => props.color || "#666666"};
    
  }

  li {
    list-style: none;

  }
`;
