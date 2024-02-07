import React from "react";
import { SpanForAccentStyled } from "../main/Main_Styled";
import { SubTitleStyled } from "../../../components/subTitle/SubTitle";
import { Container } from "../../../components/container/Container.styled";
import styled from "styled-components";

export function Contacts() {
  return (
    <ContactsSection>
      <Container>
        <SubTitleStyled
          Fmax={58}
          Fmin={34}
          lineHeight={1.2}
          letter="-1px"
          margin="9px"
        >
          For any questions please mail me:{" "}
          <SpanForAccentStyled>hi@pavanmg.in</SpanForAccentStyled>
        </SubTitleStyled>
      </Container>
    </ContactsSection>
  );
}

const ContactsSection = styled.section`
  margin: 190px auto;
`;
