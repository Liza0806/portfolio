import { Icon } from "../icon/Icon";
import {
  StyledStatus,
  StyledWorkAndStudyPlace,
  WorkPlaceContainer,
} from "./WorkAndStudyPlace_Styled";

type WorkAndStudyPlacePropsType = {
  position: string;
  company: string;
  country: string;
  time: string;
  status: string;
};

export function WorkAndStudyPlace(props: WorkAndStudyPlacePropsType) {
  return (
    <StyledWorkAndStudyPlace>
      <div>
        <h3>{props.position}</h3>

        <StyledStatus>{props.status}</StyledStatus>
      </div>
      <WorkPlaceContainer>
        <span>
          <Icon iconId="building" width="16" height="12" viewBox="0 0 12 12" />
          {props.company}
        </span>

        <span>
          <Icon iconId="location" width="16" height="12" viewBox="0 0 12 12" />
          {props.country}
        </span>

        <span>
          <Icon iconId="calendar" width="16" height="12" viewBox="0 0 12 12" />
          {props.time}
        </span>
      </WorkPlaceContainer>
    </StyledWorkAndStudyPlace>
  );
}
