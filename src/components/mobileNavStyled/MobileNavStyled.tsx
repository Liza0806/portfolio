import styled, { css } from "styled-components";
import { IconSet } from "../iconSet/IconSet";
import { Menu } from "../menu/Menu";
import { BurgerBtn, MobileNav } from "./MobileNavStyled_Styled";
import { useState } from "react";

export function MobileNavStyled() {
const [ menuIsOpen, setmenuIsOpen ] = useState(false)
const onBurgerBtnClick = () => {
  setmenuIsOpen(!menuIsOpen)
}


    return ( 
    <>
    <BurgerBtn isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </BurgerBtn>    
        <MobileNav isOpen={menuIsOpen}>
      
          <Menu 
          margin="0 auto" 
          direction="column"
          fontSize="50px"
          padding="0px 20px"
          color="#fff"
          />

          <IconSet 
          fill="#fff"
          width="50px"
          height="50px"
          margin="0"
        />

        </MobileNav>
        </>
    );
  }