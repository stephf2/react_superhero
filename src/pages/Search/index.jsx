import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { SearchForm, SuperheroList } from '../../components'

const Search = () => {
  const [search, setSearch] = useState('')
  const [superheros, setSuperheros] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`https://www.superheroapi.com/api.php/3724934554401064/search/${search.toLowerCase()}`)
        setSuperheros(response.data.results)
        setLoading(false)
        setSearch('')
        setError('')
      } catch (err) {
        setError(err.message)
        setSearch('')
      }
    }

    if (search) {
      getData();
    }
  }, [search]);


    
  const errorOrsuperheroList = error? 
  'Error getting superhero data, please refresh page' 
  : <SuperheroList superheros={superheros}/>

  return (
    <>
    <div className='search-container'>
      <h1>Search a Superhero</h1>
      <SearchForm getSuperhero={setSearch}/>
      {loading? search && <p>Loading...</p> : errorOrsuperheroList}
    </div>
    </>
  )
}

export default Search
