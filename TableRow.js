import React, { Component } from 'react';
  
  export default class TableRow extends Component {
    render() {
           
        let n = this.props.name;
        return (
          <tr>
            <td>{n.id}</td>
            <td>{n.name}</td>
            <td>{n.mobile}</td>
            <td>{n.date}</td>
            <td>{n.gender}</td>
            <td>{n.city}</td>
            <td>
              <button onClick={() => this.props.editCallback(n)}>Edit</button>
              <button onClick={() => this.props.deleteCallback(n)}>
                Delete
              </button>
            </td>
          </tr>
        );
    }
  }
  




