import React, {useState} from 'react'
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import GlobalStyle from "./Styles/Global";
import DescCourse from "./Components/DescCourse";
import Footer from "./Components/Footer";

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <React.Fragment>
      <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar} />
      <GlobalStyle/>
      <DescCourse/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
