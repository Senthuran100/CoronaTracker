import React from 'react';
import {Jumbotron} from 'react-bootstrap';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

 
    render(){
        return(
        <Jumbotron className="bg-dark text-white">
          <h1>Welcome to Corona Tracker App</h1>
          <p>
            This App will track the Corona status in Srilanka
          </p>
          
        </Jumbotron>
        );
    }
}

export default Welcome

