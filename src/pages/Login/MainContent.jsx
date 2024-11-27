import Form from './Form';

const MainContent = () => (
  <div className="mx-4">
    <div className="containerForm">
      <Form />

      <a className="flex justify-center text-sm" href="#">
        Esqueceu a senha?
      </a>
      
      <button className="w-full text-center text-blue-main border border-blue-700 rounded-full p-2 mt-52 md:mt-5">
        Criar nova conta
      </button>
    </div>
  </div>
);

export default MainContent;
