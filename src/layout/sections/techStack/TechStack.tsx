import React from "react";
import { SubTitleStyled } from "../../../components/subTitle/SubTitle";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/flexWrapper/FlexWrapper";
import { Container } from "../../../components/container/Container.styled";
import { DescrSubTitile } from "../../../components/descrSubTitle.styled.tsx/DescrSubTitle.styled";

export function TechStack() {
  const iconCommonProps = {
    width: "120",
    height: "120",
    viewBox: "0 0 120 120",
  };

  const techIcons = [
    "html",
    "css",
    "js",
    "react",
    "vector",
    "bootstrap",
    "tailwind",
    "sass",
    "git",
    "greensock",
    "vscode",
    "github1",
  ];
  return (
    
    <section>
      <Container>
      <SubTitleStyled Fmax={48} Fmin={34} lineHeight={0.9} margin="49px">
        My Tech Stack
      </SubTitleStyled>

      <DescrSubTitile> Technologies I’ve been working with recently</DescrSubTitile>
      <FlexWrapper as = {"ul"}  
      justify= "center" 
      align="center" 
      columnG="94px" 
      rowG="105px"
      wrap="wrap">
        {techIcons.map((iconId: string) => (
          <li key={iconId}>
            <Icon iconId={iconId} {...iconCommonProps} />
          </li>
        ))}
      </FlexWrapper> </Container>
    </section>
   
  );
}



{
  /* <li><Icon iconId="html"
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
    /></li> */
}
