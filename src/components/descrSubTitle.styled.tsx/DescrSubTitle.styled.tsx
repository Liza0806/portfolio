import styled from "styled-components";
import { MyTheme } from "../../styles/Theme.styled";
import { font } from "../../styles/Common";

export const DescrSubTitile = styled.p`
${font({ weight: 400, Fmax:32, Fmin: 20, lineHeight: 1})}
  color: ${MyTheme.colors.light.lightContent};
  display: flex;
 justify-content: center;
 text-align: center;
  margin-bottom: 110px;
`