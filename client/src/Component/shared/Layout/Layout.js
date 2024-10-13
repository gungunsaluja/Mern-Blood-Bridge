import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div>
        <div className="header">
            <Header/>
        </div>
        <div className="row g-0">
        <div className="col-md-3">
            <Sidebar></Sidebar>
        </div>
        </div>
       
        <div className="content">
            {children}
        </div>

      
    </div>
  )
}

export default Layout
