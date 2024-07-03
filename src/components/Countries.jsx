import React, { useEffect } from 'react'
import Card from './Card'

const Countries = () => {

  const api_url = "https://xcountries-backend.azurewebsites.net/all"

  useEffect(async()=>{
    try{
      const res = await fetch(api_url)
      console.log({res})
    }catch(e){
      console.log(e)
    }
  },[])



  return (
    <div>
        <Card />
    </div>
  )
}

export default Countries
