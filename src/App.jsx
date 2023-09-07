import React from 'react'
import { Routes, Route } from 'react-router-dom'
import * as Pages from './pages'

import { NavBar } from './layout'
import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
        <Route index element={<Pages.Home />}/>

        <Route path="/search" element={<Pages.Search />}/>
        <Route path="/superhero/:id" element={<Pages.Superhero />}/>

        <Route path="*" element={<Pages.NotFound />}/>
        </Route> 
      </Routes>
    </>
  )
}

export default App
