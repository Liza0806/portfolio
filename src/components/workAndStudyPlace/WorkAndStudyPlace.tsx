import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { MyTheme } from "../../styles/Theme.styled";

type WorkAndStudyPlacePropsType = {
    position: string
    company: string
    country: string
    time: string
    status: string
}

export function WorkAndStudyPlace (props: WorkAndStudyPlacePropsType){
    return (
<StyledWorkAndStudyPlace>
    <div>
<h3>{props.position}</h3>

<StyledStatus>{props.status}</StyledStatus>
</div>
<div>
<span>
<Icon iconId="building"
width="16"
height="12"
viewBox="0 0 12 12"/>
{props.company}</span>

<span><Icon iconId="location"
width="16"
height="12"
viewBox="0 0 12 12"/>
{props.country}</span>

<span><Icon iconId="calendar"
width="16"
height="12"
viewBox="0 0 12 12"/>
{props.time}</span> 
</div>
</StyledWorkAndStudyPlace>
    )
}

const StyledWorkAndStudyPlace = styled.li`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
border-bottom: 2px solid ${MyTheme.colors.light.workAndStudyStatusBorder};

h3 {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: ${MyTheme.colors.light.lightContent};
}
span {
    font-weight: 500;
    font-size: 12px;
    line-height: 2.33;
    color: ${MyTheme.colors.light.workAndStudyDscr};
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 5px;
}
> div {
    width:100%;
display: flex;
align-items:stretch;
justify-content: space-between;
}
`
const StyledStatus = styled.div`
height: 30px;
display: block;
margin-left: auto;
background-color: ${MyTheme.colors.light.workAndStudyStatusBg};
color: ${MyTheme.colors.light.workAndStudyStatus};
font-weight: 600;
font-size: 9px;
line-height: 2.89;
padding: 1px 22px;
border-radius: 12px;
`
