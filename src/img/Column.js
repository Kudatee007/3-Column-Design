import React from 'react'
import img from './icon-sedans.svg'
import img1 from './icon-luxury.svg'
import img2 from './icon-suvs.svg'


function Column() {
  return (
    <div className='App'>
        <div className='ContainApp'>
          <div className='Sedan'>
          <img src={img} alt="" />
            <h1>SEDANS</h1>
            <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
          </div>
            <button className='Btn'>Learn More</button>
        </div>
        <div className='ContainApp1'>
          <div className='Suv'>
          <img src={img2} alt="" />
            <h1>SUVS</h1>
            <p>Take on  SUV for its spacious interior,power,and versality.Perfect for your next family vacation and off-road adventures.</p>
          </div>
            <button className='Btn1'>Learn More</button>
        </div>
        <div className='ContainApp2'>
          <div className='Luxury'>
          <img src={img1} alt="" />
            <h1>LUXURY</h1>
            <p>Cruise in the best car brands without the bloated prices.Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
          </div>
            <button className='Btn2'>Learn More</button>
        </div>
    </div>
  )
}

export default Column