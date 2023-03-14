import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Project5 from "./pages/Project5";
import Project6 from "./pages/Project6";

function App() {
  return (
    <Router>
      <div >
        <Routes>
         <Route path='/' element={<Home/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
          <Route path='/project1' element={<Project1/>}></Route>
          <Route path='/project2' element={<Project2/>}></Route>
          <Route path='/project3' element={<Project3/>}></Route>
          <Route path='/project4' element={<Project4/>}></Route>
          <Route path='/project5' element={<Project5/>}></Route>
          <Route path='/project6' element={<Project6/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
