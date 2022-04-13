import React from "react";

class Game extends React.Component{
    constructor(props){
        super(props);
        this.buttonRestart = false;
        this.emptyCount = 0;
        this.state = {
            player:[
                ["","",""],
                ["","",""],
                ["","",""]
            ]
        }
    }

    userPlayer(x,y){
        if(!this.winnerText && this.state.player[x][y] == ""){
            this.buttonRestart = true;
            this.setState({ player: this.state.player.concat(this.state.player[x][y] = "X") })
            this.computerPlayer();
        }
    }

    loopGame(){
        this.emptyCount = 0;
        for (let i = 0; i < 3; i++) {
            for (let k = 0; k < 3; k++) {
                if(this.state.player[i][k] == ""){
                    this.emptyCount++;
                }
            }
        }
        if(this.winner() == "X"){
            this.youwin++;
            this.winnerText = "You Win";
        }
        if(this.winner() == "O"){
            this.lose++;
            this.winnerText = "Lose";
        }
    }

    computerPlayer(){
        this.loopGame();
        this.winner();
        if(this.emptyCount === 0 && this.winner() != "X" && this.winner() != "O"){
            this.winnerText = "Draw";
            return false;
        }
        if(!this.winnerText){
            while(true){
                let randomComputer1 = Math.floor(Math.random()*3);
                let randomComputer2 = Math.floor(Math.random()*3);
                if(this.state.player[randomComputer1][randomComputer2] == ""){
                    this.state.player[randomComputer1][randomComputer2] = "O";
                    this.loopGame();
                    this.winner();
                    break;
                }
            }
        }        
    }

    winner(){
        for(let i=0; i<3; i++){
            if(this.state.player[i][0] && this.state.player[i][0] == this.state.player[i][1] && this.state.player[i][0] == this.state.player[i][2]){
                return this.state.player[i][0];
            }
            if(this.state.player[0][i] && this.state.player[0][i] == this.state.player[1][i] && this.state.player[0][i] == this.state.player[2][i]){
                return this.state.player[0][i];
            }
        }
        if(this.state.player[0][0] && this.state.player[0][0] == this.state.player[1][1] && this.state.player[0][0] == this.state.player[2][2]){
            return this.state.player[0][0];
        }
        if(this.state.player[0][2] && this.state.player[0][2] == this.state.player[1][1] && this.state.player[0][2] == this.state.player[2][0]){
            return this.state.player[0][2];
        }
    }

    gameReset(){
        this.buttonRestart = false;
        this.winnerText = "";
        this.emptyCount = 0;
        this.setState({
            player:[
                ["","",""],
                ["","",""],
                ["","",""]
            ]
        });
    }

    render(){
        return (
            <div className="Game">            
            <div id="board">
                <h1>{this.winnerText}</h1>
            <table>
            <thead>
                <tr id="row1">
                <td onClick={() => this.userPlayer(0,0)} className="square">{this.state.player[0][0]}</td>
                <td onClick={() => this.userPlayer(0,1)} className="square v">{this.state.player[0][1]}</td>
                <td onClick={() => this.userPlayer(0,2)} className="square">{this.state.player[0][2]}</td>
                </tr>
                <tr id="row2">
                <td onClick={() => this.userPlayer(1,0)} className="square h">{this.state.player[1][0]}</td>
                <td onClick={() => this.userPlayer(1,1)} className="square v h">{this.state.player[1][1]}</td>
                <td onClick={() => this.userPlayer(1,2)} className="square h">{this.state.player[1][2]}</td>
                </tr>
                <tr id="row3">
                <td onClick={() => this.userPlayer(2,0)} className="square">{this.state.player[2][0]}</td>
                <td onClick={() => this.userPlayer(2,1)} className="square v">{this.state.player[2][1]}</td>
                <td onClick={() => this.userPlayer(2,2)} className="square">{this.state.player[2][2]}</td>
                </tr>
            </thead>
            </table>
            {this.buttonRestart ? (
                    <button onClick={() => this.gameReset()} className="restartStyle">Restart</button>
                ) : ( "" )}
            </div>        
            </div>
        );
    }
}

export default Game
