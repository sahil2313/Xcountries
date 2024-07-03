import React from 'react'

const Card = ({url , title , altName}) => {
  return (
    <div style={{
        height :"200px",
        width : "200px",
        border : "black solid 1px",
        borderRadius : "5px",
        margin : "10px",
        display : "flex",
        flexDirection : "column",
        gap : "10px",
        justifyContent : "center",
        alignItems : "center",
        textAlign : "center",

    }}>
      <img src={url} alt={altName} style={{
        width : "100px",
        height : "100px"
      }} />
      <h4>{title}</h4>
    </div>
  )
}

export default Card
