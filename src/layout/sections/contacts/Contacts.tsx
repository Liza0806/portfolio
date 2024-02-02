import React from "react";
import { SpanForAccentStyled } from "../main/Main";
import { SubTitleStyled } from "../../../components/subTitle/SubTitle";
import { Container } from "../../../components/container/Container.styled";
import styled from "styled-components";

export function Contacts() {
  return (
    <Container>
    <ContactsSection>
      <SubTitleStyled size="58px" lineHeight="70px" letter="-1px" margin="9px">
        For any questions please mail me:{" "}
        <SpanForAccentStyled>hi@pavanmg.in</SpanForAccentStyled>
      </SubTitleStyled>
    </ContactsSection>
    </Container>
  );
}

const ContactsSection = styled.section`
  margin: 190px auto;
`