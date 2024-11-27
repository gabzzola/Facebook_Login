import Form from './Form';

const MainContent = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-full max-w-md containerForm">
      <h1 className="text-2xl font-bold text-center">Criar uma nova conta</h1>
      <p className="gray-main text-center mb-4">É rápido e fácil.</p>
      <Form />
    </div>
  </div>
);

export default MainContent;