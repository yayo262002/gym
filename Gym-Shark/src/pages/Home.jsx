import "./Home.scss";
import React from 'react'
import foto1 from '../../src/assets/200.jpeg'
import proteh from '../../src/assets/proteh.webp'
import myproh from '../../src/assets/myproh.webp'
import veganosh from '../../src/assets/veganosh.webp'
import vitah from '../../src/assets/vitah.webp'
import creatinah from '../../src/assets/creatinah.webp'
import barrash from '../../src/assets/barrash.webp'
import rop1 from '../../src/assets/rop1.webp'
import rop2 from '../../src/assets/rop2.webp'
import rop3 from '../../src/assets/rop3.webp'
import rop4 from '../../src/assets/rop4.webp'
import invita from '../../src/assets/invita.webp'
import telegram from '../../src/assets/telegram.webp'
import face from '../../src/assets/face.png'
import tui from '../../src/assets/tui.png'
import tik from '../../src/assets/tik.png'
import tel from '../../src/assets/tele.png'
import ins from '../../src/assets/ins.png'
import you from '../../src/assets/you.png'
import indicar from '../../src/assets/indicar.png'
import { Link } from "react-router-dom";
import ControlledCarousel from "./Carousel";

const Home = () => {
  return (
  <div className="body">
    <Link to="/listaespecial">
    <div>
    <img className='foto1' src={foto1}/>
    </div>
</Link>


<div className="div-masvendidos-h1">
                    <h1>Compra por Categorías</h1>
            </div> 



<div className="cards-cate">

        <Link to="/proteinas">
        <div className="card">
        
                <img src={proteh}/>
                <h2>Proteina</h2>
                <p>Descubre nuestros batidos de proteínas de alta calidad, incluida la proteína en polvo número 1 del Reino Unido, Impact Whey Protein</p>
                
        </div>
        </Link>

        <Link to="/vegan">
        <div className="card">
                <img src={veganosh}/>
                <h2>Productos Veganos</h2>
                <p>Para todos aquellos que siguen una dieta Vegana y quieren conseguir sus objetivos. Descubre nuestra gama de productos</p>
        </div>
        </Link> 

        <Link to="/mypro">
        <div className="card">
                <img src={myproh}/>
                <h2>Myprotein Pro</h2>
                <p>
        Descubre la gama premium, desarrollada a partir de ingredientes superiores que dan a luz a nuestros suplementos de la más alta calidad.</p>
        </div>
        </Link>

        <Link to="/vitaminas">
        <div className="card">
                <img src={vitah}/>
                <h2>Vitaminas y minerales</h2>
                <p>
        Nuestras vitaminas y minerales están aquí para que te veas y se sientas lo mejor posible, desde adentro hacia afuera</p>
        </div>
        </Link>

        <Link to="/mypro">
        <div className="card">
                <img src={barrash}/>
                <h2>Barritas de proteínas & Snacks</h2>
                <p>
        Para un impulso nutritivo entre horas o algo que te ayude a recuperarte para que estés listo para tu próxima sesión</p>
        </div>
        </Link>

        <Link to="/creatinas">
        <div className="card" id="card">
                <img src={creatinah}/>
                <h2>Creatina</h2>
                <p>
        Un suplemento deportivo súper popular, se ha demostrado que la creatina aumenta el rendimiento físico.</p>
        </div>
        </Link>


 </div> 

            
      <ControlledCarousel/>
        
  
    <div className="div-masvendidos">
            <div className="div-masvendidos-h1">
                    <h1>Novedades - Ropa</h1>
            </div> 
            <div className="div-masvendidos-products">
                    <div className="card">
                        <img src={rop1}/>
                        <span className="comprarapida">Compra Rapida</span>
                        <p>Mallas Engage de edición limitada para mujer de MP - Gris tormenta</p>
                        <p className="oferta-mv"> ⚡OFERTA⚡ 30% DE DESCUENTO</p>
                        <p className="oferta-mv-abajo">En los más vendidos | Código: MYP30</p>
                        <p className="oferta-mv-precio">39,99 €</p>
                    </div>

                    <div className="card">
                        <img src={rop2}/>
                        <span className="comprarapida">Compra Rapida</span>
                        <p>Mallas Engage de edición limitada para mujer de MP - Gris tormenta</p>
                        <p className="oferta-mv"> ⚡OFERTA⚡ 30% DE DESCUENTO</p>
                        <p className="oferta-mv-abajo">En los más vendidos | Código: MYP30</p>
                        <p className="oferta-mv-precio">27,99 €</p>
                    </div>

                    <div className="card">
                        <img src={rop3}/>
                        <span className="comprarapida">Compra Rapida</span>
                        <p>Mallas Engage de edición limitada para mujer de MP - Gris tormenta</p>
                        <p className="oferta-mv"> ⚡OFERTA⚡ 30% DE DESCUENTO</p>
                        <p className="oferta-mv-abajo">En los más vendidos | Código: MYP30</p>
                        <p className="oferta-mv-precio">23,99 €</p>
                    </div>

                    <div className="card">
                        <img src={rop4}/>
                        <span className="comprarapida">Compra Rapida</span>
                        <p>Mallas Engage de edición limitada para mujer de MP - Gris tormenta</p>
                        <p className="oferta-mv"> ⚡OFERTA⚡ 30% DE DESCUENTO</p>
                        <p className="oferta-mv-abajo">En los más vendidos | Código: MYP30</p>
                        <p className="oferta-mv-precio">29,99 €</p>
                    </div>
            </div>
      </div>
             <Link to="/ropa">
                    <div className="button-center">
                        <button className="button-ropa">Ver Todos</button> 
                    </div>
            </Link>
      <div className="div-masvendidos">

            <div className="div-masvendidos-products">
                    <div className="card">
                        <img src={invita}/>
                        <h2>Refiere a un amigo o familiar y consigue 10$</h2>
                        <p className="empujaboton">Gana 10€ por cada amigo referido y ellos se llevaran 1 envío ilimitado</p>
                        <Link to="/ropa">
                                <div className="button-center">
                                    <button className="button-link">Comparte</button> 
                                </div>
                         </Link>
                    </div>
                    <div className="indicar">
                        <img src={indicar}/>
                    </div>
                    <div className="card">
                        <img src={telegram}/>
                        <h2>Registrate en Telegram</h2>
                        <p className="empujaboton">Hazte con las últimas ofertas directamente en tu teléfono, date de alta en nuestro canal de Telegram</p>
                        <Link to="/ropa">
                                <div className="button-center">
                                    <button className="button-link">Registrate</button> 
                                </div>
                         </Link>
                    </div>


        </div>          
    </div>

            <div className="abajo-home">
                <div className="izq-foot">
                <h3>Date de alta para recibir ofertas exclusivas</h3>
                <button className="button-link2">Registrate</button>
                </div>

                <div className="der-foot">
                <h3>Conecta con nosotros</h3>
                <div className="imagenes-redes">
                <img src={face}/>
                <img src={tui}/>
                <img src={tik}/>
                <img src={you}/>
                <img src={ins}/>
                <img src={tel}/>

                </div>
                </div>
            </div>
</div>
  )
}

export default Home