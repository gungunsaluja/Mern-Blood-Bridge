import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <div>
        <div className="header">
            <Header/>
        </div>
        <div className="content">
            {children}
        </div>

      
    </div>
  )
}

export default Layout
