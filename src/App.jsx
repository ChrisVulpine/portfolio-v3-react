// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'


import './App.css'


function App() {

  return (
      <>
      <Header />
      <Outlet />
      <Footer />
   
      </>
   
  )
}

export default App
