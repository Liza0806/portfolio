import React from "react";
import styled from "styled-components";

import MainPhotoPath from "../../../assets/images/alterEgo.webp";
import { FlexWrapper } from "../../../components/flexWrapper/FlexWrapper";
import { Container } from "../../../components/container/Container.styled";
import { MyTheme } from "../../../styles/Theme.styled";

export function Main() {
  return (
 
    <section >  
      <Container>
      <h1 hidden>Frontend developer resume</h1>
      <FlexWrapper justify="space-around" align="center" >
        <HelloText>
          Hi 👋,
          <br />
          My name is <br />
          <SpanForAccentStyled> Pavan MG </SpanForAccentStyled> <br />I build
          things for web
        </HelloText>

        <PhotoContainer>
          <MyPhotoStyled src={MainPhotoPath} alt="My photo"></MyPhotoStyled>
        </PhotoContainer>
      </FlexWrapper>
      </Container>
    </section>
    
  );
}

// сохрани градиент в переменную

export const SpanForAccentStyled = styled.span`
  background: linear-gradient(#13b0f5, #e70faa);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
`;
export const HelloText = styled.p`
  font-weight: 700;
  font-size: 58px;
  line-height: 1.21;
  color: ${MyTheme.colors.light.colorsHeading}

`

const MyPhotoStyled = styled.img`
  width: 94%;
  clip-path: circle(50% at 50% 50%);
`;
const PhotoContainer = styled.div`
  max-width: 358px;
  max-height: 358px;
  width: 100%;
  height:100%;
  background-image: linear-gradient(#13b0f5, #e70faa);
  clip-path: circle(50% at 50% 50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StSection = styled.div`
background-color: #cfe7f1;
`