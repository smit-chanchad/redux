import React, { Component } from "react";
import { Display } from "../components/Display";

export default class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [
        {
          id: 1,
          name: "Smit",
          mobile: 2563956325,
          date: "12/11/2022",
          gender: "male",
          city: "surat",
        },
        {
          id: 2,
          name: "Rajvi",
          mobile: 8952956325,
          date: "22/11/2022",
          gender: "female",
          city: "mumbai",
        },
        {
          id: 3,
          name: "Meet",
          mobile: 8559564325,
          date: "16/11/2022",
          gender: "male",
          city: "vapi",
        },
      ],
    };
    this.idCounter = 4;
  }

  saveData = (collection, item) => {
    if (item.id === "") {
      console.log("item", item);
      item.id = this.idCounter++;
      if (collection === "names") {
        this.setState({ names: [...this.state.names, item] });
      }
      
    } else {
      this.setState(
        (state) =>
          (state[collection] = state[collection].map((stored) =>
            stored.id === item.id ? item : stored
          ))
      );
    }
  };

  deleteData = (collection, item) => {
    this.setState(
      (state) =>
        (state[collection] = state[collection].filter(
          (stored) => stored.id !== item.id
        ))
    );
  };
  render() {
    return (
      <div>
       
          <Display
            name="names"
            names={this.state.names}
            saveCallback={(n) => this.saveData("names", n)}
            deleteCallback={(n) => this.deleteData("names", n)}
          />
      
      </div>
    );
  }
}
