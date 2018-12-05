 import React, { Component } from 'react';
// import 'App.css';
import { Input, FormBtn } from "../Form";
import { Nav} from "../Nav";
import {Container, Row, Col} from "../Grid";
import Footer from "../Footer";
import API from "../../utils/API"






// GET https://www.googleapis.com/books/v1/volumes?q=quilting

const prepareCall= (endpoint)=>{
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return 'http://localhost:4000'+endpoint
}
   return endpoint
}

class SearchBook extends Component {

  state = {
    books: [],

    input:{
      title:"",
      author:"",
      topic:""
    }
  }
  
  componentDidMount(){
    this.searchBook("quantum");
    
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };





  saveBook(event){
    var payload = {
        title: event.target.dataset.title,
        author: event.target.dataset.author,
        description: event.target.dataset.description
    };   
    
    console.log(payload);  



  fetch(prepareCall('/books'), {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
  })
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data);
  })
  .catch(message => {
    console.log(message);
  })

  }

  handleChange = (event)=> {
    event.preventDefault();
    // console.log(event.target.name);
    let input =this.state.input;
    // console.log(input);

    if ( event.target.name === "title"){
      input.title = event.target.value;
      this.setState({input:input});
      // console.log(this.state);      
    }
     else if ( event.target.name === "author"){
      input.author = event.target.value;
      this.setState({input:input});
      // console.log(this.state);      
    }
    else if ( event.target.name === "topic"){
      input.topic = event.target.value;
      this.setState({input:input});
      // console.log(this.state);      
    }    

  }

  handleSubmit= (event)=> {
    event.preventDefault();
    console.log(this.state.input);
    this.searchBook(this.state.input.title);

  }

  searchBook = (book) => {
    
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + book).then(data => {
      return data.json()
    }).then(data => {
      console.log(data)
      this.setState({books:data.items})
    } )
    

  }
  

  render() {

    // var searchbook = 

    var displaybooks = this.state.books.map ((eachitem, index) => 
    <div key={index}> 
      <h3> Title: {eachitem.volumeInfo.title}</h3>
      <p> Author: {eachitem.volumeInfo.authors[0]} </p> 
      <button className="btn btn-primary" onClick={this.saveBook} data-title={eachitem.volumeInfo.title} data-author={eachitem.volumeInfo.authors[0]} data-description={eachitem.volumeInfo.description}> Save </button>
    </div>
    ) 

    return (

      <div className="App">

           <Nav> </Nav>

           <form onSubmit={this.handleSubmit}>
              <Input onChange = {this.handleChange} name="title" placeholder="Title..." />
              <Input onChange = {this.handleChange} name="author" placeholder="Author... " />
              <Input onChange = {this.handleChange} name="topic" placeholder="Topic... " />
              <FormBtn >Search</FormBtn>
            </form>


      
      <h1> Books Search </h1>

      {/* <Row> test </Row> */}
      <Col size="md-6 sm-12">       
          <div className="displaybooks"> {displaybooks} </div>     
       </Col>

            <Footer> </Footer>


      </div>



    );
  }
}

export default SearchBook;
