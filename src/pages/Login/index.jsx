import Header from './Header.jsx';
import Aside from './Aside.jsx';
import Form from './Form.jsx';
import Footer from './Footer.jsx';

function Login() {
  return (
    <>
      <div>
        <Header />
        
        <main className="grid grid-cols-1 md:grid-cols-2 mx-auto md:w-980px md:mt-[8vw]">
          <Aside />
          <Form />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Login;
