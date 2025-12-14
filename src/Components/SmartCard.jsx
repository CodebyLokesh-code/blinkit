import React from 'react'
import Container from './Container'

export default function SmartCard() {
    const images = ["103.jpg","104.jpg","105.jpg"]
  return (
    <Container extraClass="hidden lg:block my-2" >
      <div className='grid grid-cols-3 gap-2'>
        {
        images.map(
            (img_name,index)=>{
                return <img key={index} src={`images/${img_name}`} alt="" />
            }
        )
      }
      </div>
    </Container>
  )
}
