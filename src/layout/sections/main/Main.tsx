import MainPhotoPath from "../../../assets/images/alterEgo.webp";
import { FlexWrapper } from "../../../components/flexWrapper/FlexWrapper";
import { Container } from "../../../components/container/Container.styled";
import {
  HelloText,
  MyPhotoStyled,
  PhotoContainer,
  SpanForAccentStyled,
} from "./Main_Styled";

export function Main() {
  return (
    <section>
      <Container>
        <h1 hidden>Frontend developer resume</h1>
        <FlexWrapper
          justify="space-around"
          align="center"
          margin="20vh auto"
          height="20vh"
        >
          <HelloText>
            Hi 👋,
            <br />
            My name is <br />
            <SpanForAccentStyled> Pavan MG </SpanForAccentStyled> <br />I build
            things for web
          </HelloText>

          <PhotoContainer>
            <MyPhotoStyled src={MainPhotoPath} alt="My photo"></MyPhotoStyled>
          </PhotoContainer>
        </FlexWrapper>
      </Container>
    </section>
  );
}

