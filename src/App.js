import React from 'react';
import axios from 'axios'
import DisplaySimpson from './Components/DisplaySimpson';
import './App.css';

const sampleSimpson = {
  character: "Bart Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
  quote: "You have a smelly body and your butt stinks"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Simpson: sampleSimpson
    };
    this.getSimpson = this.getSimpson.bind(this);
  }

  getSimpson() {
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          Simpson: data[0]
        });
      });
  }

  render() {
    return ( <
      div className = "App" >
      <
      DisplaySimpson Simpson = {
        this.state.Simpson
      }
      /> <
      button type = "button"
      onClick = {
        this.getSimpson
      } >
      New Hilarious Quote <
      /button> < /
      div >
    );
  }
}
export default App;