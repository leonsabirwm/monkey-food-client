import React from 'react'
import { Banner } from './Banner/Banner'
import { Citites } from './Cities/Citites'
import { Partners } from './Partners/Partners'

export const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Partners></Partners>
        <Citites></Citites>
    </div>
  )
}
