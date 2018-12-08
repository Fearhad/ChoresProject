// import React from 'react';
import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Parent from "./pages/parent";
import HomePage from "./pages/homepage";
import Children from './pages/children';
import Loginscreen from './pages/loginregister'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  };

  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  };
  
  render(){
    return (
      <div>
        <Layout>
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={HomePage} />
                {/* <Route exact path="/login" component={Loginscreen} /> */}
                <Route exact path="/parent" component={Parent} />
                <Route exact path="/children" component={Children} />
              </Switch>
            </div>
          </Router>
        </Layout>
      </div>
    );
  }
  
    
}

export default App;