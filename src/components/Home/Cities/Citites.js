import React, { useEffect, useState } from 'react'
import { City } from '../City/City'
import './Citites.css'

export const Citites = () => {
    const[cities,setCitites] = useState([]);
    useEffect(()=>{
        fetch("cities.json")
        .then(res => res.json())
        .then(data => setCitites(data));
    },[])
  return (
    <div className='d-flex justify-content-center cities'>
        <div className='row gap-5 d-flex justify-content-center'>
            
              {
                  cities.map(city => <City key={city.id} city={city}></City>)
              }
        </div>
    </div>
  )
}
