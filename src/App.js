import React from 'react';
import './App.css';
import StarRating from './StarRating';
import UserList from './UsersList';



function App() { 
  return (
    <div className="App">
      <h1>Star Rating Component</h1>
      <StarRating length = {4}/>
      <h2>User List</h2>
      <UserList />
    </div>
  );
}

export default App;
