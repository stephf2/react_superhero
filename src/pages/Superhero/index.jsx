import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { SuperheroItem } from '../../components'
import { useSuperhero } from '../../contexts/superhero'

const Superhero = () => {
  const { id } = useParams()
  const {superhero, setSuperhero} = useSuperhero()
  // const [superhero, setSuperhero] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  
  useEffect(() => {
    async function getHeroData() {
      try {
        const response = await axios.get(`https://www.superheroapi.com/api.php/3724934554401064/${id}`)
        setSuperhero(response.data)
        setLoading(false)
        setError('')
      } catch (err) {
        setLoading(false)
        setError(err.message)
      }
    }

    if (id) {
      getHeroData()
    }
  }, [id])

  const errorOrsuperhero = error? 
    (  
      <>
      Error getting superhero data, please refresh page 
      <Link to="/search" style={{textDecoration:'none', cursor:'pointer', fontSize:'20px' }}> &#8594; Back to search page</Link>
      </>
    )
    : <SuperheroItem/>

  return (
    <>
      <div className='superhero-container'>   
        {loading? <p>Loading superhero data...</p> : errorOrsuperhero}
      </div>
    </>
  )
}

export default Superhero
