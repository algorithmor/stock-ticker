import { createStore } from 'redux';


function reducer(state, action){

  console.log(action);


  if (action.type === 'DISPLAY'){
    return{
      //add the items that return from the search to the display array
      display: action.payload,
      tracked: state.tracked,
    }
  }

  if (action.type === 'TRACK'){
      console.log(state.tracked);
    return{
      //add the newly tracked company to the
      //list of tracked companies
      display: state.display,
      tracked: state.tracked.concat([action.payload]),
    }
  }
  return state;
}

export default createStore(reducer, {
  display: [],
  tracked: [],
});
