import React from 'react';
import Heading from '../../../common/heading/Heading';
import { popular } from '../../../../dummyData';
import Slider from 'react-slick';
import './Popular.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Popular() {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  }
  return (
    <>
      <section className='popular'>
        <Heading title="Popular" />
        <div className='content'>
        <Slider {...settings}>
        {popular.map((val) => {
          return (
            <div className='items'>
              <div className='box shadow'>
                <div className='images row'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='category category1'>
                    <span>{val.category}</span>
                  </div>
                </div>
                <div className='text row'>
                  <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                  <div className='date'>
                    <i className='fa-solid fa-calendar-days'></i>
                    <label htmlFor=''>{val.date}</label>
                  </div>
                  <div className='comment'>
                    <i className='fas fa-comment'></i>
                    <label htmlFor=''>{val.date}</label>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        </Slider>
        </div>
      </section>
    </>
  )
}

export default Popular