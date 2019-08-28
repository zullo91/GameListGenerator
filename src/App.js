import React, { Component } from "react";
import "./App.css";
import DropZone from "./components/dropzone/dropzone.component";
import XmlWriter from "./components/xmlwriter/xlmwriter.component";
import DropZoneAndMerge from "./components/dropzone/dropandmerge/dropzoneandmerge.component";
import { SvgWrapper, AppMainWrapper } from "./customStyle/customApp.style";
import { onInitAnimation } from "./customStyle/svgAnimation";
import Download from "./components/actions/download.component";
import MyTextArea from "./components/textarea/textarea.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      gameElements: "",
      documentElements: "",
      showDownload: false,
      showMerge: false,
      stopWriter: false
    };
  }

  componentDidMount() {
    onInitAnimation();
  }

  render() {
    const getFiles = _files => {
      this.setState({ files: _files, showDownload: true, showMerge: true });
    };

    const setDocumentElements = _elements => {
      this.setState({ documentElements: _elements }, () => {
        /*console.log("state elements: ", this.state.elements);*/
      });
    };

    const setGameElements = _elements => {
      this.setState({ gameElements: _elements }, () => {
        /*console.log("state elements: ", this.state.elements);*/
      });
    };

    const lockWriter = () => {
      this.setState({ stopWriter: true });
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
          <div className="section">
            <p>Create gamelist.xml</p>
            <DropZone getFiles={getFiles} />
          </div>
          {this.state.files &&
          this.state.files.length > 0 &&
          !this.state.stopWriter ? (
            <XmlWriter
              data={this.state.files}
              setDocumentElements={setDocumentElements}
              setGameElements={setGameElements}
              lockWriter={lockWriter}
            />
          ) : null}
          {this.state.showDownload && this.state.documentElements ? (
            <React.Fragment>
              <Download
                fileType="text/xml"
                fileDownloadName="gamelist.xml"
                elements={this.state.documentElements}
                text="Download NEW gamelist.xml file"
              />
              <MyTextArea value={this.state.documentElements} />
            </React.Fragment>
          ) : null}
          {this.state.showMerge && this.state.gameElements ? (
            <Download
              fileType="text/xml"
              fileDownloadName="gamelist.xml"
              elements={this.state.gameElements}
              text="Download MERGED gamelist.xml file"
            />
          ) : null}
          {this.state.gameElements ? (
            <div className="section">
              <p>Merge into existent gamelist.xml</p>
              <DropZoneAndMerge elements={this.state.gameElements} />
            </div>
          ) : null}
        </AppMainWrapper>
        <div className="App-footer">
          <p>Powered by @zullo</p>
        </div>
      </div>
    );
  }
}

export default App;
