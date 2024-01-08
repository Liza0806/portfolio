import styled from "styled-components";
import { Icon } from "../icon/Icon";

type IconSetPropsType = {
    fill?: string
    stroke?: string

}

export function IconSet (props: IconSetPropsType){
    return (
        <StyledIconList>
          <li><a href="">
          <Icon 
          iconId="twitter" 
          width="30" height="30" 
          viewBox="0 0 32 32"
          fill={props.fill} 
          />
        </a></li>

          <li><a href="">
          <Icon
            iconId="github"
            width="30"
            height="30"
            viewBox="0 0 88 88"
            fill={props.fill} 
          />
        </a></li>

          <li><a href="">
          <Icon 
          iconId="linkedin" 
          width="30" height="30" 
          viewBox="0 0 30 30" 
          fill={props.fill} 
          />
        </a></li>
        
        
        
        </StyledIconList>
    )
}

const StyledIconList = styled.ul`
    display: flex;

`