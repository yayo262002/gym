import Carousel from 'react-bootstrap/Carousel';
import carr2 from '../../src/assets/carru2.webp'
import carr3 from '../../src/assets/carru3.webp'
import carr1 from '../../src/assets/carru1.webp'
import React, {useState} from "react"; 
import "./Carousel.scss";


function ControlledCarousel() {
    
  
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      // console.log(activeIndex)
    };
  
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
    <Carousel.Item>
      <div className="img-container">
      <img className="d-block w-100 img-slides" src={carr2} />
      </div> 
    </Carousel.Item>

    <Carousel.Item>
      <div className="img-container">
      <img className="d-block w-100 img-slides" src={carr3} />
      </div> 
    </Carousel.Item>

    <Carousel.Item>
      <div className="img-container">
      <img className="d-block w-100 img-slides" src={carr1} />
      </div> 
    </Carousel.Item>
    </Carousel>
  );
  }

  export default ControlledCarousel;