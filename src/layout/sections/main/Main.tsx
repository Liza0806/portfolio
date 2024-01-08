import React from "react";
import styled from "styled-components";

import MainPhotoPath from "../../../assets/images/alterEgo.webp";
import { FlexWrapper } from "../../../components/flexWrapper/FlexWrapper";

export function Main() {
  return (
    <section >
      <h1 hidden>Frontend developer resume</h1>
      <FlexWrapper justify="space-around">
        <p>
          Hi 👋,
          <br />
          My name is <br />
          <SpanForAccentStyled> Pavan MG </SpanForAccentStyled> <br />I build
          things for web
        </p>

        <PhotoContainer>
          <MyPhotoStyled src={MainPhotoPath} alt="My photo"></MyPhotoStyled>
        </PhotoContainer>
      </FlexWrapper>
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

const MyPhotoStyled = styled.img`
  width: 95%;
  border-radius: 50%;
`;
const PhotoContainer = styled.div`
  width: 200px;
  height: 200px;
  background-image: linear-gradient(#13b0f5, #e70faa);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StSection = styled.div`
background-color: #cfe7f1;
`