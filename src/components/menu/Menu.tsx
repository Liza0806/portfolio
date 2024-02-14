import React from "react";
import styled from "styled-components";
import { MyTheme } from "../../styles/Theme.styled";
import { MenuStyled } from "./Menu_Styled";


export type MenuPropsType = {
fontFamily?: string
weight?: number
fontSize?: string
lineH?: number
color?: string
margin?: string
direction?: string
wrap?: string
gap?: string
justify?: string
padding?:string
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
    justify={props.justify}
    gap={props.gap}
    padding={props.padding}

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
