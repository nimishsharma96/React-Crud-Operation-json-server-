
import './App.css';
import Home from './components/Home';
import Update from './components/Update';
import Read from './components/Read';
import { Route , Routes } from 'react-router-dom';


function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>}   />
      <Route path='/update/:id' element={<Update/>}   />
      <Route path='/read' element={<Read/>}   />
     </Routes>
    </div>
  );
}

export default App;
