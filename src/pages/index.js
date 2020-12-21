import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

const Home = () => {
  const [isOpen, setIsopen] = useState(false)
  const toggleSidebar = () => {
    setIsopen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  )
}

export default Home
