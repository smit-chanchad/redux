import React, { Component } from 'react'

export default class Editor extends Component {

    constructor(props) {
    super(props);
    this.state = {
      formData: {
        id: props.name.id || "",
        name: props.name.name || "",
        mobile: props.name.mobile || "",
        date: props.name.date || "",
        gender: props.name.gender || "",
        city: props.name.city || "",
      },
    };
}

handleChange = (ev) => {
    ev.persist();
    this.setState(state => state.formData[ev.target.name] = ev.target.value);
}

handleClick = () => {
  this.props.saveCallback(this.state.formData);
}

  render() {
    return (
      <div>
        <div>
          <label>ID</label>
          <input
            name="id"
            disabled
            value={this.state.formData.id}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label>Name</label>
          <input
            name="name"
            value={this.state.formData.name}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label>Mobile No.</label>
          <input
            name="mobile"
            value={this.state.formData.mobile}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label>Date</label>
          <input
            name="date"
            value={this.state.formData.date}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Gender</label>
          <input
            name="gender"
            value={this.state.formData.gender}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>City</label>
          <input
            name="city"
            value={this.state.formData.city}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button onClick={this.handleClick}>Save</button>
          <button onClick={this.props.cancelCallback}>Cancel</button>
        </div>
      </div>
    );
    
  }
}
