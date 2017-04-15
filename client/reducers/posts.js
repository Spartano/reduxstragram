//a reducer takes in two things

// 1. the action
// 2. copy of current state

 function posts(state = [], action) {
//state[action.i] is the post we want to modify
  switch(action.type) {
    case "INCREMENT_LIKES" :
    //return an updated state
    const i = action.index;
    return [
      ...state.slice(0,i),
       {...state[i], likes: state[i].likes + 1},
      ...state.slice(i+1)
    ]
    default:
      return state;
  }

}

export default posts
