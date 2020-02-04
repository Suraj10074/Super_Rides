import React from 'react'
import Home_carousel from './Home_carousel'
import Footer from './Footer'
import Home_Content from './Home_Content'
const Home = () => {
    return (
      <div style={{marginTop:"100px"}}>
      <Home_carousel />
      <Home_Content />
      <div style={{clear:"both",marginTop:"30px"}}>
          <Footer />
      </div>
     </div>
     );
    }
export default Home;