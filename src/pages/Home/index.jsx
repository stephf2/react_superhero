import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <h1>Welcome</h1>
        <Link to="/search">
          <button>Searh a superhero</button>
        </Link>
      </div>
    </>
  )
}

export default Home
