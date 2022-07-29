import logoHeader from '../images/logo-header.svg';

export default function Header() {
  return(
  <header className="header">
    <a href="##"><img className="header__logo" src={logoHeader} alt="Логотип Место"/></a>
  </header>
  );
}