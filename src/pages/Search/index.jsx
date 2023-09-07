import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { SearchForm, SuperheroList } from '../../components'

const Search = () => {
  const [search, setSearch] = useState('')
  const [superheros, setSuperheros] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`https://superheroapi.com/api/access-token/search/${search.toLowerCase()}`)
        setSuperheros(response.data.results)
      } catch (err) {
        console.error('Error fetching superhero data:', err)
      }
    }

    if (search) {
      getData();
    }
  }, [search]);
    
  return (
    <>
    <div className='search-container'>
      <h1>Search a Superhero</h1>
      <SearchForm getSuperhero={setSearch}/>
      <SuperheroList superheros={superheros}/>
    </div>
    </>
  )
}

export default Search
