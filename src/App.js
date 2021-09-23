import React from 'react';
import './App.css';
import StarRating from './StarRating';
import UserList from './UsersList';
import TellMessage from './TellMessage';
import ColorSound from './ColorSound';

function App() { 
  return (
    <div className="App">
      <h1>Star Rating Component (useState)</h1>
      <StarRating length = {4}/>
      <h1>User List (useEffect)</h1>
      <UserList />
      <h1>Tell Message (useReducer)</h1>
      <TellMessage />
      <h1>Color of the sound (useRef)</h1>
      <ColorSound />
    </div>
  );
}

export default App;
