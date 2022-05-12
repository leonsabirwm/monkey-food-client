import React from 'react'
import './Partners.css'

export const Partners = () => {
  return (
    <div className='partner-container'>
        <div className='partner-transparent'>
            <div className='partner-title'>
                <h1 >Partners</h1>
            </div>
            <div className='food-rest'>
                <h2>You prepare the food, we handle the rest</h2>
            </div>
        </div>
        <div className='partner-img'>
        </div>

        <div className='shadow-lg get-started pb-4'>
           <div className='d-flex flex-column justify-content-center align-items-start p-5  '> 
                <h4 className='mb-4 fw-light'>List your restaurant or shop on foodpanda</h4>
                <p>Would you like millions of new customers to enjoy your amazing food and groceries? So would we!</p>
                <p>It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!
                </p>
                <p>
                Interested? Let's start our partnership today!
                </p>
            </div>
            <div className='d-flex justify-content-end me-5'>
                <button className='border-0 text-white rounded py-3 px-5 monkey-btn'>Get Started</button>
            </div>


        </div>
    </div>
  )
}
