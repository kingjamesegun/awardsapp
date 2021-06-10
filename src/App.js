import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
import gsap from 'gsap';
import "./styles/App.css";
import Header from './components/Header';
import Nav from './components/Nav'


//pages
import Home from './Pages/Home';
import About from './Pages/About';
import Approach from './Pages/Approach';
import CaseStudies from './Pages/CaseStudies';
import Services from './Pages/Services';


// Route Array
const routes = [
  {path: "/", name: "Home", Component: Home},
  {path: "/case-studies", name: "Case Studies", Component: CaseStudies},
  {path: "/approach", name: "Approach", Component: Approach},
  {path: "/about-us", name: "About", Component: About},
  {path: "/services", name: "Services", Component: Services},

]

function debounce (fn, ms){
  let timer;
  return ()=>{
    clearTimeout(timer);
    timer = setTimeout(()=>{
      timer=null;
      fn.apply(this, arguments);
    }, ms)
  }
}

function App() {
  // to prevent flash to happen
  gsap.to("body", 0, {css: {visibility : "visible"}})
  
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

   

    const debounceHandleResize = debounce(function handleResize(){
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth

      })

    }, 1000)

    window.addEventListener("resize", debounceHandleResize);

    return()=>{
      window.removeEventListener("resize", debounceHandleResize);
    }

  }, []);



  return (
    <>
      <Header/>
      {console.log(dimensions.width)}
      <div className="App">
        {routes.map(({path, Component})=>(
          <Route key={path} exact path={path}>
            <Component/>
          </Route>)
        )}
      </div>
      <Nav/>
    </>
  );
}

export default App;
