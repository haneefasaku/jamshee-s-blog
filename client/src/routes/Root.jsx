import React from 'react'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
    <header>
        <h1>Jamshee's Blog</h1>
    </header>
    <Outlet/>
    <footer></footer>
    </>
  )
}

export default Root