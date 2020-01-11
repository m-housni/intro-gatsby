
import React from "react"
import Header from "./menu"
import Footer from "./footer"
import "../css/style.css"

const Layout = (props) => {
    return (
    <div>
        <Header />
        {props.children}
        <Footer />
    </div>
    )
}

export default Layout
