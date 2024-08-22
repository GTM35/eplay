import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar jogos de AÇÃO"
              to="/categories#rpg"
            >
              RPG
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de AÇÃO"
              to="/categories#action"
            >
              AÇÃO
            </Link>
          </li>

          <li>
            <Link
              title="Clique aqui para acessar jogos de ESPORTES"
              to="/categories#sports"
            >
              ESPORTES
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de SIMULAÇÃO"
              to="/categories#simulation"
            >
              SIMULAÇÃO
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de LUTA"
              to="/categories#fight"
            >
              LUTA
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link
              title="clique aqui para acessar a sessão de Promoções"
              to="/#on-sale"
            >
              Promoções
            </Link>
          </li>
          <li>
            <Link
              title="clique aqui para acessar a sessão de Em breve"
              to="/#coming-soon"
            >
              Em breve
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
