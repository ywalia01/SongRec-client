import React, { Component } from "react";
import axios from "axios";
import Suggestions from "./Suggestions";

const API_URL = "/about";

class Search extends Component {
  state = {
    query: "",
    results: [],
  };

  getInfo = (state) => {
    axios
      //.get(`${API_URL}`)
      .post({API_URL}, {
        query: state.query
      })
      .then(({data}) => {
        for (var i = 0; i < data.length; i++) {
          var joined = this.state.results.concat(data[i]);
          this.setState({
            results: joined,
          });
        }
        });
        //results: data.data;
        //console.log(JSON.parse(data[0]))
        //console.log(data[0].id)
        //console.log(data[0])
        //console.log(data[0].artist[0])
        //console.log(typeof this.state.results[0].id)
        //console.log(this.state.results[0].id)
      //
      //typeof data[0].id -> string
      //typeof data[0].artist[0] -> string
      /*const movie = { title, rating };
      const response = await fetch("/add_movie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(movie)
      });*/
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value,
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          //if (this.state.query.length % 2 === 0) {
          //  this.getInfo();
          //caused errors
          //}
          console.log(this.state.query)
          this.getInfo(this.state)
          console.log(this.state.results)
        } else if (!this.state.query) {
        }
      }
    );
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={(input) => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    );
  }
}

export default Search;

//<Suggestions results={this.state.results} /> place above </form>