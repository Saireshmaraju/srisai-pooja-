import React from 'react'
import {Carousel}from 'react-bootstrap'


 const Carouseli = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/159589.jpg"
            alt="First slide"
            height="400"
          />
          <Carousel.Caption>
            <h3>Hanuman</h3>
            <p>Hanuman is one of the most popular gods in hindu</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_WPgN3M1EdM6aj7EeuJbjMULl-fs-cOGZA&usqp=CAU"
            alt="Second slide"
            height="400"
          />
      
          <Carousel.Caption>
            <h3>Krishna</h3>
            <p>Sree Krishna is the eight incormation of lord vishnu</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c1.wallpaperflare.com/preview/896/109/275/lord-shiva-statue-god-hindu.jpg"
            alt="Third slide"
            height="400"
          />
      
          <Carousel.Caption>
            <h3>God Shiva</h3>
            <p>"He is all and everthing.He is the universe"</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}
export default Carouseli;