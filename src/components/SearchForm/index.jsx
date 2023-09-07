import React, { useState } from 'react'

const SearchForm = ({ getSuperhero }) => {
  const [inputText, setInputText] = useState('')

  function handleInput(e) {
    setInputText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    getSuperhero(inputText)
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
