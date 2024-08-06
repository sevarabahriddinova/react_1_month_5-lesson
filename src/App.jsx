 
import './App.css'
import Home from './routes/Home';
import About from './routes/About';
import { Routes,Route} from 'react-router-dom';
import Nav from './components/Nav';
function App() {
 
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about/:id" element={<About/>}/>
      
      </Routes>
    </>
  )
}

export default App
