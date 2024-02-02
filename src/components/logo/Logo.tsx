import React from "react";
import { Icon } from "../icon/Icon";
import { MyTheme } from "../../styles/Theme.styled";

export function Logo () {
    return (
<a href="">
<Icon iconId="github"  fill={`linearGradient: (${MyTheme.colors.light.gradientStart}, ${MyTheme.colors.light.gradientEnd})`}/>
</a>
    )
}