import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <ul>
        <li><Link to="/lista-links">Listar links</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
    </ul>
  )
}

export default Home