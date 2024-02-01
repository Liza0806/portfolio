import styled from "styled-components";

type SubTitlePropsType = {
    font?: string
    weight?: string
    size?: string
    lineHeight?: string
    letter?: string
    color?: string
    textAlign?: string;
    margin?: string;
}


export const SubTitleStyled = styled.h2<SubTitlePropsType>`
font-family: ${props => props.font || "Poppins"};
font-weight: ${props => props.weight || "700"};
font-size: ${props => props.size || "42px"};
line-height: ${props => props.lineHeight || "52px"};
letter-spacing: ${props => props.letter || "-0.4px"};
color: ${props => props.color || "#42446E"};
text-align:${props => props.textAlign || "center"} ;
margin:${props => props.margin || "38px 0"} ;
`
