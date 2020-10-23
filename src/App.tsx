import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import  AuthContext from './hooks/AuthContext';

const App: React.FC = () => (
  <>
  <AuthContext.Provider value={{name: 'Murilo'}}>
    <SignIn />
  </AuthContext.Provider>
  <GlobalStyle />
  </>
);

export default App;
