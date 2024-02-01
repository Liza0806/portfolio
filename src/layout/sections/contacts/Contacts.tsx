import React from "react";
import { SpanForAccentStyled } from "../main/Main";
import { SubTitleStyled } from "../../../components/subTitle/SubTitle";
import { Container } from "../../../components/container/Container.styled";

export function Contacts() {
  return (
    <Container>
    <section>
      <SubTitleStyled size="58px" lineHeight="70px" letter="-1px" margin="9px">
        For any questions please mail me:{" "}
        <SpanForAccentStyled>hi@pavanmg.in</SpanForAccentStyled>
      </SubTitleStyled>
    </section>
    </Container>
  );
}
