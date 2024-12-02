import Form from './Form';

const MainContent = () => (
  <main className="flex items-center justify-center md:min-h-screen">
    <div className="w-full max-w-md container-form mx-4 md:mx-0">
      <h1 className="text-2xl font-bold text-center">Criar uma nova conta</h1>
      <p className="gray-main text-center mb-4">É rápido e fácil.</p>
      <Form />
    </div>
  </main>
);

export default MainContent;