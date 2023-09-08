import React from 'react'
import { Link } from 'react-router-dom'
import { useSuperhero } from '../../contexts/superhero'

const SuperheroItem = () => {
  const { superhero } = useSuperhero()
  return (
    <>
      <img src={superhero.image.url} alt={`Image of ${superhero.name}`} />
      <div className='superhero-info'>
        <h2>{superhero.name}</h2>
        <p>Biography</p>
          <ul>
            {Object.entries(superhero.biography).map(([stat, value]) => (
              <li key={stat}>
                {`${stat.charAt(0).toUpperCase() + stat.slice(1)}: ${value}`}
              </li>
            ))}
          </ul>
        <Link to="/search" style={{textDecoration:'none'}}>
            <button>Back to Search</button>
        </Link>
      </div>

    </>
  )
}

export default SuperheroItem
