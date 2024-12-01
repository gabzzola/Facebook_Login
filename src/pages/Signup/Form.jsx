import { Link } from 'react-router-dom';
import InputField from './../../components/Input/InputField';

const Form = () => (
  <form>
    <div className="flex gap-4">
      <InputField placeholder="Nome" />
      <InputField placeholder="Sobrenome" />
    </div>

    <InputField placeholder="Email" />

    <div className="flex gap-4">
      <InputField placeholder="Senha" type="password" />
      <InputField placeholder="Confirme a senha" type="password" />
    </div>

    <button className="btn-default mt-4">
        Cadastre-se
    </button>

    <Link to="/">
      <p className="text-blue-main text-center">
        <a href="#">Já possui uma conta?</a>
      </p>
    </Link>
  </form>
);

export default Form;