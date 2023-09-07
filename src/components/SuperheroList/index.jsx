import React from 'react'
import { Link } from 'react-router-dom'

const SuperheroList = ({superheros}) => {

  if (!superheros || superheros.length === 0) {
    return (
      <>
      <div className="superhero-list">
        <p>No superhero found with this name</p>
      </div>
      </>
    )
  }

  return (
    <div className="superhero-list">
      <h2>Search Results:</h2>
      <ul>
        {superheros.map((superhero) => (
          <li key={superhero.id}>
            <Link className='superhero-link' to={`/superhero/${superhero.id}`}>{superhero.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SuperheroList
