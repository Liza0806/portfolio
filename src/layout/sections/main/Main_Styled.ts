import styled from "styled-components";
import { MyTheme } from "../../../styles/Theme.styled";
import { font } from "../../../styles/Common";

export const SpanForAccentStyled = styled.span`
  background: linear-gradient(#13b0f5, #e70faa);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
`;

export const PhotoContainer = styled.div`
  max-width: 358px;
  max-height: 358px;
  width: 100%;
  flex-shrink: 2;
  background-image: linear-gradient(#13b0f5, #e70faa);
  clip-path: circle(50% at 50% 50%);
  display: flex;
  align-items: center;
  justify-content: center;

`
export const MyPhotoStyled = styled.img`
  width: 95%;
  clip-path: circle(50% at 50% 50%);
  margin: 10px;
`;
export const StSection = styled.div`
background-color: #cfe7f1;
`

export const HelloText = styled.p`
${font({ weight: 700, Fmax:58, Fmin: 26, lineHeight: 1.2})};
  color: ${MyTheme.colors.light.colorsHeading}
` 
