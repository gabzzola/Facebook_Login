import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';

function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route 
              path="/" 
              element={ <Login /> } 
            />
            
            <Route 
              path="/create-account" 
              element={ 
                <>
                  <Helmet>
                    <title>
                      Cadastrar-se no Facebook
                    </title>
                  </Helmet>
                  <CreateAccount />  
                </>
              }
            />
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
