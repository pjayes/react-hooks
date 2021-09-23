import React from 'react';
import './App.css';
import StarRating from './StarRating';
import UserList from './UsersList';
import TellMessage from './TellMessage';

function App() { 
  return (
    <div className="App">
      <h1>Star Rating Component (useState)</h1>
      <StarRating length = {4}/>
      <h1>User List (useEffect)</h1>
      <UserList />
      <h1>Tell Message (useReducer)</h1>
      <TellMessage />
    </div>
  );
}

export default App;
