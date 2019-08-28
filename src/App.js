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
      newDocumentElements: "",
      mergedDocumentElements: "",
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

    const setNewDocumentElements = _elements => {
      this.setState({ newDocumentElements: _elements }, () => {
        /*console.log("state elements: ", this.state.elements);*/
      });
    };

    const setGameElements = _elements => {
      this.setState({ gameElements: _elements }, () => {
        /*console.log("state elements: ", this.state.elements);*/
      });
    };

    const setMergedDocumentElements = _elements => {
      this.setState({ mergedDocumentElements: _elements }, () => {
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
            <DropZone onDropCallback={getFiles} />
          </div>
          {this.state.files &&
          this.state.files.length > 0 &&
          !this.state.stopWriter ? (
            <XmlWriter
              data={this.state.files}
              setDocumentElements={setNewDocumentElements}
              setGameElements={setGameElements}
              lockWriter={lockWriter}
            />
          ) : null}
          {this.state.showDownload && this.state.newDocumentElements ? (
            <React.Fragment>
              <Download
                fileType="text/xml"
                fileDownloadName="gamelist.xml"
                elements={this.state.newDocumentElements}
                text="Download NEW gamelist.xml file"
              />
              <MyTextArea value={this.state.newDocumentElements} />
            </React.Fragment>
          ) : null}
          {this.state.showMerge && this.state.gameElements ? (
            <Download
              fileType="text/xml"
              fileDownloadName="gamelist.xml"
              elements={this.state.mergedDocumentElements}
              text="Download MERGED gamelist.xml file"
            />
          ) : null}
          {this.state.gameElements ? (
            <div className="section">
              <p>Merge into existent gamelist.xml</p>
              <DropZoneAndMerge
                elements={this.state.gameElements}
                onDropCallback={setMergedDocumentElements}
              />
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
