import React, { Component } from 'react';

import Company from './Company';
//import goodies from redux
import { connect } from 'react-redux';

//import actions
import {trackCompany} from '../actions';

class CompanyDisplay extends Component{

  render(){

    const tracked = this.props.tracked.map( selected => <Company key={selected.ticker} name={selected.name} ticker={selected.ticker}
        prices={selected.prices}/> )

    return(
      <section>
          {tracked}
      </section>
    )
  }
}
//retrieve the state data from the
function mapState2Props(state){
  return{
    tracked: state.tracked,
  }
}

function mapDispatch2Props(dispatch){
  return{

    trackCompany: companyName => dispatch(trackCompany(companyName)),
  }
}



export default connect(mapState2Props, mapDispatch2Props)(CompanyDisplay);
