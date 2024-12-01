import LinkList from '../../components/Footer/LinkList';
import metaIcon from './../../assets/images/meta-icon.png';

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
  <footer className="fixed bottom-0 left-0 right-0 md:w-980px mx-auto">
    
    <div className="flex justify-center w-full md:hidden">
      <img className="w-5 h-5" src={metaIcon}/>
      <span className="text-gray-main font-semibold ml-1">
        Meta
      </span>
    </div>

    <ul className="hidden md:flex md:justify-center md:mb-6">
      <LinkList 
        links={languages}
        className="footer-desktop-link"
      />
    </ul>

    <ul className="flex justify-center md:justify-start md:flex-wrap mb-4">
      <LinkList 
        links={linksDesktop}
        className="footer-desktop-link"
      />
      
      <LinkList 
        links={linksMobile}
        className="footer-mobile-link"
      />
    </ul>
  </footer>
);

export default Footer;
