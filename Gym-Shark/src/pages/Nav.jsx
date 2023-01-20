import React, { useState } from 'react'
import "./Nav.scss";
import {  Link, NavLink } from "react-router-dom";
import logobest from '../../src/assets/gymshark.jpg'
import usuario from '../../src/assets/usuario.png'
import cesta from '../../src/assets/cesta.png'
import buscar from '../../src/assets/buscar.png'
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';


const Nav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const closeMenu = () => {
      setNavbarOpen(false)
    }
    const handleToggle = () => {
      setNavbarOpen(!navbarOpen)
    }

  return (
<>
<>
<div className='nav-top'>
            <div className='nav-logo'>
                
                <Link to="/">
                    <div>
                    <img className='logo-nav-img' src={logobest}/>
                    </div>
                </Link>
            </div>

        <div className='nav-cuentas'>
                <Link to="/cuenta">
                        <div className='nav-cuentas-logo'>
                        
                        <img className='logo-png-nav' src={usuario}/>
                        <p>Cuenta</p>
                        </div>
                </Link>
                       
                <Link to="/cesta">
                        <div className='nav-cuentas-logo'>
                        <img className='logo-png-nav' src={cesta}/> 
                        <p>Cesta</p>
                        </div>
                </Link>
         </div>
            
    
    <nav className="navBar">
      <button onClick={handleToggle}>
  {navbarOpen ? (
    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
  ) : (
    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
  )}
</button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : "nomostrar"}`}>
      
            <li>
              <NavLink to="/home" className={(navData) => (navData.isActive ? "active-style" : 'none')}>
                Home
                </NavLink>
                </li>
                <li>
            <NavLink
            to="/suplemento"
            className={(navData) => (navData.isActive ? "active-style" : 'none')}
            onClick={() => closeMenu()} exact>Suplementos
            </NavLink>
            </li>
            <li>
            <NavLink
            to="/ropa"
            className={(navData) => (navData.isActive ? "active-style" : 'none')}
            onClick={() => closeMenu()} exact>Ropa
            </NavLink>
            </li>
            <li>
            <NavLink
            to="/snacks"
            className={(navData) => (navData.isActive ? "active-style" : 'none')}
            onClick={() => closeMenu()} exact>Snacks
            </NavLink>
            </li>
            <li>
            <NavLink
            to="/vegan"
            className={(navData) => (navData.isActive ? "active-style" : 'none')}
            onClick={() => closeMenu()} exact>Gama Vegana
            </NavLink>
            </li>
            <li>
            <NavLink
            to="/gaming"
            className={(navData) => (navData.isActive ? "active-style" : 'none')}
            onClick={() => closeMenu()} exact>Gaming
            </NavLink>
            </li>
      </ul>
    </nav>
    </div>
    </>

<div>

    <div className='nav-1'>

   <ul className='nav-bottom-ul'>
            
            <li>
            <Link to="/suplemento">Suplementos</Link>
            </li>
            <li>
            <Link to="/ropa">Ropa</Link>
            </li>
            <li>
            <Link to="/snacks">Snacks</Link>
            </li>
            <li>
            <Link to="/vegan">Vegan</Link>
            </li>
            <li>
            <Link to="/gaming">Gaming</Link>
            </li>
            <li>
            <Link to="/objetivos">Objetivos Fitness</Link>
            </li>
        </ul>
        </div>

        <ul className='nav-bottom-ul2'>
        <li>
            <Link to="/enviogratis"><p>Envio gratis a los 55$</p></Link>
            </li>
            <li>
            <Link to="/ofertastelegram">
                <p>Ofertas exclusivas en Telegram</p>
                </Link>
            </li>
            <li>
            <Link to="/referido">
                <p>10$ Por cada amigo referido</p>
                </Link>
            </li> 
        </ul>
</div>
<div className='nav-descuento'>
   
        <div className='info'>
    <Link to="/sincod">
            <h2>50% de Descuento en mas de 20 productos | Sin Código</h2>
     </Link>

     <Link to="/concod">
            <h2>30% de Descuento en los mas vendidos | Código:34FFT</h2>
     </Link>
    </div>
</div>
<div className='nav-busqueda'>
                <input type="search" />
                <img className='logo-png-nav' src={buscar}/>
            </div>
</>
  )
}

export default Nav

