import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Parent from "./pages/parent";
import HomePage from "./pages/homepage";
class App extends Component  {
  render() {
    return (
      <Router>
        <div>
        <Layout>
            <div>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/parent" component={Parent} />
              </Switch>
            </div>
        </Layout>
      </div>
      </Router>      
    );
  }
}
export default App;