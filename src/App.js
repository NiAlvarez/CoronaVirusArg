import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Homepage from "./components/homepage.component.jsx"
import FAQpage from './components/FAQpage.component.jsx';
import RecomendacionesPage from './components/recomendacionesPage.component.jsx';
import CentrosPage from './components/centrosPage.component.jsx'



function App() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/FAQ' component={FAQpage} />
            <Route exact path='/Recomendaciones' component={RecomendacionesPage} />
            <Route exact path='/Centros' component={CentrosPage} />

            

          </Switch>
      </div>
    )
}

export default App;