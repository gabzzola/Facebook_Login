import metaIcon from '../../assets/images/meta-icon.png';
import LinkItemDesktop from '../../utils/LinkItemDesktop';
import LinkItemMobile from '../../utils/LinkItemMobile';

const languages = [
  "Português (Brasil)",
  "English (US)",
  "Espanõl",
  "Français (France)",
  "Deutsch",
];

const linksMobile = [
  "Sobre", 
  "Ajuda", 
  "Mais",
];

const linksDesktop = [
  "Cadastre-se",
  "Entrar",
  "Messenger",
  "Facebook Lite",
  "Vídeo",
  "Locais",
  "Jogos",
  "Marketplace",
  "Meta Pay",
  "Meta Store",
  "Meta Quest",
  "Ray-Ban Meta",
  "Meta AI",
  "Instagram",
  "Threads",
  "Campanhas de arrecadação de fundos",
  "Serviços",
  "Central de Informações de Votação",
  "Política de Privacidade",
  "Central de Privacidade",
  "Grupos",
  "Criar anúncio",
  "Criar Página",
  "Desenvolvedores",
  "Carreiras",
  "Cookies",
  "Escolhas para anúncios",
  "Termos",
  "Carregamento de contatos e não usuários",
];

const Footer = () => (
  <footer className="flex flex-col items-center mx-auto md:w-980px md:mt-[8vw]">
    
    <div className="flex flex-row my-4 md:hidden">
      <img className="w-5 h-5" src={metaIcon}/>
      <span className="text-gray-main font-semibold ml-1">
        Meta
      </span>
    </div>

    <ul className="hidden md:flex md:flex-wrap md:mb-8">
      {languages.map((language, index) => (
        <LinkItemDesktop key={index}>
          {language}
        </LinkItemDesktop>
      ))}
    </ul>

    <ul className="flex md:flex-wrap">
      {linksDesktop.map((link, index) => (
        <LinkItemDesktop key={index}>{link}</LinkItemDesktop>
      ))}
      
      {linksMobile.map((link, index) => (
        <LinkItemMobile key={index}>{link}</LinkItemMobile>
      ))}
    </ul>
  </footer>
);

export default Footer;
