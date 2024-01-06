import React from "react";
import { SubTitleStyled } from "../../components/SubTitle";
import { ProjectCard } from "../../components/ProjectCard";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import proj1 from '../../assets/images/proj1.webp'
import proj2 from '../../assets/images/proj2.webp'
import proj3 from '../../assets/images/proj3.webp'
import proj4 from '../../assets/images/proj4.webp'
import proj5 from '../../assets/images/proj5.webp'
import proj6 from '../../assets/images/proj6.webp'


export function Projects (){
    return (
        <section>
            <SubTitleStyled 
            size="48px" 
            lineHeight="26px" 
            letter="0"
            textAlign="center"
            margin="49px"
            >Projects</SubTitleStyled>
        <ProjectSectionDscr>
        Things I’ve built so far
        </ProjectSectionDscr>
        <FlexWrapper 
        wrap="wrap" 
        gap="34px" 
        direction="space-around" 
        justify="center">

        <ProjectCard photo={proj1}/>
        <ProjectCard photo={proj2}/>
        <ProjectCard photo={proj3}/>

        <ProjectCard photo={proj4}/> 
        <ProjectCard photo={proj5}/>
        <ProjectCard photo={proj6}/>

        </FlexWrapper>
        </section>
    )
}
const ProjectSectionDscr = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 32px;
  line-height: 26px;
  text-align: center;
  color:  #666666;
`;
