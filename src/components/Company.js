import React, { Component } from 'react';

import { Sparklines, SparklinesLine } from 'react-sparklines';

class Company extends Component{
  //for trying to fetch the data for each component before it mounts
  // handleData(data){
  //   const info = data;
  // }
  // componentDidMount(){
  //   fetch("https://young-plains-68972.herokuapp.com/api/companies/"+this.props.ticker)
  //   .then(resp => resp.json())
  //   .then(resp => this.handleData(resp));
  // }

  //generate random colors for the graphs
  random(){

    let colors=["red", "green", "blue", "orange", "purple"];
    //create a random number between 0 and the length
    //of the colors array to use as an index
    let randomColor = Math.floor(Math.random()*colors.length)

    return (colors[randomColor]);

  }

  render(){

    const color = this.random();
    return(
      <div className="company">
        <h3>{this.props.name}, {this.props.ticker}</h3>
        <Sparklines data={this.props.prices} width={140} height={40} margin={5}>
          <SparklinesLine color= {color} />
        </Sparklines>
      </div>
    )
  }
}

export default Company;
