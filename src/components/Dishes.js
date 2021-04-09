import React, { useState, useEffect } from 'react'
import { useAxios } from '../hooks/useAxios'
import Spinner from './Spinner'
import Dish from './Dish'
import './dishes.css'

const Dishes = () => {
  const [dishes, setDishes] = useState({
    data: [
      {
        name: 'Tarana',
        desc: 'Domaca testenina skuvana u vodi.',
        ingredients: ['tarana', 'so', 'voda']
      }
    ]
  })
  const data = useAxios('https://www.themealdb.com/api/json/v1/1/random.php')
  console.log(data.data.meals)
  useEffect(() => {
    if (Array.isArray(data.data.meals) && data.data.meals.length !== 0) {
      const dataFormatted = {
        data: [
          {
            name: data.data.meals[0].strMeal,
            desc: data.data.meals[0].strInstructions,
            ingredients: [
              data.data.meals[0].strIngredient1,
              data.data.meals[0].strIngredient2,
              data.data.meals[0].strIngredient3,
              data.data.meals[0].strIngredient4,
              data.data.meals[0].strIngredient5,
              data.data.meals[0].strIngredient6
            ]
          }
        ]
      }
      console.log(dataFormatted)
      setDishes(dataFormatted)
    }
  }, [data])

  return dishes.loading ? (
    <Spinner />
  ) : dishes.error ? (
    <h1>{dishes.error}</h1>
  ) : (
    dishes.data &&
    dishes.data.map((dish, k) => (
      <article className='dish-card dish-card--withImage' key={k}>
        <Dish food={dish} />
      </article>
    ))
  )
}

export default React.memo(Dishes)
