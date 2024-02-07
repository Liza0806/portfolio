import styled from "styled-components"
import { MyTheme } from "../../styles/Theme.styled"
import { font } from "../../styles/Common"

export const StyledWorkAndStudyPlace = styled.li`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
border-bottom: 2px solid ${MyTheme.colors.light.workAndStudyStatusBorder};
margin-bottom: 30px;

h3 {
    
${font({ weight: 400, Fmax: 20, Fmin: 16, lineHeight: 1.2 })};
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
margin-bottom: 24px;

}
`
export const WorkPlaceContainer = styled.div`

    display: flex;
   flex-wrap: wrap;
   gap: 20px;

`
export const StyledStatus = styled.div`
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
white-space: nowrap;
`
