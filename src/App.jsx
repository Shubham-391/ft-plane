import { useEffect } from 'react';
import './App.css';
import Backtotop from './components/Backtotop';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Preloader from './components/Preloader';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
 useEffect(() => {
   AOS.init();
 }, []);
  return (
    <>
      <Preloader/>
      <Header />
      <Main />
      <Footer />
      <Backtotop/>
    </>
  )
}

export default App
