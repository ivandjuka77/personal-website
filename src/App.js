import React from 'react';

import { Header, Projects, About, Contact } from './container'

import { Navbar } from './components'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App