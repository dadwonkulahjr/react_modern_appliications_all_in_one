import React from "react";
import attactImage from "../../../images/attack.jpg";
import defenceImage from "../../../images/defend.jpg";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefence = this.handleDefence.bind(this);
    this.handleRandomPlay = this.handleRandomPlay.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      counter: 0,
      gameStatus:"",
      lastPlay:""
    };
  }
  handleAttack = () => {
    this.setState((prevState) => {
      let newCount = prevState.counter + Math.round(Math.random() * 10);
      return {
        counter: newCount,
        gameStatus:newCount>=10? "You won!!!!" : prevState.gameStatus,
        lastPlay:"Attack"
      };
    });
    //    this.setState({counter: this.state.counter + 10});
    //    this.setState({counter: this.state.counter + 110});
    // this.state.counter = 2;
  };

  handleDefence = () => {
    this.setState((prevState) => {
      let newCount = prevState.counter - Math.round(Math.random() * 10);
      return {
        counter: newCount,
        gameStatus:newCount<=-10? "You Lose!!!!" : prevState.gameStatus,
        lastPlay:"Defend"
      };
    });
    // alert('Defending!!!!!!!!!!!!!!');
    // this.setState({counter: this.state.counter - 1});
  };

  handleRandomPlay = () => {
    this.setState(() => {
      let playMode = Math.round(Math.random());
      if (playMode === 0) {
        this.handleAttack();
      }
      else{
        this.handleDefence();
      }
    });
  };

  handleReset = () =>{
    this.setState({counter: 0, gameStatus:"", lastPlay:""});
    // alert('Reset');
  }
  render() {
    return (
      <div className="container text-center mt-5 text-white">
        <h1>Game Score: {this.state.counter}</h1>
        <p>You win at +10 points and lose at -10 points!</p>
        <br />
        <h3>Last Play: {this.state.lastPlay}</h3>
        <br />
        <h3>Game Status: {this.state.gameStatus}       
        </h3>
        <div className="row offset-sm-12 offset-lg-4 offset-md-12">
          <img
            alt="Handle defence"
            onClick={this.handleAttack}
            src={attactImage}
            className="img-fluid m-1 rounded"
            style={{
              width: "200px",
              border: "1px solid green",
              cursor: "pointer",
              padding: "10px",
            }}
          />
          <img
            alt="Handle attack"
            onClick={this.handleDefence}
            src={defenceImage}
            className="img-fluid m-1 rounded"
            style={{
              width: "200px",
              border: "1px solid red",
              cursor: "pointer",
              padding: "10px",
            }}
          />
        </div>
        <div className="row col-sm-12 col-lg-4 mt-2 offset-sm-12 offset-lg-4 offset-md-12 text-center align-center">
          <button
            className="btn btn-secondary btn-lg"
            onClick={this.handleRandomPlay}
          >
            Random Play
          </button>
        </div>

        <div className="row col-sm-12 col-lg-4 mt-2 offset-sm-12 offset-lg-4 offset-md-12 text-center align-center">
          <button className="btn btn-warning btn-lg" onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
