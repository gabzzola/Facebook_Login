const Form = () => (
  <div className="mx-4">
    <div className="containerForm">
      
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

      <a className="flex justify-center text-sm" href="#">
        Esqueceu a senha?
      </a>

      <button className="w-full text-center text-blue-main border border-blue-700 rounded-full p-2 mt-52 md:mt-5">
        Criar nova conta
      </button>

    </div>
  </div>
);

export default Form;
