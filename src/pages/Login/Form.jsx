const Form = () => (
  <form>
    <input
      className="inputForm"
      placeholder="Número do celular ou email"
      type="text"
    />
    
    <input
      className="inputForm"
      placeholder="Senha"
      type="password"
    />

    <button
      className="w-full bg-blue-main text-white p-2 mb-5 border rounded-full"
      type="submit"
    >
      Entrar
    </button>
  </form>
);

export default Form;
