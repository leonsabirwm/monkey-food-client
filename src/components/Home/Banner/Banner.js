import React from 'react'
import './Banner.css'
import { BiTargetLock } from "react-icons/bi";

export const Banner = () => {
  return (
    <div className='row home-banner'>
        <div className='col-9 p-0 d-flex flex-column align-items-start justify-content-center'>
            <div>
            <h1 className='fw-light banner-title'>It's the food and groceries you love, delivered</h1>
            </div>
            <div className='shadow p-3 d-flex rounded d-inline-block my-5'>
                <div className='border d-inline-block rounded me-3'>
                <input placeholder='Enter your full address' type="text" className='user-input border-0'/><button className='monkey-text bg-white border-0 fs-3 px-3 fw-light'><BiTargetLock></BiTargetLock></button>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <div><button className=' border-0 text-white rounded py-3 px-5 monkey-btn'>Delivery</button></div>
                    <div><span className='mx-2'>or</span>
                    </div>
                    <div><button className='border-0 text-white rounded py-3 px-5 monkey-btn'>Pick-Up</button></div>
                </div>
            </div>
        </div>
        <div className='col-2 p-0'>

        </div>
    </div>
  )
}
