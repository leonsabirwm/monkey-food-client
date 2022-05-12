import React from 'react'
import './City.css'
import { HiArrowRight } from "react-icons/hi";



export const City = ({city}) => {
    const{name,image} = city;
  return (
    <div className='col-3 d-flex justify-content-center p-0 city-wrap'>
            <div id='cityy' className='city-container d-flex justify-content-end align-items-end' 
            style={{ 
            backgroundImage: `url(${image})` 
            }}>
                <div className='initials'>
                    <h1>{name.substr(0,1)}</h1>
                </div>  

                <div className='d-flex w-100 justify-content-between align-items-center'>
                    <h4 className='text-white font-bold city-name d-inline ms-2'>{name}</h4>
                    <button id='myy' className='border-0 text-white rounded py-3 px-4 city-btn monkey-btn'><HiArrowRight></HiArrowRight></button>
                </div>

        </div>
    </div>
  )
}
