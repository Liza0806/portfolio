import styled from "styled-components";
import { Icon } from "../icon/Icon";

type IconSetPropsType = {
    fill?: string
    stroke?: string
    width?: string
    height?: string
    margin?: string

}

export function IconSet (props: IconSetPropsType){
    return (
        <StyledIconList margin={props.margin}>
          <li><a href="">
          <Icon
          iconId="twitter" 
          width={props.width || "30"}  
          height={props.height || "30"}
          viewBox="0 0 32 32"
          fill={props.fill} 
          />
        </a></li>

          <li><a href="">
          <Icon
            iconId="github"
            width={props.width || "30"} 
            height={props.height || "30"}
            viewBox="0 0 88 88"
            fill={props.fill} 
          />
        </a></li>

          <li><a href="">
          <Icon 
          iconId="linkedin" 
          width={props.width || "30"} 
          height={props.height || "30"}
          viewBox="0 0 30 30" 
          fill={props.fill} 
          />
        </a></li>
        
        
        
        </StyledIconList>
    )
}

const StyledIconList = styled.ul<IconSetPropsType>`
    display: flex;
    gap: 20px;
    margin-left: ${(props)=> props.margin}

`