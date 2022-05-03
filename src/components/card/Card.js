import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request from "../../tools/request";

function Card() {
  const { id } = useParams();

  const [cardInfo, setCardInfo] = useState({})

  useEffect(() => {
    request(`/Cards/${id}`)
    .then(({data})=> {
        setCardInfo(data)
    })
  }, [id]);


  return <div>
      <h1>{cardInfo.title}</h1>
      <h1>{cardInfo.description}</h1>

  </div>;
}

export default Card;
