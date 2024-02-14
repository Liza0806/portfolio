import styled from "styled-components"
import { MyTheme } from "../../styles/Theme.styled"
import { FlexWrapper } from "../../components/flexWrapper/FlexWrapper"

export const StyledFooter = styled.footer`
padding: 40px 0;

a {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.44;
  color: ${MyTheme.colors.light.solidSubTitle};
  white-space: nowrap;
  
  &:hover,
  &:focus {
   color: ${MyTheme.colors.light.desctopHoverMenutems};
  
  }
 }
a + a {
  margin-left: 30px;
}
 @media ${MyTheme.media.tablet} {

  ${FlexWrapper} {
     justify-content: center;
  }


  a { font-size: 16px;
  }

  a + a {
  margin-left: 0px;
}
 }
`
export const HrStyled = styled.hr`
  height: 2px;
  background-color:  ${MyTheme.colors.light.lightContent};
`
export const StyledSmall = styled.small`
margin: 0 auto 0 0;
`