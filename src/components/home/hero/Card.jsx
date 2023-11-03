import React from "react";

const Card = ({ item: { id, cover, category, title, authorName, time } }) => {
  return (
    <>
      <div className='box'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <div className='text'>
          <span className='category'>{category}</span>
          <h1 className='titleBg'>{title}</h1>
          <div className='author flex'>
            <span>by {authorName}</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card