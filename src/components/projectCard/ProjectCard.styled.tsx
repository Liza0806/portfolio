import styled from "styled-components";
import { MyTheme } from "../../styles/Theme.styled";

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const ProjectCardStyled = styled.div`
  width: 375px;
  flex-grow: 1;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    display: block;
  }
  > div {
    padding: 30px 30px 25px 30px;
    
   
 ${LinkWrapper}:first-of-type{ &:hover,
  &:focus {
 
    svg {
      fill: none;
      stroke: ${MyTheme.colors.light.solidHeading}
    }
  }
}
${LinkWrapper}:last-of-type{ &:hover,
  &:focus {
 
    svg {
      fill: ${MyTheme.colors.light.solidHeading};
      stroke: none
    }
  }
}
}
`;
export const CardDscrStyled = styled.p`
  font-family: "Poppins";
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  color: #666666;
  margin-bottom: 12px;
`;
export const CardTitleStyled = styled.h3`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 28px;
  line-height: 26px;
  text-align: center;
  color: #000000;
  margin-bottom: 17px;
`;
export const ParagraphStyled = styled.p`
  font-family: "Poppins";
  font-weight: 300;
  font-size: 14px;
  line-height: 26px;
  color: #666666;
  margin-bottom: 20px;

  span {
    font-weight: 400;
    font-size: 16px;
    color: #42446e;
  }
`;
export const ProjectLinkStyled = styled.a`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #000000;
  text-decoration: underline;
  &:hover,
  &:focus {
    color: ${MyTheme.colors.light.colorsHeading}
  }
 
  
`;

