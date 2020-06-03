import React from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import {BrowserRouter as Router,Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import AddProject from './components/project/AddProject';
import CreateProjectButton from './components/project/CreateProjectButton';
import {Provider} from "react-redux"
import store from "./store";

function App() {
  return (
    <Provider  store={store}>
    <Router>   <div className="App">
    <Header></Header>
    
      <Route path="/Dashboard" component={Dashboard}></Route>

      <Route path="/addProject" component={AddProject}></Route>
    </div>
    </Router>
    </Provider>
    
  );
}

export default App;

