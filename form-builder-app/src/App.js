import React, { Component } from 'react';
import { FormTabs, TabTitles } from './Tabs.js';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-title">
          <h1 className="h1-title">Form Builder</h1>
        </header>
        <FormTabs tabTitles={TabTitles} />
      </div>
    );
  }
}

export default App;
