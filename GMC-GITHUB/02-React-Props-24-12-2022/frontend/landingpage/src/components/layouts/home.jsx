import Footer from "../footer"
import NavBar from "../nav-bar"
import React from "react"
const HomeLyout =({children})=>{
    return (
       <div className="App">
          <NavBar />
            {children}
            <Footer title="this is footer" description="this is footer description"  >
                <h1 className='text-white'>hello footer child</h1>
            </Footer>
       </div>
    )
}
export default HomeLyout