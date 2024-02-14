import React from "react";
import spriteSvg from "../../assets/images/spriteSvg.svg";
import styled from "styled-components";
import { MyTheme } from "../../styles/Theme.styled";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  stroke?: string;
};

export function Icon(props: IconPropsType) {
  return (
    <IconStyled
      width={props.width || "88"}
      height={props.height || "88"}
      viewBox={props.viewBox || "0 0 88 88"}
      fill={props.fill || "none"}
      stroke={props.stroke || "none"}
    >
      <use xlinkHref={`${spriteSvg}#${props.iconId}`}></use>
    </IconStyled>
  );
}
const IconStyled = styled.svg`
  &:hover,
  &:focus {
    fill: ${MyTheme.colors.light.hoverMenuItems};
  }
`;
