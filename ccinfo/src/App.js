import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import TitleBar from "./Components/TitleBar/TitleBar";
import ContestList from "./Components/ContestsList/ContestList";

export class App extends Component {
  state = {
    lastUpdated: "",
    ongoingContests: [],
    upcomingContests: [],
  };
  componentDidMount() {
    document.querySelector("body").classList.add("bg-secondary");
    axios
      .get("https://radiant-badlands-67547.herokuapp.com/json/contests.json")
      .then((resp) => {
        this.setState({
          lastUpdated: resp.data.Last_Updated,
          ongoingContests: resp.data.Current_Contests,
          upcomingContests: resp.data.Future_Contests,
        });
        console.log(resp.data);
      });
  }
  render() {
    return (
      <Router>
        <>
          <TitleBar />
          <Route exact path="/">
            <ContestList DataList={this.state.ongoingContests} />
          </Route>
          <Route exact path="/future">
            <ContestList DataList={this.state.upcomingContests} />
          </Route>
        </>
      </Router>
    );
  }
}

export default App;
