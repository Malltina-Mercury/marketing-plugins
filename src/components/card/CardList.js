import React from 'react'
import Card from './CardItem'

const CardsList = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading....</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </section>
  )
}

export default CardsList
