import React, { useState } from 'react'
import { useSearch } from '../../contexts'

const SearchForm = () => {
  const { setSearch, inputText, setInputText } = useSearch()

  function handleInput(e) {
    setInputText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSearch(inputText)
    setInputText('')
  }

  return (
    <form
      aria-label='search superhero'
      role="search"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="superhero"
        onChange={handleInput}
        value={inputText}
        placeholder='Search for a superhero'
        required
      />
      <input className='search-btn' type="submit" value="Search" />
    </form>
  )
}

export default SearchForm
