import React from 'react'
import { Link } from 'react-router-dom'

const SuperheroList = ({superheros}) => {
  return (
    <div className="superhero-list">
      <h2>Search Results:</h2>
      <ul>
        {superheros.map((superhero) => (
          <li key={superhero.id}>
            <Link to={`/superhero/${superhero.id}`}>{superhero.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SuperheroList
