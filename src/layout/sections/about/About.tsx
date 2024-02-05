import React from "react";
import { WorkAndStudyPlace } from "../../../components/workAndStudyPlace/WorkAndStudyPlace";
import { SubTitleStyled } from "../../../components/subTitle/SubTitle";
import { Container } from "../../../components/container/Container.styled";
import { SectionAbout } from "../../../components/sectionAbout/SectionAbout.styled";
import { MyTheme } from "../../../styles/Theme.styled";
import { AboutText } from "./About.styled";
import { SquareAnimation } from "../../../components/animations/SquareAnimation.styled";

export function About() {
  return (
     <Container>
    <SectionAbout>
     
      <SubTitleStyled Fmax={48} Fmin={34} lineHeight={0.9} textAlign="start">About Me</SubTitleStyled>
      <AboutText>
        The Generator App is an online tool that helps you to export ready-made
        templates ready to work as your future website. It helps you to combine
        slides, panels and other components and export it as a set of static
        files: HTML/CSS/JS.
      </AboutText>
      <SubTitleStyled Fmax={48} Fmin={34} lineHeight={0.9} textAlign="start">Work Experience</SubTitleStyled>

      <ul>
        <WorkAndStudyPlace
          position="Junior Web Developer"
          company="Dr. Rajkumar’s Learning App"
          country="Bengaluru"
          time="Sep 2021 - Dec 2021"
          status="Full Time"
        />

        <WorkAndStudyPlace
          position="Web Development Intern"
          company="IonPixelz Web Solutions"
          country="Bengaluru"
          time="Sep 2021 - Dec 2021"
          status="Internship"
        />

        <WorkAndStudyPlace
          position="SEO / SEM Specialist"
          company="HAAPS"
          country="Bengaluru"
          time="Sep 2021 - Dec 2021"
          status="Internship"
        />
      </ul>
      <SubTitleStyled Fmax={48} Fmin={34} lineHeight={0.9} textAlign="start">Education</SubTitleStyled>
      <ul>
        <WorkAndStudyPlace
          position="Bachelor in Electronics & Communication"
          company="Bangalore Instutute of Technology"
          country="Bengaluru"
          time="Aug 2015 - Dec 2020"
          status="Full Time"
        />
      </ul>
      <SquareAnimation/>
     
    </SectionAbout>
    </Container>
  );
}
