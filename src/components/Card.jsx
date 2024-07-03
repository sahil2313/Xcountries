import React from 'react'

const Card = () => {
  return (
    <div style={{
        height :"200px",
        width : "200px",
        border : "black solid 1px",
        display : "flex",
        flexDirection : "column",
        gap : "10px",
        justifyContent : "center",
        alignItems : "center",
        textAlign : "center"
    }}>
      <img src={"india.img"} alt={"india"} style={{
        width : "100px",
        height : "100px"
      }} />
      <h4>India</h4>
    </div>
  )
}

export default Card
