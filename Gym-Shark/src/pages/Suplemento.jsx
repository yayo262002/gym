
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Suplemento.scss";

const Suplemento = () => {
  const BASEURL ="http://localhost:8000";
  const [productos, setproductos] = useState([]);

useEffect(()=> {

  const getData = async () => {
      const {data}= await axios.get(`${BASEURL}/proteinas`);
    console.log(productos);
      setproductos(data)
      console.log(data);
      
  };
  getData();

},[]);
  return (
    <>
    <div className="todo-suplemento">
    <ul className='nav-home-ul'>
            
            <li>
            <Link to="/proteinas">Proteinas</Link>
            </li>
            <li>
            <Link to="/creatinas">Creatinas</Link>
            </li>
            <li>
            <Link to="/aminoacidos">Aminoacidos</Link>
            </li>
            <li>
            <Link to="/vitaminas">Vitaminas</Link>
            </li>
  </ul>
  </div>
    </>
  )
}

export default Suplemento