import Header from './Header.jsx';
import Aside from './Aside.jsx';
import MainContent from './MainContent.jsx';
import Footer from './Footer.jsx';

function Login() {
  return (
    <>
      <Header />
      
      <main className="grid grid-cols-1 md:grid-cols-2 mx-auto md:w-980px md:mt-[8vw]">
        <Aside />
        <MainContent />
      </main>

      <Footer />
    </>
  );
}

export default Login;
