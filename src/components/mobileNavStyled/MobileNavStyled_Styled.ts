import styled, { css } from "styled-components";
import { MyTheme } from "../../styles/Theme.styled";
import { Menu } from "../menu/Menu";

export const MobileNav = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  position: fixed;
  background-image: linear-gradient(#13b0f5, #e70faa);
  border-radius: 2rem;
  opacity: 0.9;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
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
  top: 2rem;
  right: 2rem;
  width: 64px;
  height: 50px;
  display: none;
  border-radius: 20%;
  background-color: rgba(255, 255, 255, 0.4);

  padding: 0 6px;
  &:hover,
  &:focus { 
      outline: 3px solid  rgba(255, 255, 255, 0.4);
      background-color:  ${MyTheme.colors.light.hoverOnMenuBtn};
    }

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
  @media ${MyTheme.media.landscape} {
    display: block;
  }
`;
