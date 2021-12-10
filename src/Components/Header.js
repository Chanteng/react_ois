import React from 'react'
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wraper">
         <div className="main-info">
        <h1>Hello! Welcome to OIS_MEDIA <p>WE DESIGN AND PRINT</p> </h1>     
        <Typed 
        className="typed-text"
        strings={["Banners", "Stickers", "Invitation Cards", "Wedding Cards", "And Others..." ]}
        typeSpeed={100}
        backSpeed={80}
        loop
        />
        <a href="/order" className="btn-main-offer" style={{textDecoration: "none"}}>ORDER NOW!</a>
        </div>   
        </div>
    )
}

export default Header
