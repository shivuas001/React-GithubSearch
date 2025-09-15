import axios from 'axios';

const App = ()=>{


  const searchGithub = async (username) => {
    const { data } = await axios.get('https://api.github.com/users/shivuas001');

    console.log(data);
  }

searchGithub();

  return(
    <>
    <h1>Github Search</h1>
    </>
  )
}


export default App;