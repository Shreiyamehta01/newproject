import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Dcard.css"
import Ddata from "./Ddata"
import "../newarrivals/style.css"

const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Slider {...settings}>
        {Ddata.map((value, index) => {
          return (
            <>
              {/* <div className='box product' key={index}> */}
                {/* <div className='img'>
                  <img src={value.cover} alt='' width='100%' />
                </div> */}

{/* <div className="img">
                <img src={value.cover} alt="" style={{ width: "100%" }} /> 
              </div> */}

<div className="box product" key={index} style={{ width: "250px" }}> {/* Adjust the width as per your requirement */}
              <div className="img">
                <img src={value.cover} alt="" style={{ width: "100%" }} />
              </div>
                <h4>{value.name}</h4>
                <span>{value.price}</span>
                <br></br>
                <button className="btn-view-product">View Product</button>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Dcard