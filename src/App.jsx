import { useState } from 'react'
import './App.css'
import Router from './Router.component'

export const pages = ["Home","About","Contact"]
export default function App() {
  const [page, setPages] = useState("Home")

  return (
    <div className="App">
      {
        pages.map(pageName =>
          <button onClick={()=>{setPages(pageName)}}>{pageName}</button>)
      }
      <Router page={page}/>
    </div>
  )
}
