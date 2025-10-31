import {Routes, Route, Link} from 'react-router-dom'
import Landing from './pages/Landing.jsx'
function App() {

  return (
    <>
      <header>
        <h1>Rick and Morty Webapp</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/characters/page/1">Characters</Link>
          <Link to="locations/page/1">Locations</Link>
          <Link to="/episodes/page/1">Episodes</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Landing />} />

        {/*Characters pages*/}
        {/*Locations pages*/}
        {/*Episodes pages*/}
        {/*404 page*/}

      </Routes>
     
    </>
  )
}

export default App
