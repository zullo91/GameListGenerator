import React, { Component } from "react";
import "./App.css";
import DropZone from "./components/dropzone/dropzone.component";
import XmlWriter from "./components/xmlwriter/xlmwriter.component";
import DropZoneAndMerge from "./components/dropzone/dropandmerge/dropzoneandmerge.component";
import { SvgWrapper, AppMainWrapper } from "./customStyle/customApp.style";
import { onInitAnimation } from "./customStyle/svgAnimation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }

  componentDidMount() {
    onInitAnimation();
  }

  render() {
    const getFiles = _files => {
      this.setState({ files: _files });
    };

    return (
      <div className="App">
        <SvgWrapper>
          <svg viewBox="0 0 800 400" className="svg">
            <path
              id="curve"
              fill="#50c6d8"
              d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z"
            ></path>
          </svg>
        </SvgWrapper>
        <div className="App-header">
          <h1>This is a header title</h1>
          <h3>Here you are, scroll down.</h3>
        </div>
        <p>And the main section.</p>
        <AppMainWrapper className="App-main">
          <DropZone getFiles={getFiles} />
          <DropZoneAndMerge />
        </AppMainWrapper>
        <div className="App-footer">
          {this.state.files && this.state.files.length > 0 ? (
            <XmlWriter data={this.state.files} />
          ) : null}
          <p>Powered by @zullo</p>
        </div>

        {/* <div className="container">
          <div className="section">
            <DropZone getFiles={getFiles} />
          </div>
          <div className="section">
            <DropZoneAndMerge />
          </div>
        </div>
        {/* End container */}
      </div>
    );
  }
}

export default App;
