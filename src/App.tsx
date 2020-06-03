import React from 'react';
import './App.css';
import { MainComponent } from './components/main.component';
import { Provider } from 'react-redux';
import { store } from './Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainComponent />
      </Provider>
    </div>
  );
}

export default App;
