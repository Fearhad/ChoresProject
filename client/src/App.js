import React from 'react';
import Layout from './hoc/Layout/Layout';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Parent from "./pages/parent";
import HomePage from "./pages/homepage";
function App()  {
  
    return (
      <div>
        <Layout>
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/parent" component={Parent} />
              </Switch>
            </div>
          </Router>
        </Layout>
      </div>
    );
  }

export default App;