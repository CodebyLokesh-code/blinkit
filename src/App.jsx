import React from 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import SmartCard from './Components/SmartCard'
import CategoryBox from './Components/CategoryBox'

import Section from './Components/Section'
import { sectionsData } from './Components/SectionsData'

export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <SmartCard />
      <CategoryBox />

      <div className="max-w-[1280px] mx-auto px-4">
        {sectionsData.map((sec, index) => (
          <Section
            key={index}
            title={sec.title}
            products={sec.products}
          />
        ))}
      </div>
    </>
  )
}
