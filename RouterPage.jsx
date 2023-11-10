import React from 'react'
import "./crud.css"
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import FormPage from './FormPage'
import Details from './Details'

export default function RouterPage() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
  <Route index path="/" element={ <FormPage />  } />
  <Route exact path="/details" element={ <Details />  } />

        </Routes>
        </BrowserRouter>

    </div>
  )
}
