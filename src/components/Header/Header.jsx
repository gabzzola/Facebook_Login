import logoMobile from './../../assets/images/logo-mobile.png';

const Header = () => (
  <header className="text-center mt-3 md:hidden">
    <span className="text-xs text-gray-main">
      Português (Brasil)
    </span>

    <div>
      <img className="logo-mobile" src={logoMobile} alt="Logo Mobile" />
    </div>
  </header>
);

export default Header;
