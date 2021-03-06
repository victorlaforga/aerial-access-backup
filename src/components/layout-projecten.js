import React from "react"
import Navigation from "./navigation"
import "../styles/styles.scss"
import Banner from "./banner-desktop"
import Footer from "./footer"
import BannerPage from "./banner-page"
import IntroOption from "./intro-options"
import Project from "./projecten/project"

const StyledLayout = {
  width: "100%",
  minHeight: "100vh",
  margin: "0 auto",
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  gridTemplateColumns: "100%"
}

const LayoutProjecten = ({ children }) => {
  return (
    <div style={StyledLayout}>

      <Navigation />
     <Banner />
  <BannerPage />
     <IntroOption />
    <Project />
    <Project />
    <Project />
<Footer />
</div>
  )
}

export default LayoutProjecten