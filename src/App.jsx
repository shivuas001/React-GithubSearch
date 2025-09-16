import axios from 'axios';
import { useState } from 'react';

const App = ()=>{


  const [username, setUsername] = useState('shivuas001')
  
  const [user, setUser] = useState({});

  const searchGithub = async (name) => {
    const { data } = await axios.get(`https://api.github.com/users/${name}`);

    console.log(data);

    setUser(data);
  }

searchGithub(username);

  return(
    <>
    <img src={user.avatar_url} alt="" width="150px"/>
    <h1>Github Search</h1>
    <h2>{user.name}</h2>
    <p>{user.location}</p>
    <p>{user.bio}</p>
    </>
  )
}


export default App;