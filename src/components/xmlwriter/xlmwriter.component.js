import React, { useEffect } from "react";
import ReactDomServer from "react-dom/server";
import beautify from "xml-beautifier";

const XmlWriter = props => {
  var setGameElements = props.setGameElements;
  var setDocumentElements = props.setDocumentElements;
  var lockWriter = props.lockWriter;
  var data = props.data;

  useEffect(() => {
    let documentElements = "";
    let gameElements = "";
    const gameList = [];
    const GameList = props => React.createElement("gameList", props);
    const Game = props => React.createElement("game", props);
    const Path = props => React.createElement("path", props);
    const Name = props => React.createElement("name", props);

    console.log("[XMLWriter]");

    if (data) {
      data.map(f => {
        return gameList.push(f.path);
      });

      var gameListMap = gameList.map((g, i) => {
        return (
          <Game key={i}>
            <Path>{"./" + g}</Path>
            <Name>{g.replace(/\.[^/.]+$/, "")}</Name>
          </Game>
        );
      });

      gameElements = ReactDomServer.renderToStaticMarkup(
        <React.Fragment>{gameListMap}</React.Fragment>
      );

      //Create XML Element
      documentElements = '<?xml version="1.0"?>';
      documentElements = documentElements.concat(
        ReactDomServer.renderToStaticMarkup(<GameList>{gameListMap}</GameList>)
      );
      documentElements = beautify(documentElements);

      setGameElements(gameElements);
      setDocumentElements(documentElements);
      lockWriter();
    }
  }, [setGameElements, setDocumentElements, data, lockWriter]);

  return null;
};

export default XmlWriter;
