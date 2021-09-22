import React, {useState, useEffect} from "react";

const UserList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(response => setData(response));
    }, []);

    return (
        <>
        <ul>
            {data.map(user => 
                <li key={user.id}>{user.login}</li>    
            )}
        </ul>
        <button onClick={() => setData([])}>Set Data</button>
        </>
    );
};

export default UserList;