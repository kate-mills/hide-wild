import React from "react"
import Navbar from "./Globals/Navbar"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

export default Layout
