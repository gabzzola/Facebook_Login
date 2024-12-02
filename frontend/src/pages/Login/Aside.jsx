import logoDesktop from './../../assets/images/logo-desktop.svg';

const Aside = () => (
  <aside className="hidden md:flex md:flex-col md:mt-10">
    <img className="w-290px -ml-7" src={logoDesktop} alt="Logo Desktop" />
    <span className="w-96 text-xl ml-1">
      O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.
    </span>
  </aside>
);

export default Aside;
