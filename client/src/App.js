import React from 'react';
import Search from './pages/Search';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path = '/' component= {Search}/>
                </Switch>
                </div>

            </Router>

    );
}

export default App;
