import Navbar from "../../components/navbar/Navbar"
import "./Layout.scss"
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <div className="navabar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
