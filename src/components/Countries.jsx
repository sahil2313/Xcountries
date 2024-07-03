import React, { useEffect, useState } from 'react'
import Card from './Card'

const Countries = () => {

  const [data , setData]  = useState([])

  const api_url = "https://xcountries-backend.azurewebsites.net/all"

  useEffect(()=>{

    fetch(api_url).then(res => {
      res.json().then(data => setData(data))
    }).catch(err => console.error(`Error fetching data: ${err.message}`))
  
  },[])



  return (
    <div style={{
      display : "flex",
      flexWrap : "wrap",
      alignItems : "center",
      justifyContent : "center"
    }}>
      {data.map(ele =>  <Card key={ele.abbr} url={ele.flag} title={ele.name} altName={ele.abbr} />)}
       
    </div>
  )
}

export default Countries
