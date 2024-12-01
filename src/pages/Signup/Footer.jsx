import LinkList from './../../components/Footer/LinkList';

const linksMobile = [
  "Sobre",
  "Ajuda", 
  "Mais",
];

const Footer = () => (
  <footer className="fixed bottom-0 left-0 right-0 md:hidden">
    <div className="flex mb-4">
      <ul className="flex justify-center w-full">
        <LinkList
          links={linksMobile}
          className="footer-mobile-link"
        />
      </ul>
    </div>
  </footer>
);

export default Footer;