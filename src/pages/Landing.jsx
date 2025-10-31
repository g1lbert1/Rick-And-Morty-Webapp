import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const Landing = () => {
  const [loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState(undefined)
  useEffect(() => {
    console.log('useEffect has been called')
    const fetchCharacterData = async () => {
      try{
        const {data} = await axios.get('https://rickandmortyapi.com/api/character')
        setCharacters(data.results);
        setLoading(false)
      }catch(e){
        console.log(e)
      }
    }
    fetchCharacterData()
  }, [])
  if(loading){
    return <div>Loading...</div>
  }else{
    return (
      <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
        <h1>Welcome!</h1>
        <p>This is the Rick and Morty WebApp! It utilizes the Rick and Morty API to display characters, locations, and episodes. Check it out!!</p>
        <p>Browse:</p>
        <ul>
          <li>
            <Link to="/characters/page/1">Characters</Link>
          </li>
          <li>
            <Link to="/locations/page/1">Locations</Link>
          </li>
          <li>
            <Link to="/episodes/page/1">Episodes</Link>
          </li>
        </ul>
      </div>
    )
  }

}
export default Landing
