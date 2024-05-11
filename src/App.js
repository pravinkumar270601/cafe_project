import React from 'react';
import SideNav from './Components/SideNav/SideNav';
import { Routes, Route, BrowserRouter } from "react-router-dom";




const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<SideNav />} />
      </Routes>
      </BrowserRouter>

 
    </div>
  );
};

export default App;