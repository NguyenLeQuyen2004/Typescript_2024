import Carousel from 'react-bootstrap/Carousel'

function Silde() {
  return (
    <Carousel data-bs-theme='dark'>
      <Carousel.Item>
        <img className='d-block w-100' src='https://anphat.com.vn/media/lib/29-04-2023/laptop.jpg' alt='First slide' />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src='https://anphat.com.vn/media/lib/29-04-2023/pc.jpg' alt='Second slide' />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://anphat.com.vn/media/lib/08-05-2023/build-pc-banner.jpg'
          alt='Third slide'
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Silde
