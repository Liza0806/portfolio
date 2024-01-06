import React from "react";
import styled from "styled-components";

export function Menu () {
    return(
        <MenuStyled>
        <li>
            <a href="">Home</a>
        </li>
        <li>
            <a href="">About</a>
        </li>
        <li>
            <a href="">Tech Stack</a>
        </li>
        <li>
            <a href="">Projects</a>
        </li>
        <li>
            <a href="">Contacts</a>
        </li>
    </MenuStyled>
    )
}

const MenuStyled = styled.ul`
display: flex;
gap: 20px;

a {
color: #fff;
text-decoration: none
}

li {
    list-style: none
}
`