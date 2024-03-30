import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from './ExampleCarouselImage';
import imageSrc from '../../img/poster.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


function CarouselTag() {
  return (
    <Carousel>
    <Carousel.Item interval={1000}>
    <img src={imageSrc} alt="" className="d-block mx-auto"  style={{ maxWidth: '100%', height: 'auto' }} />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img src={imageSrc} alt="" className="d-block mx-auto"  style={{ maxWidth: '100%', height: 'auto' }} />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={imageSrc} alt="" className="d-block mx-auto"  style={{ maxWidth: '100%', height: 'auto' }} />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default CarouselTag;