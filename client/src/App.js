import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {useState} from 'react'
import AllPirates from './components/AllPirates'
import AddPirate from './components/AddPirate';
import OnePirate from './components/OnePirate';


function App() {
  const [pirates,setPirates]= useState([])
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element = {<Navigate to="/pirates" />} path="/" />
        <Route element={< AllPirates pirates={pirates} setPirates={setPirates} />} path="/pirates" />
        <Route element={< AddPirate pirates={pirates} setPirates={setPirates}/>} path="/pirates/new"/>
        <Route element={< OnePirate pirates={pirates} setPirates={setPirates} />} path="/pirates/:id" />        
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
