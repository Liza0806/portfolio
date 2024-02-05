import React from "react";
import { SubTitleStyled } from "../../../components/subTitle/SubTitle";
import { ProjectCard } from "../../../components/projectCard/ProjectCard";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/flexWrapper/FlexWrapper";
import proj1 from "../../../assets/images/proj1.webp";
import proj2 from "../../../assets/images/proj2.webp";
import proj3 from "../../../assets/images/proj3.webp";
import proj4 from "../../../assets/images/proj4.webp";
import proj5 from "../../../assets/images/proj5.webp";
import proj6 from "../../../assets/images/proj6.webp";
import { Container } from "../../../components/container/Container.styled";
import { DescrSubTitile } from "../../../components/descrSubTitle.styled.tsx/DescrSubTitle.styled";

export function Projects() {
  return (  
  <section>
    <Container>
      <SubTitleStyled
       Fmax={48} 
       Fmin={34} 
       lineHeight={0.9}
        textAlign="center"
        margin="49px"
      >
        Projects
      </SubTitleStyled>
      <DescrSubTitile>Things I’ve built so far</DescrSubTitile>
      <FlexWrapper
        wrap="wrap"
        rowG="34px"
        columnG="34px"
        direction="space-around"
        justify="center"
      >
        <ProjectCard
          photo={proj1}
          title="Project Tile goes here"
          description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          technologies="HTML , JavaScript, SASS, React"
        />
        <ProjectCard
          photo={proj2}
          title="Project Tile goes here"
          description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          technologies="HTML , JavaScript, SASS, React"
        />
        <ProjectCard
          photo={proj3}
          title="Project Tile goes here"
          description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          technologies="HTML , JavaScript, SASS, React"
        />

        <ProjectCard
          photo={proj4}
          title="Project Tile goes here"
          description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          technologies="HTML , JavaScript, SASS, React"
        />
        <ProjectCard
          photo={proj5}
          title="Project Tile goes here"
          description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          technologies="HTML , JavaScript, SASS, React"
        />
        <ProjectCard
          photo={proj6}
          title="Project Tile goes here"
          description="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          technologies="HTML , JavaScript, SASS, React"
        />
      </FlexWrapper> 
      </Container>
    </section>
   
  );
}
