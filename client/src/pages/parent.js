import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Child from "../Components/Child/Child";
import classes from "./parent.css"
import Wrapper from '../hoc/Wrapper/Wrapper'
import Button from '../Components/UI/Button/Button'
import Spinner from '../Components/UI/Spinner/Spinner'
import Input from '../Components/UI/Input/Input'

class Parent extends Component {
  state = {
    children: [],
    childForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Child Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      image: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Image Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
      },
      formIsValid: false,
      loading: false
  }

  childHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const formData = {};
    for (let formElementIdentifier in this.state.childForm) {
      formData[formElementIdentifier] = this.state.childForm[formElementIdentifier].value;
    }
    const child = {
      childData: formData
    }
    axios.post('/api/children', child.childData)
    .then(response => {
      this.setState({loading: false});
      axios.get('/api/children')
      .then(response => {        
        this.setState({children: response.data})
      
    })
    .catch(function (error) {
      console.log(error)
    })
    })
    .catch(error => {
      this.setState({loading: false});
  });
  }

  checkValidity(value, rules) {
    let isValid = true;
    
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedChildForm = {
      ...this.state.childForm
    };
    const updatedFormElement = {
      ...updatedChildForm[inputIdentifier]
  };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedChildForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedChildForm) {
      formIsValid = updatedChildForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({childForm: updatedChildForm, formIsValid: formIsValid});
  }
  
  componentDidMount() {
  
    axios.get('/api/children')
      .then(response => {        
        this.setState({children: response.data})
      
    })
    .catch(function (error) {
      console.log(error)
    })
    
  }

  
  render() {

    const formElementsArray = [];
            for (let key in this.state.childForm) {
            formElementsArray.push({
                id: key,
                config: this.state.childForm[key]
            });
    }
    let form = (
        <form onSubmit={this.childHandler}>
            {formElementsArray.map(formElement => (
              <Input 
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={(event) => this.inputChangedHandler(event, formElement.id)} />
            ))}
            <Button btnType="Success" disabled={!this.state.formIsValid}>Add Child</Button>
          </form>
      );

      if (this.state.loading) {
        form = <Spinner />;
      }
    
    return (
      <Wrapper>
      <div className={classes.Parent}>
      <h1> Your Children </h1>   
      <div>  <Link to={"/login"}>Login.</Link>  </div>  
        {this.state.children.map( child => (
          <Child name={child.name}
                 image={child.image}
                 key={child._id} />
        ))}
      </div>
      <div className={classes.ChildData}>
            <h4>Enter your Child Data</h4>
            {form}
            </div>
      </Wrapper>
    );
  }
}

export default Parent;
