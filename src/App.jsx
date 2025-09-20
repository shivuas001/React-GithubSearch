import axios from 'axios';
import { useState } from 'react';

const App = ()=> {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState({});

  const searchGithub = async (name) => {
    const { data } = await axios.get(`https://api.github.com/users/${name}`);
    console.log(data);

    setUser(data);
    
  }

 const searchUser = () => {
       searchGithub(username);
       console.log(username);
 }

  return(
    <>
    <h1>Github Search</h1>
    <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='Search Username'/>
    <button onClick={searchUser}>Search</button>


    <div>
    <img src={user.avatar_url} alt="" width="150px"/>
    <h2>{user.name}</h2>
    <p>{user.location}</p>
    <p>{user.bio}</p>
    </div>

    </>
  )
}


export default App;