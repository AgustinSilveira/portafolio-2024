import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home'



function App() {


  return (
    <> 
   
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
      </Router>
       
    
  
      
    </>
  )
}

export default App
