import React, { Component } from 'react'
import TableRow from './TableRow'

export default class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile No</th>
            <th>Date</th>
            <th>Gender</th>
            <th>City</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.names.map((n) => (
            <TableRow
              name={n}
              key={n.id}
              editCallback={this.props.editCallback}
              deleteCallback={this.props.deleteCallback}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
