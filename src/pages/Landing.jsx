import {useState, useEffect} from 'react'
import axios from 'axios'
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
      <div className='App'>
        <ul>
          {characters && characters.map((character) => <li key={character.id}>{character.name}</li>)}
        </ul>
      </div>
    )
  }

}
export default Landing
