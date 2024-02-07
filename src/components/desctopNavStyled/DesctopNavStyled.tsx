import { IconSet } from "../iconSet/IconSet";
import { Menu } from "../menu/Menu";
import { DesctopNav } from "./DesctopNavStyled_Styled";

export function DesctopNavStyled() {
    return (     
        <DesctopNav>
          <Menu margin="0 0 0 auto"/>
          <IconSet fill="#666666"
          margin="50px"/>
        </DesctopNav>
    );
  }
