import Container from "./Container";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="site-header">
      <Container>
        <div className="header-inner">
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
}
