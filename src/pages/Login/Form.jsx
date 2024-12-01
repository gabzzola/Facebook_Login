import { Link } from 'react-router-dom';
import InputField from './../../components/Input/InputField';

const Form = () => (
  <div className="mx-4">
    <div className="container-form">
      <form>
        <InputField placeholder="Número do celular ou email" />
        <InputField placeholder="Senha" type="password" />

        <button
          className="btn-default"
          type="submit"
        >
          Entrar
        </button>

        <a className="flex justify-center text-sm" href="#">
          Esqueceu a senha?
        </a>

        <Link to="/create-account">
          <button className="w-full text-blue-main border border-blue-700 rounded-full p-2 mt-[25vh] md:mt-[5vh]">
            Criar nova conta
          </button>
        </Link>
      </form>
    </div>
  </div>

);

export default Form;
