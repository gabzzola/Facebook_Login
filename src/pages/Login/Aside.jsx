import logoMobile from '../../assets/images/logo-mobile.png';
import logoDesktop from '../../assets/images/logo-desktop.svg';

const Aside = () => (
  <div>
    <img className="w-16 h-16 my-28 mx-auto md:hidden" src={logoMobile} alt="Logo Mobile" />

    <div className="hidden md:flex md:flex-col md:mt-10">
      <img className="w-290px -ml-7" src={logoDesktop} alt="Logo Desktop" />
      <span className="w-96 text-xl ml-1">
        O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.
      </span>
    </div>
    
  </div>
);

export default Aside;
