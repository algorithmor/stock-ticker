import React, {Component} from 'react';
import {displayCompanies, trackCompany} from '../actions'
import { connect } from 'react-redux';

class SearchBar extends Component {

  //if the value of the search bar is not empty, send that value to the
  //url of the fetch request
  handleSearch(event){
    if(event.target.value !== '') {
      this.props.searchCompanies(event.target.value)
    }
  }

  render(){
    const potentials = this.props.display.map(company => <li key={company.ticker}
      onClick={() => this.props.trackCompany(company.ticker)}> <p> {company.name}, {company.ticker} </p> </li>)
    return(
      <section>
        <div>
            <input type='text' placeholder='Search Companies'
            onChange={ event => this.handleSearch(event)}/>
        </div>
        <div>
            <ul className="searchResults">
              {potentials}
            </ul>
        </div>
      </section>
    )
  }
}

//connect state
function mapState2Props(state){
  return{
    display: state.display,
  }
}

//connect actions
function mapDispatch2Props(dispatch){
  return{
    //to search companies in the api
    searchCompanies: function(text){
      fetch("https://young-plains-68972.herokuapp.com/api/autocomplete?q=" + text)
      .then(resp => resp.json())
      .then( resp =>
          dispatch(displayCompanies(resp))
      )
    },
    //to add a company and all its data to the tracked array in the store
    trackCompany: function(ticker){
      fetch("https://young-plains-68972.herokuapp.com/api/companies/" + ticker)
      .then(resp => resp.json())
      .then( resp => dispatch(trackCompany(resp)))
    }
    //for trying to fetch the data in the individual component, add just the
    // trackCompany: companyName => dispatch(trackCompany(companyName)),
  }
}



export default connect(mapState2Props, mapDispatch2Props)(SearchBar);
