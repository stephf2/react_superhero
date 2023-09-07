import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Superhero = () => {
  const { id } = useParams()
  const [superhero, setSuperhero] = useState(null);
  
  useEffect(() => {
    async function getHeroData() {
      try {
        const response = await axios.get(`https://www.superheroapi.com/api.php/access-token/${id}`)
        setSuperhero(response.data)
      } catch (error) {
        console.error('Error getting hero data:', error)
      }
    }

    if (id) {
      getHeroData();
    }
  }, [id]);


  return (
    <>
    <div className='superhero-container'>
      <div>
        {superhero ? (
          <>
            <h2>{superhero.name}</h2>
            <img src={superhero.image.url} alt={`Image of ${superhero.name}`} />
            {/* <p>Power states - strength: {superhero.powerstats.strength}</p> */}
            <p>Power Stats:</p>
            <ul>
              {Object.entries(superhero.powerstats).map(([stat, value]) => (
                <li key={stat}>
                  {`${stat.charAt(0).toUpperCase() + stat.slice(1)}: ${value}`}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>Loading hero data...</p>
        )}
        <Link to="/search">
            <button>Back to Search</button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Superhero
