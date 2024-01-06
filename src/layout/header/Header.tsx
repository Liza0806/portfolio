import React from "react";
import { Logo } from "../../components/logo/Logo";
import styled from "styled-components";
import { Menu } from "../../components/Menu";
import { Icon } from "../../components/icon/Icon";


export function Header() {
    return (
        <HeaderStyled>
            <NavStyled>
                <Logo/>
               <Menu/>
               <a href="">
  <Icon iconId="twitter"   
               width="30"
               height="30" 
               viewBox="0 0 32 32"/>
               </a>
               <a href="">
 <Icon iconId="github" 
                width="30"
                height="30" 
                viewBox="0 0 88 88"
                fill="#A7A7A7"/>
</a>
<a href="">
  <Icon iconId="linkedin"
                width="30"
                height="30" 
                viewBox="0 0 30 30"/>
</a>
             
              
             
            </NavStyled>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header `
background-color: #131313;

color: #fff;

`
const NavStyled = styled.nav`
display: flex;
align-items: center;
justify-content: space-around;

`