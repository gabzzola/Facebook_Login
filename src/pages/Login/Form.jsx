import { Link } from 'react-router-dom';
import InputField from './../utils/InputField';

const Form = () => (
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
      <button className="w-full text-blue-main border border-blue-700 rounded-full p-2 mt-52 md:mt-5">
        Criar nova conta
      </button>
    </Link>
  </form>
);

export default Form;
