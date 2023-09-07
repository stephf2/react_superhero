import React from 'react'
import { Link } from 'react-router-dom'

const SuperheroItem = ({ superhero }) => {
  return (
    <>
      <h2>{superhero.name}</h2>
      <img src={superhero.image.url} alt={`Image of ${superhero.name}`} />
      <p>Power Stats:</p>
        <ul>
          {Object.entries(superhero.powerstats).map(([stat, value]) => (
            <li key={stat}>
              {`${stat.charAt(0).toUpperCase() + stat.slice(1)}: ${value}`}
            </li>
          ))}
        </ul>
      <Link to="/search">
          <button>Back to Search</button>
      </Link>
    </>
  )
}

export default SuperheroItem
