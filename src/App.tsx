import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn/Index';
import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Anderson Santos' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
