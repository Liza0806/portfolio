import React from "react";
import { SubTitleStyled } from "../../components/SubTitle";
import { Icon } from "../../components/icon/Icon";
import styled from "styled-components";

export function TechStack () {
    const iconCommonProps = {
        width: "120",
        height: "120",
        viewBox: "0 0 120 120",
      };
      
      const techIcons = [
        "html", "css", "js", "react", "vector",
        "bootstrap", "tailwind", "sass", "git",
        "greensock", "vscode", "github"
      ];
    return (
        <section>

<SubTitleStyled 
size="48px" 
lineHeight="26px" 
letter="0"
margin="49px"
>My Tech Stack</SubTitleStyled>

<p> Technologies I’ve been working with recently</p>
<TechStackList>
{techIcons.map(iconId => (
          <li key={iconId}>
            <Icon
              iconId={iconId}
              {...iconCommonProps}
            />
          </li>
        ))}
</TechStackList>
        </section>

    )
}

const TechStackList = styled.ul`
display: flex;
justify-content: center;
align-items: center;
row-gap: 105px;
column-gap: 94px;
flex-wrap: wrap;
margin: auto;

li{
list-style: none;}

`

{/* <li><Icon iconId="html"
    {...iconCommonProps}
    /></li>
    <li><Icon iconId="css"
    {...iconCommonProps}
    /></li>
    <li><Icon iconId="js"
    {...iconCommonProps}
    /></li>
    <li><Icon iconId="react"
    {...iconCommonProps}
    /></li>

    <li><Icon iconId="vector"
    {...iconCommonProps}
    /></li>
    <li><Icon iconId="bootstrap"
    {...iconCommonProps}
    /></li>
    <li><Icon iconId="tailwind"
    {...iconCommonProps}
    /></li>
    <li><Icon iconId="sass"
    {...iconCommonProps}
    /></li>

    <li><Icon iconId="git"
    {...iconCommonProps}
    /></li>
    <li><Icon iconId="greensock"
    {...iconCommonProps}
    /></li>
    <li><Icon iconId="vscode"
    {...iconCommonProps}
    /></li>
    <li><Icon iconId="github"
    {...iconCommonProps}
    /></li> */}