import React from 'react'
import Container from './Container'

export default function CategoryBox() {
  const categories = [
  "106.jpeg",
  "107.png",
  "108.png",
  "109.png",
  "110.png",
  "111.png",
  "112.png",
  "113.png",
  "114.png",
  "115.png",
  "116.png",
  "117.png",
  "118.png",
  "119.png",
  "120.png",
  "121.png",
  "122.png",
  "123.png",
  "124.png",
  "125.png",
];

  return (
    <Container extraClass="my-2">
        <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10'>
        {
            categories.map(
                (cat_img,index)=>{
                        return <img key={index} src={`images/${cat_img}`} alt="" />
                }
            )
        }
        </div>
      
    
    </Container>
  )
}
