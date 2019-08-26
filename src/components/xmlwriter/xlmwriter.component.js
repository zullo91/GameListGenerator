import React from "react";
import ReactDomServer from "react-dom/server";
import MyTextArea from "../textarea/textarea.component";

const XmlWriter = props => {
  const gameList = [];
  let xmlElements = "";
  const GameList = props => React.createElement("gameList", props);
  const Game = props => React.createElement("game", props);
  const Path = props => React.createElement("path", props);

  if (props.data) {
    props.data.map(f => {
      return gameList.push(f.path);
    });

    //Create XML Element
    xmlElements = '<?xml version="1.0"?>';
    xmlElements = xmlElements.concat(
      ReactDomServer.renderToStaticMarkup(
        <GameList>
          {gameList.map((g, i) => {
            console.log(g);
            return (
              <Game key={i}>
                <Path>{"./" + g}</Path>
              </Game>
            );
          })}
        </GameList>
      )
    );

    const downloadFile = data => {
      const element = document.createElement("a");
      const file = new Blob([data], {
        type: "text/xml"
      });
      element.href = URL.createObjectURL(file);
      element.download = "gamelist.xml";
      // Required for this to work in FireFox
      document.body.appendChild(element);
      element.click();
    };
  }

  console.log(xmlElements);
  return (
    <div>
      {xmlElements ? (
        <React.Fragment>
          <button onClick={() => this.downloadFile(xmlElements)}>
            Download gamelist.xml
          </button>
          <MyTextArea value={xmlElements} />
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default XmlWriter;
