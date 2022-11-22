import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

const Layout = ({ children }) => {
  const year = new Date().getFullYear()

  return (
    <div className="layout">
      <Navbar />
      <div>{children}</div>
      <footer>
        <p>Copyright {year} My Website</p>
      </footer>
    </div>
  )
}

export default Layout
