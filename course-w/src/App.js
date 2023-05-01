import Main from "./pages/Main/Main";
import {Route, useLocation} from "wouter";
import Cars from "./pages/Cars/Cars";
import Car from "./pages/Car/Car";
import {useEffect} from "react";
import cars from "./store/Cars";
import app from './store/App'
import AboutUS from "./pages/AboutUs/AboutUS";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error";


function App() {

    useEffect(()=>{
        cars.fetchCars();
        app.setMode()
    },[])

    const [ pathname ] = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    window.onresize=()=>{
        app.setMode()
    }


  return (
      <>
          <Navbar/>
          <Route path="/"><Main /></Route>
          <Route path="/cars/:brand">{({brand}) => <Cars brand={brand}/>}</Route>
          <Route path="/cars/"><Cars brand={""}/></Route>
          <Route path="/car/:id">{({id}) => <Car id={id}/>}</Route>
          <Route path="/about"><AboutUS/></Route>
          <Route path="/error/"><Error/></Route>
          <Footer/>
      </>

  );
}

export default App;
