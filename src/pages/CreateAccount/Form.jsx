const Form = () => (
  <form>
    <div className="flex gap-4">
      <input 
        className="inputForm"
        placeholder="Nome"
        type="text"
      />

      <input 
        className="inputForm"
        placeholder="Sobrenome"
        type="text"
      />
    </div>

    <input 
      className="inputForm"
      placeholder="Email"
      type="text"
    />

    <div className="flex gap-4">
      <input 
        className="inputForm"
        placeholder="Senha"
        type="password"
      />

      <input 
        className="inputForm"
        placeholder="Confirme a senha"
        type="password"
      />
    </div>

    <button className="btnDefault mt-4">
        Cadastre-se
    </button>

    <p className="text-blue-main text-center">
      <a href="#">Já possui uma conta?</a>
    </p>
  </form>
);

export default Form;