import React, { useState } from 'react'
import '../styles/componentStyles/courseSchedule.css'
import CourseTable from './CourseTable'

const CourseSchedule = ({ schedule }) => {
  return (
    <>
      <h1 className='sch-header'>Course Schedule</h1>
      <CourseTable schedule={schedule}/>
    </>
  )
}

export default CourseSchedule
