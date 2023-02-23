// Declare a store variable and assign it to the createStore() method, passing in the reducer as an argument.
const reducer = (state = 5) => {
    return state;
  }
  
  // Redux methods are available from a Redux object
  // For example: Redux.createStore()
  // Define the store here:
  
  const store=Redux.createStore(reducer)

//   Get State from the Redux Store
const store = Redux.createStore(
    (state = 5) => state
  );
    
  const currentState=store.getState()

//   Define a Redux Action

// Define an action here:

const action={
    type:'LOGIN'
  }

// Define an Action Creator

const action = {
    type: 'LOGIN'
  }
  // Define an action creator here:
  const actionCreator=()=>{
    return action
  }

//  Dispatch an Action Event 

const store = Redux.createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  
  // Dispatch the action here:
  
  console.log(store.dispatch(loginAction()))



// Handle an Action in the Store


  const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    // Change code below this line
    if(action.type ==='LOGIN'){
      return{
        login: true
      }
    }
    return state
  
    // Change code above this line
  };
  
  const store = Redux.createStore(reducer);
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };

//Use a Switch Statement to Handle Multiple Actions   

const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    // Change code below this line
    switch(action.type){
      case 'LOGIN':{
      return {
       authenticated: true
      }
      }
  
      case 'LOGOUT':{
     return {
     authenticated: false
      }
      }
  
      default:{
        return state
      }
    }
  
    // Change code above this line
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };

//   Use const for Action Types
const LOGIN='LOGIN'
const LOGOUT='LOGOUT'
// const ACTION={
//   LOGIN:'LOGIN',
//   LOGOUT:'LOGOUT'
// }

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};

// Register a Store Listener



// Combine Multiple Reducers
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count:counterReducer,
  auth:authReducer
})// Define the root reducer here

const store = Redux.createStore(rootReducer);

function loginState(){
  console.log(store.getState())
}

  console.log('initial State:', store.getState())

store.subscribe(loginState)

store.dispatch({type:LOGIN})



// Send Action Data to the Store
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:{
      return action.text
    }

    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type:ADD_NOTE,
    text:note
  }

  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
let fun=addNoteText('Hello!')
store.dispatch(fun);
console.log(store.getState());


// Write a Counter with Redux

const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = "DECREMENT"; // Define a constant for decrement action types

const counterReducer = ((state=0, action)=>{
  switch(action.type){
    case INCREMENT:
     return state + 1
    
    case DECREMENT:
     return state - 1
    
  }
  return state;

}); // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = ()=>({
    type:INCREMENT
  
}); // Define an action creator for incrementing

const decAction =  ()=>({
  
    type:DECREMENT
}); // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers

store.subscribe(()=>{
  console.log(store.getState())
})

// console.log(store.getState());

store.dispatch(incAction());
store.dispatch(incAction());
store.dispatch(decAction());
store.dispatch(decAction());


// Use the Spread Operator on Arrays

const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      return [...state, action.todo]
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);

store.subscribe(()=>{
  console.log(store.getState())
})

console.log(store.dispatch(removeItem(2)))


// Connect Redux to the Messages App
// 
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Define the Container component here:

const Container=connect(mapStateToProps,mapDispatchToProps)(Presentational)


class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Complete the return statement:
    return (
      <Provider store={store}>
      <Container/>
      </Provider>
    );
  }
};