import React, { Component } from 'react'
import { deleteName, saveName } from '../actions/modelActionCreators';
import Editor from './Editor';
import Table from './Table';
import { connect } from 'react-redux';
const mapStateToProps = (storeData) => ({
  names: storeData.names
})

const mapDispatchToProps = {
  saveCallback: saveName,
  deleteCallback: deleteName
}

const connectFunction = connect(mapStateToProps, mapDispatchToProps)

export const Display = connectFunction( class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditor: false,
      selectedName: null,
    };
  }

  startEditing = (name) => {
    this.setState({ showEditor: true, selectedName: name });
  };

  createName = () => {
    this.setState({ showEditor: true, selectedName: {} });
  };

  cancelEditing = () => {
    this.setState({ showEditor: false, selectedName: null });
  };

  saveName = (name) => {
    this.props.saveCallback(name);
    this.setState({ showEditor: false, selectedName: null });
  };

  render() {
    if (this.state.showEditor) {
      return (
        <Editor
          key={this.state.selectedName.id || -1}
          name={this.state.selectedName}
          saveCallback={this.saveName}
          cancelCallback={this.cancelEditing}
        />
      );
    } else {
      return (
        <div className="m-2">
          <Table
            names={this.props.names}
            editCallback={this.startEditing}
            deleteCallback={this.props.deleteCallback}
          />
          <div>
            <button onClick={this.createName}>Add</button>
          </div>
        </div>
      );
    }
  }
})
