import React from "react";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../flexWrapper/FlexWrapper";
import {
  ProjectCardStyled,
  CardTitleStyled,
  CardDscrStyled,
  ParagraphStyled,
  ProjectLinkStyled,
  LinkWrapper,
} from "./ProjectCard.styled";
import styled from "styled-components";

type ProjectCardPropsType = {
  photo?: string;
  title?: string;
  description?: string;
  technologies?: string;
};

export function ProjectCard(props: ProjectCardPropsType) {
  return (
    <ProjectCardStyled>
      <img src={props.photo} alt="project"></img>
      <div>
        <CardTitleStyled>{props.title}</CardTitleStyled>

        <CardDscrStyled>{props.description}</CardDscrStyled>

        <ParagraphStyled>
          <span>Tech stack :</span> {props.technologies}
        </ParagraphStyled>

        <FlexWrapper justify="space-around">
          <LinkWrapper>
            <Icon
              iconId="chain"
              stroke="#000"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            />
            <ProjectLinkStyled href="#">Live Preview</ProjectLinkStyled>
          </LinkWrapper>
          <LinkWrapper>
            <Icon 
              iconId="github" 
              fill="#000" 
              width="20" 
              height="20" />
            <ProjectLinkStyled href="#">View Code</ProjectLinkStyled>
          </LinkWrapper>
        </FlexWrapper>
      </div>
    </ProjectCardStyled>
  );
}
