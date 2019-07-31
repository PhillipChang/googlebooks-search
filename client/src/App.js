import React from 'react';
import Search from './pages/Search';
import Saved from './pages/Saved'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './app.css';


function App() {
    return (
        <Router>
            <div className="main">
                <Switch>
                    <Route exact path = '/' component = {Search}/>
                    <Route exact path = '/saved' component = {Saved}/>
                </Switch>
                </div>

            </Router>

    );
}

export default App;
