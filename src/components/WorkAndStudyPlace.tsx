import React from "react";
import { Icon } from "./icon/Icon";
import styled from "styled-components";

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
<h3>{props.position}</h3>

<StyledStatus>{props.status}</StyledStatus>

<span>
<Icon iconId="building"
width="20"
height="20"
viewBox="0 0 13 13"/>
{props.company}</span>

<span><Icon iconId="location"
width="20"
height="20"
viewBox="0 0 13 13"/>
{props.country}</span>

<span><Icon iconId="calendar"
width="20"
height="20"
viewBox="0 0 13 13"/>
{props.time}</span> 
</StyledWorkAndStudyPlace>
    )
}

const StyledWorkAndStudyPlace = styled.li`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;

`
const StyledStatus = styled.div`

height: 30px;
flex-shrink: 0;
background-color: #D7FFE0;
color: #018C0F;


`