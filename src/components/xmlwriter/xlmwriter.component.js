import React from "react";
import ReactDomServer from "react-dom/server";

const XmlWriter = props => {
  const Game = props => React.createElement("game", props);
  const gameList = [];

  props.data.map(f => {
    return gameList.push(f.path);
  });

  const downloadTxtFile = data => {
    const element = document.createElement("a");
    const file = new Blob([data], {
      type: "application/xml"
    });
    element.href = URL.createObjectURL(file);
    element.download = "gameList.xml";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const elementXML = ReactDomServer.renderToStaticMarkup(
    gameList.map(g => {
      return <Game>{g}</Game>;
    })
  );

  return (
    <div>
      <button onClick={() => downloadTxtFile(elementXML)}>
        Download GameList.xml
      </button>
    </div>
  );
};

export default XmlWriter;
