import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from '../components/StudentComp/Navbar.jsx'
import HomePage from '../components/StudentComp/HomePage.jsx'
import CourseSchedule from '../components/CourseSchedule.jsx'
import AcademicRecord from '../components/AcademicRecord.jsx'
import CourseRegistration from '../components/StudentComp/CourseRegistration.jsx'
import studentInfo from '../data/studentInfo.json'
import PrivateRoute from './PrivateRoute' // Import the PrivateRoute component
import '../styles/styles.css'

const StudentRouter = ({ userRole, setUserRole, userInfo }) => {
  return (
    <div>
      <Navbar />
      <main className='container'>
        <Switch>
          <PrivateRoute
            exact
            path='/student/home'
            component={() => <HomePage userInfo={userInfo} />}
          />
          <PrivateRoute
            path='/student/course-schedule'
            component={() => (
              <CourseSchedule
                userInfo={userInfo}
                showCourseDetails={courseCode =>
                  alert(`Course Details for ${courseCode}`)
                }
              />
            )}
          />
          <PrivateRoute
            path='/student/academic-record'
            component={() => (
              <AcademicRecord academicRecord={studentInfo.academicRecord} />
            )}
          />
          <PrivateRoute
            path='/student/course-registration'
            component={() => (
              <CourseRegistration
              userInfo={userInfo}
                showCourseDetails={courseCode =>
                  alert(`Course Details for ${courseCode}`)
                }
              />
            )}
          />
          <Route path='/student/logout'>
            {({ history }) => {
              setUserRole(null)
              localStorage.removeItem('jwt')
              localStorage.removeItem('userRole')
              localStorage.removeItem('username')
              history.push('/')
              return null
            }}
          </Route>
          <Redirect from='/' to='/student/home' />
        </Switch>
      </main>
    </div>
  )
}

export default StudentRouter
