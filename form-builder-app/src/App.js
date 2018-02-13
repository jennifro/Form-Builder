import React, { Component } from 'react';
import { createStore } from 'redux';
import { formBuilder } from './reducers';
import CreateForm from './Input.js'
import FormTabs from './Tabs.js';


import './App.css';

export const store = createStore(formBuilder);



export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-title">
          <h1 className="h1-title">Form Builder</h1>
        </header>
        <FormTabs  create={ <CreateForm /> } />
      </div>
    );
  }
}

