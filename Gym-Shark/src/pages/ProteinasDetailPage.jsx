import React, { useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from "axios";
import { Navigate } from "react-router-dom"
import "./ProteinasDetailPage.scss";

const ProteinasDetailPage =() => {
  const [productos, setproductos] = useState([]);
  const {productNam}= useParams();
 const navigate = useNavigate()
 console.log(productNam);
 const BASEURL ="http://localhost:8000";

 useEffect(() => {
  async function getData2() {
    const {data} = await axios.get(`${BASEURL}/proteinas/${productNam}`);
    setproductos(data)
  }
    getData2();
  },[])
  return (
    <>
  <div className='div-detail'>
<button className='buttonback' onClick={()=> navigate ("/proteinas")}> ↩ Volver</button>
  </div>
  <div className="card-detail">
    
  <div className="card-detail-images">
        <img src={productos.photo}></img>
    </div>
    <div className="card-detail-description">
          <h1 className="nombre-mv">{productos.productName}</h1>
          <p>{productos.description}</p>
          <p>{productos.valoracion}</p>
          <p>{productos.price}</p>
        </div>
        </div>
    </>
  )
}
export default ProteinasDetailPage