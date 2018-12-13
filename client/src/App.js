import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Parent from "./pages/parent";
import HomePage from "./pages/homepage";
import LoginForm from "./pages/loginform";
import ChildPage from './pages/child';
// import LoginRegister from './Components/login/loginregister';






class App extends Component  {

  render() {
    return (
      <Router>
        <div>
        <Layout>
            <div>
              <Switch>
                <Route exact path="/" component={HomePage} />  
                {/* <Route exact path="/login" component={LoginForm} />         */}
                <Route exact path="/parent" component={Parent} />
                <Route exact path="/child/:id" component={ChildPage} />
              </Switch>
            </div>
        </Layout>
      </div>
      </Router>      
    );
  }
}
export default App;