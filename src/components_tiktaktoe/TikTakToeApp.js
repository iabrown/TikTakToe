import React from 'react';







const TikTakToeApp = () => {

  //Define the state properties here
  const [player, setPlayer] = React.useState(localStorage.getItem('player') || 0);
  const [icon, setIcon] = React.useState(localStorage.getItem('icon')|| 'minus square outline icon');

  //Icon variables
    const iconMinus = "minus square outline icon";
    const iconCircle = "circle outline icon";
    const iconX = "x icon";

    const gameBoard = document.getElementsByClassName('ui button');



  //Define the functions used in this app here
    //Player functions
      const onPlayerSelect = (event) => {
        (event.target.id=="buttonPlayer1") ? (setPlayer(1)) : (setPlayer(2))
      }
      const onPlayerReset = (event) => {
        setPlayer(0);
      }


    //Game Button functions
      const onButtonClick = (event) => {
        //Determine the turn event
        (player == 1) ? ( setPlayer1Turn(event) ) : ( setPlayer2Turn(event) )


      }

        //Player turns
        const setPlayer1Turn = (event) => {
          event.target.childNodes[0].className=iconX;
          setPlayer(2);
          checkWinCondition();
        }
        const setPlayer2Turn = (event) => {
          event.target.childNodes[0].className=iconCircle;
          setPlayer(1);
          checkWinCondition();

        }

        //Check for a win condition
        const checkWinCondition = () => {
          console.log("Checking for win condition...");

          const hashClass = [];
          for( let i = 3; i < gameBoard.length; i++){


            if( !hashClass[gameBoard[i].childNodes[0].className] ) {
              hashClass[gameBoard[i].childNodes[0].className] = [];
            }
            hashClass[gameBoard[i].childNodes[0].className].push(gameBoard[i].id);

          }
          console.log( hashClass );


          const scoreIDs = [];





          (player==1) ? (
            //Check Player 1 win condition
            console.log(gameBoard[3].childNodes)
          ) : ( (player==2)?(
            //Check Player 2 win condition
            console.log(gameBoard[4].childNodes)
          ):(
            //Throw an error, this should not be accessed.
            console.log("error.. this should not be accessed.")
          ) )

          console.log("Break...");
          console.log(" ");
          console.log(" ");
          console.log(" ");

        }



  return (
    <div id="wrapper">

      <br />
      <br />
      <div className="ui container" id="Players">
        <div className="ui three buttons">
          <button className="ui button" id="buttonPlayer1" onClick={onPlayerSelect}>Player 1</button>
          <button className="ui button" id="buttonPlayer2" onClick={onPlayerSelect}>Player 2</button>
          <button className="ui button" id="buttonPlayerReset" onClick={onPlayerReset}>Player Reset</button>
        </div>
        <p>Selected: Player: {player}</p>

      </div>

      <br />
      <br />

      { (player == 1 || player == 2) ? (

        <div className="ui container" id="TTTContainer">
          <div className="ui three buttons">
            <button className="ui button" id="1" onClick={onButtonClick}><i className={icon}></i></button>
            <button className="ui button" id="2" onClick={onButtonClick}><i className={icon}></i></button>
            <button className="ui button" id="3" onClick={onButtonClick}><i className={icon}></i></button>
          </div>

          <div className="ui three buttons">
            <button className="ui button" id="4" onClick={onButtonClick}><i className={icon}></i></button>
            <button className="ui button" id="5" onClick={onButtonClick}><i className={icon}></i></button>
            <button className="ui button" id="6" onClick={onButtonClick}><i className={icon}></i></button>
          </div>

          <div className="ui three buttons">
            <button className="ui button" id="7" onClick={onButtonClick}><i className={icon}></i></button>
            <button className="ui button" id="8" onClick={onButtonClick}><i className={icon}></i></button>
            <button className="ui button" id="9" onClick={onButtonClick}><i className={icon}></i></button>
          </div>


        </div>


      ) : (console.log("Nothing to render...")) }

    </div>

  );
}






export default TikTakToeApp;
