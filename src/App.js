import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {
    return (
      <h1>Going to display some text...</h1>
    );
  }

  getMorningGreeting() {
    return (
      <div>Good Morning...</div>
    );
  }

  getEveningGreeting() {
    return (
      <div>Good Evening...</div>
    );
  }

  showCompany(name, revenue) {
    return (
      <div id={name}> {name} makes {revenue} every year</div>
    );    
  }

  getClassName(temperature) {
    let word_to_render = ""
    if (temperature < 15){
      word_to_render = "freezing"
    }
    else if(15 <= temperature && temperature <= 30){
      word_to_render =  "fair"
    }
    else {
      word_to_render = "hell-scape"
    }
    return (
      <div id="weatherBox" class={word_to_render}>{word_to_render}</div>
    );    
  }

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]

    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            {this.getStuff()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {new Date().getHours() >= 12 ? this.getEveningGreeting() : this.getMorningGreeting() }
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {[this.getStuff(), this.getEveningGreeting(), this.getMorningGreeting()]}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {companies.map(c => this.showCompany(c.name, c.revenue))   }
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {this.getClassName(10)}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
