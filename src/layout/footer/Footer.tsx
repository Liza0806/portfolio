import { FlexWrapper } from "../../components/flexWrapper/FlexWrapper";
import { SpanForAccentStyled } from "../sections/main/Main_Styled";
import { IconSet } from "../../components/iconSet/IconSet";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/container/Container.styled";
import { MyTheme } from "../../styles/Theme.styled";
import { HrStyled, StyledFooter } from "./Footer_Styled";

export function Footer() {
  return (
    <Container>
      <StyledFooter>
        <FlexWrapper
          justify="flex-end"
          margin="0 0 40px 0"
          wrap="wrap"
          columnG="20px"
          rowG="20px"
        >
          <a href="#">+91 12345 09876</a>
          <a href="">info@example.com</a>

          <IconSet fill={MyTheme.colors.light.solidSubTitle} />
        </FlexWrapper>

        <HrStyled />
        <FlexWrapper
          justify="space-between"
          margin="40px 0 0 0"
          wrap="wrap"
          columnG="20px"
          rowG="20px"
        >
          <Menu margin="0 auto 0 0" justify="space-between" />
          <small>
            Designed and built by Pavan MG with{" "}
            <SpanForAccentStyled>Love & Coffee</SpanForAccentStyled>{" "}
          </small>
        </FlexWrapper>
      </StyledFooter>
    </Container>
  );
}
