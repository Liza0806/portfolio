import React from "react";
import { Icon } from "./icon/Icon";
import styled from "styled-components";
import { FlexWrapper } from "./FlexWrapper";


type ProjectCardPropsType = {
    photo?: string
    title?: string
    description?: string
}

export function ProjectCard (props: ProjectCardPropsType) {
    return(
        <ProjectCardStyled>
            <img src={props.photo} alt="project"></img>
            <div>
            <CardTitleStyled>{props.title}
            Project Tile goes here
            </CardTitleStyled>
            <CardDscrStyled>{props.description}
            This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content
            </CardDscrStyled>
            <ParagraphStyled> <span>Tech stack :</span> HTML , JavaScript, SASS, React</ParagraphStyled>
            <FlexWrapper justify="space-around">
  <div>
    <Icon iconId="chain" stroke="#000" width="20" height="20" viewBox="0 0 20 20" />
    <ProjectLinkStyled href="#">Live Preview</ProjectLinkStyled>
  </div>
  <div>
    <Icon iconId="github" fill="#000" width="20" height="20"  />
    <ProjectLinkStyled href="#">View Code</ProjectLinkStyled>
  </div>
</FlexWrapper>
            </div>
            
           
        </ProjectCardStyled>
    )
}

const ProjectCardStyled = styled.div`
max-width: 375px;
border-radius: 20px;
overflow: hidden;
box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);

img{
 
 width: 375px;
 height: 260px;  
 object-fit: cover; 
 display: block; 
}
> div{
    padding: 30px 30px 25px 30px ;
}

`
const CardDscrStyled = styled.p`
  font-family: "Poppins";
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  color: #666666;
`;
const CardTitleStyled = styled.h3`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 28px;
  line-height: 26px;
  text-align: center;
  color: #000000; 
`;
const ParagraphStyled = styled.p`
  font-family: "Poppins";
  font-weight: 300;
  font-size: 14px;
  line-height: 26px;
  color: #666666; 

  span{
    font-weight: 400;
    font-size: 16px;
    color: #42446E; 
  }
`;
const ProjectLinkStyled = styled.a`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #000000;

`;




