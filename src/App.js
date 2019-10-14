import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

//store
import store from './Utils/store'

//Components
import MainLayoutContainer from './layouts/MainLayout';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayoutContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
