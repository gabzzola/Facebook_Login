const Form = () => (
  <form>
    <div className="flex gap-4">
      <input 
        className="input-form"
        placeholder="Nome"
        type="text"
      />

      <input 
        className="input-form"
        placeholder="Sobrenome"
        type="text"
      />
    </div>

    <input 
      className="input-form"
      placeholder="Email"
      type="text"
    />

    <div className="flex gap-4">
      <input 
        className="input-form"
        placeholder="Senha"
        type="password"
      />

      <input 
        className="input-form"
        placeholder="Confirme a senha"
        type="password"
      />
    </div>

    <button className="btn-default mt-4">
        Cadastre-se
    </button>

    <p className="text-blue-main text-center">
      <a href="#">Já possui uma conta?</a>
    </p>
  </form>
);

export default Form;