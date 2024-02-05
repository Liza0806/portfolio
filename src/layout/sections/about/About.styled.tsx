import styled from "styled-components";
import { MyTheme } from "../../../styles/Theme.styled";
import { font } from "../../../styles/Common";

export const AboutText = styled.p`

${font({ weight: 400, Fmax:20, Fmin: 16, lineHeight: 1.44})};
    color: ${MyTheme.colors.light.lightContent}
`