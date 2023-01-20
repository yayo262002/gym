
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Proteina.scss";

const Proteina = () => {
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
<div className="todo-proteina">
  
<div className="cards">
 
            {productos.map((producto, index)=> 
            <Link to={ `${producto._id}`}>
            <div key={index} className="card">

              <img src={producto.photo}></img>
                <h1 className="nombre-mv">{producto.productName}</h1>
                <p>{producto.valoracion}</p>
                <p>{producto.desde}</p>
            </div>
            </Link>
            )}
            
        </div>

    </div>
  )
}

export default Proteina