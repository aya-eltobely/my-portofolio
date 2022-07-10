import Nav from "./components/navbar/nav";
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Home from "./components/home/home";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";


function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Nav />

        <Routes>

          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/skills' element={ <Skills /> } />
          <Route path='/portfolio' element={ <Portfolio /> } />
          <Route path='/contact' element={ <Contact /> } />



        </Routes>
      
      </BrowserRouter>
      

    </div>
  );
}

export default App;
