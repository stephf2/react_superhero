import React from 'react'
import { Link } from 'react-router-dom'
import { useSearch } from '../../contexts'


const SuperheroList = () => {
  const { superheros } = useSearch();


  if (!superheros || superheros.length === 0) {
    return (
      <>
      <div className="superhero-list">
        No superhero found with this name 
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
