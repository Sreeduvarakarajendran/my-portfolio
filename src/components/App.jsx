import React from 'react'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import InfiniteScroll from './InfiniteScroll.jsx'
import Project from './Project.jsx'
import Footer from './Footer.jsx'
const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden 
                bg-gradient-to-b from-[#0B0B0F] to-[#12061a]">

  <div className="absolute inset-0 
                  bg-gradient-to-r 
                  from-[#613dc1] via-[#4e148c] to-[#2c0735]
                  opacity-20 blur-[180px]" />

  <div className="relative z-10">
     <Navbar />
    <section id = "hero">
      <Hero/>
        <InfiniteScroll/>
    </section>
   
    <section id = "projects"><Project/></section>
    <section id = "contact"> <Footer/></section>
   
  
  </div>

</div>
  )
}

export default App
