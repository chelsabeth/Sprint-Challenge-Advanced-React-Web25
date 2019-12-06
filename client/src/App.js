import React from "react";
import "./App.css";
import axios from "axios";

import Display from "./components/Display";

class App extends React.Component {
  state = {
    apiCall: []
  };

  componentDidMount() {
    axios 
    .get(`http://localhost:5000/api/players`)
    .then(res => {
      this.setState({
        apiCall: res.data
      });
      console.log("API data: ", this.state.apiCall)
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>
          Women's World Cup App <span>🏆</span>
          <Display data={this.state.apiCall}/>
        </h1>
      </div>
    );
  }
}

export default App;
