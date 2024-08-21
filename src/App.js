
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import FriendDetails from './Component/FriendDetails/FriendDetails';
import Nopage from './Component/Nopage/Nopage';

function App() {
  return (
    <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/home" element={<Home/>}/> 
   <Route path="/about/:id" element={<FriendDetails/>}/>
  <Route path="*" element={<Nopage/>}/>

</Routes>
 </BrowserRouter>
  );
}

export default App;
