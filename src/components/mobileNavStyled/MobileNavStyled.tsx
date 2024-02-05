import styled, { css } from "styled-components";
import { IconSet } from "../iconSet/IconSet";
import { Logo } from "../logo/Logo";
import { Menu } from "../menu/Menu";
import { MyTheme } from "../../styles/Theme.styled";

export function MobileNavStyled() {
    return ( 
    <>
    <BurgerBtn isOpen={false}>
        <span></span>
      </BurgerBtn>    
        <MobileNav isOpen={false}>
      
          <Menu 
          margin="0 auto" 
          direction="column"
          fontSize="50px"/>

          <IconSet 
          fill="#666666"
          width="50px"
          height="50px"
          margin="0"
        />

        </MobileNav>
        </>
    );
  }
  const MobileNav = styled.div<{isOpen: boolean}>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  position: absolute;
  background-color: ${MyTheme.colors.light.workAndStudyStatusBorder};
  top:0;
  left: 0;
  right:0;
  bottom:0;
  z-index: 2;
  display: none;

 ${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
 `}

`;
// <isOpen: boolean>
const BurgerBtn = styled.button<{isOpen: boolean}>`
    position: fixed;
    z-index: 9;
   top: 20px;
   left: 20px;
    width: 50px;
    height: 50px;
 display: none;

    span {
        display: block;
        z-index: 9;
        width: 50px;
        height:2px;
        background-color: red;
      
        position: absolute;
     

        ${props => props.isOpen && css<{isOpen: boolean}>`
        background-color: rgba(255, 255, 255, 0)
 `};
        &::before {
            content: "";
            display: block;
            z-index: 9;
        width: 50px;
        height:2px;
        background-color: black;
      
        position: absolute;
        transform: translateY(-10px);

        ${props => props.isOpen && css<{isOpen: boolean}>`
   transform: rotate(45deg) translateY(0);
 `}

        }
        &::after {
            content: "";
            display: block;
            z-index: 9;
        width: 50px;
        height:2px;
        background-color: green;
       
        position: absolute;
        transform: translateY(-20px);

        ${props => props.isOpen && css<{isOpen: boolean}>`
   transform: rotate(-45deg)  translateY(0);
 `}
        }
       
    }
     @media ${MyTheme.media.tablet} {
    display: block;
}
`