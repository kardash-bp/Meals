import React from 'react'

const Dish = ({ food }) => {
  return (
    <>
      <h3>{food.name}</h3>
      <p>{food.desc}</p>
      <div className='ingredients'>
        {food.ingredients.map((ingredient, i) => (
          <span key={i}>{ingredient}</span>
        ))}
      </div>
    </>
  )
}

export default Dish
