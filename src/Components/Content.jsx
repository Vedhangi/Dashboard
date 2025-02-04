import React from 'react'
import ContentHeader from './ContentHeader'
import "../Styles/Content.css"
import Card from './Card'
import TeacherList from './TeacherList'
import CardSection from './CardSection'
const Content = () => {
  return (
    <div className='content'>
      <ContentHeader />
      <Card />
      <CardSection />
      <TeacherList />
    </div>
  )
}

export default Content
