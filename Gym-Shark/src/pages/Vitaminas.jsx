
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Proteina.scss";

const Vitaminas = () => {
  const BASEURL ="http://localhost:8000";
  const [productos, setproductos] = useState([]);

useEffect(()=> {

  const getData = async () => {
      const {data}= await axios.get(`${BASEURL}/vitaminas`);
    console.log(productos);
      setproductos(data)
      console.log(data);
      
  };
  getData();

},[]);
  return (
<div className="todo-proteina">
<div className="cards">
            {productos.map((Producto, index)=> 
            <div key={index} className="card">

              <img src={Producto.photo}></img>
                <h1 className="nombre-mv">{Producto.productName}</h1>
                <p>{Producto.valoracion}</p>
                {/* <p className="oferta-mv">⚡OFERTA⚡ 30% DE DESCUENTO</p>
                <p className="oferta-mv-abajo" >En los más vendidos | Código: MYP30</p> */}
                <p>{Producto.desde}</p>
            </div>
            )}
        </div>

    </div>
  )
}

export default Vitaminas