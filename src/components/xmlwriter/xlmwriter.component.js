import React from "react";
import ReactDomServer from "react-dom/server";

const XmlWriter = props => {
  const gameList = [];
  let xmlElements = "";
  const GameList = props => React.createElement("gameList", props);
  const Game = props => React.createElement("game", props);
  const Path = props => React.createElement("path", props);

  const downloadTxtFile = () => {
    if (props.data) {
      props.data.map(f => {
        return gameList.push(f.path);
      });

      //Create XML Element
      xmlElements = ReactDomServer.renderToStaticMarkup(
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
      );

      console.log(xmlElements);

      const element = document.createElement("a");
      const file = new Blob([xmlElements], {
        type: "text/xml"
      });
      element.href = URL.createObjectURL(file);
      element.download = "gameList.xml";
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
    }
  };

  return (
    <div>
      <button onClick={() => downloadTxtFile()}>Download gamelist.xml</button>
    </div>
  );
};

export default XmlWriter;
