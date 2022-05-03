import React from 'react'

const Card = ({ item }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      {item.description}
    </div>
  )
}

export default Card
