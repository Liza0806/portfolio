import styled from "styled-components";
import { Container } from "../../components/container/Container.styled";
import { DesctopNavStyled } from "../../components/desctopNavStyled/DesctopNavStyled";
import { MobileNavStyled } from "../../components/mobileNavStyled/MobileNavStyled";

export function Header() {
  return (
    <header>
      <Container>
        <NavStyled>
          <DesctopNavStyled />
          <MobileNavStyled />
        </NavStyled>
      </Container>
    </header>
  );
}
const NavStyled = styled.nav``;
