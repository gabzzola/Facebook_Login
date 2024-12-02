import Header from './../../components/Header/Header';
import Aside from './Aside.jsx';
import Form from './Form.jsx';
import Footer from './Footer.jsx';

function Login() {
  return (
    <>
      <Header />
      
      <main className="grid grid-cols-1 md:grid-cols-2 mx-auto md:w-980px md:mt-[10vw]">
        <Aside />
        <Form />
      </main>

      <Footer />
    </>
  );
}

export default Login;
