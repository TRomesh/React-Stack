import {createStore} from "react-redux";

const reducer = function(state,action) {
    if(action.type === "INC"){
      return state+action.payload;
    }
    if(action.type === "DEC"){
       return state-action.payload;
    }
    return state;
}

const store = createStore(reducer,0);

store.subscribe(()=>{
  console.log('store changed',store.getState());
});

store.dispatch({type:"INC",value:1})
store.dispatch({type:"INC",value:32})
store.dispatch({type:"INC",value:21})
store.dispatch({type:"INC",value:10})
store.dispatch({type:"INC",value:1000})
