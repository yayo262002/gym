
import './App.css';
import Nav from './pages/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Suplemento from './pages/Suplemento';
import Home from './pages/Home';
import Footer from './pages/Footer';
import React, { useEffect, useState } from 'react';
import Proteina from './pages/Proteina';
import Creatina from './pages/Creatina';
import Aminoacidos from './pages/Aminoacidos';
import Vitaminas from './pages/Vitaminas';
import ProteinasDetailPage from './pages/ProteinasDetailPage';
import axios from 'axios';
import { JwtContext } from './shared/contexts/JwtContext'

const BASEURL ="http://localhost:8000";

function App() {
  const [camera, setCamera] = useState(false);
  const [products,setProducts] = useState([]);
  const [usuario, setusuario] = useState([]);

  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(()=> {

      const getData = async () => {
          const {data}= await axios.get(`${BASEURL}/users/${user}`);

          setusuario(data)
          
      };
      getData();
  
  },[]);
  
    useEffect(()=>{
        async function getData() {
            const {data} = await axios.get('http://localhost:8000/proteinas')
            setProducts(data);
            console.log(data);
        }getData() 
    },[])

  const [jwt, setJwt] = useState(localStorage.getItem('token') || null);

  return (
    <JwtContext.Provider value={{ jwt, setJwt, products, setProducts,camera,setCamera,usuario, setusuario }}>
    <Router>
    <Nav/>
  
    <Routes>
   
    <Route path='/'element={<Home/>} />
      <Route path='/suplemento'element={<Suplemento/>} />
      <Route path='/proteinas'element={<Proteina/>} />
      <Route
            path="/proteinas/:productNam"
            element={<ProteinasDetailPage/>}/>
      <Route path='/creatinas'element={<Creatina/>} />
      <Route path='/aminoacidos'element={<Aminoacidos/>} />
      <Route path='/vitaminas'element={<Vitaminas/>} />
    </Routes>
    <Footer></Footer>
  </Router>
  </JwtContext.Provider>
  );
  
}

export default App;
