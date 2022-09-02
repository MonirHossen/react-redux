import React from 'react'

export default function Home() {
  return (
    <div>
        <div className='add-to-cart'>
            <img src='https://www.pngitem.com/pimgs/m/465-4653544_e-commerce-icon-png-free-clipart-png-download.png'></img>
        </div>
        <h1>Home Component</h1>
        <div className='cart-wrapper'>  
            <div className='img-wrapper item'>
                <img src='https://daisycon.io/images/mobile-device/?width=250&height=250&color=ffffff&ean=190198044211'></img>
            </div>
            <div className='text-wrapper item'>
                <span>I-Phone</span>
                <span>Price: $1000.00</span>
            </div>
            <div className='btn-wrapper item'>
               <button>Add To Cart</button>
            </div>
        </div>
       
    </div>
  )
}
