import React, { Component } from "react";
import "./App.css";
import DropZone from "./components/dropzone/dropzone.component";
import XmlWriter from "./components/xmlwriter/xlmwriter.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }

  render() {
    const getFiles = _files => {
      this.setState({ files: _files });
    };

    return (
      <div className="App">
        <header className="App-header">
          <DropZone getFiles={getFiles} />
          {this.state.files && this.state.files.length > 0 ? (
            <XmlWriter data={this.state.files} />
          ) : null}
        </header>
      </div>
    );
  }
}

export default App;
