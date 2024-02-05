import styled from "styled-components";
import { font } from "../../styles/Common";

type SubTitlePropsType = {
    font?: string
    weight?: string
    size?: string
    lineHeight?: number
    letter?: string
    color?: string
    textAlign?: string;
    margin?: string;
   Fmax?: number
   Fmin?: number
    
}


export const SubTitleStyled = styled.h2<SubTitlePropsType>`
 ${props => font({ Fmax: props.Fmax, Fmin: props.Fmin })};
font-family: ${props => props.font || "Poppins"};
font-weight: ${props => props.weight || "700"};

line-height: ${props => props.lineHeight || 1.2};
letter-spacing: ${props => props.letter || "-0.4px"};
color: ${props => props.color || "#42446E"};
text-align:${props => props.textAlign || "center"} ;
margin:${props => props.margin || "38px 0"} ;
`
