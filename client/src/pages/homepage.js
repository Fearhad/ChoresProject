import React from 'react';
import { Link } from "react-router-dom";
import classes from './homepage.css';
import Wrapper from '../hoc/Wrapper/Wrapper'



function HomePage () {
    return (
        <Wrapper>
            <div className={classes.Homepage}>
        <div>
       
            <h1>Welcome to YourChores</h1>
            <h2>Motivate your children to complete tasks by providing monetary and non-monetary rewards</h2>            
            <Link to={"/parent"}><h6>Enter Site</h6></Link>
            <article>
  <p>Clean your room</p>
  <p>Empty dishwasher</p>
  <p>Mow the lawn</p>
  <p>Walk the dog</p>
  <p>Take out the garbage</p>
  <p>Vacuum the carpet</p>
  <p>Do the laundry</p>
  <p>Shovel the driveway</p>
</article>
            
        </div>
        </div>
        </Wrapper>
    );
}

export default HomePage;
