import styled, { css } from "styled-components";
import { MyTheme } from "../../styles/Theme.styled";

export const MobileNav = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  position: fixed;
  background-color: ${MyTheme.colors.light.workAndStudyStatusBorder};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
    `}
`;
// <isOpen: boolean>
export const BurgerBtn = styled.button<{ isOpen: boolean }>`
  position: fixed;
  z-index: 9;
  top: 20px;
  right: 20px;
  width: 64px;
  height: 50px;
  display: none;
  border-radius: 20%;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0 6px;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
       width: 50px;
    `}
  span {
    display: block;
    z-index: 9;
    width: 50px;
    height: 2px;
    border-radius: 50%;
    background-color: ${MyTheme.colors.light.lightContent};

    position: absolute;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `};
    &::before {
      content: "";
      display: block;
      z-index: 9;
      width: 50px;
      height: 2px;
      border-radius: 50%;
      background-color: ${MyTheme.colors.light.lightContent};

      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(4px) translateX(-4px);
        `}
    }
    &::after {
      content: "";
      display: block;
      z-index: 9;
      width: 50px;
      height: 2px;
      border-radius: 50%;
      background-color: ${MyTheme.colors.light.lightContent};

      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(-4px) translateX(-4px);
        `}
    }
  }
  @media ${MyTheme.media.tablet} {
    display: block;
  }
`;
