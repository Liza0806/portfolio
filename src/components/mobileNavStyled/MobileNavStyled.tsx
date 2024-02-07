import styled, { css } from "styled-components";
import { IconSet } from "../iconSet/IconSet";
import { Menu } from "../menu/Menu";
import { BurgerBtn, MobileNav } from "./MobileNavStyled_Styled";

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