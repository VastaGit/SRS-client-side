import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/StudentComp/Navbar.jsx'
import HomePage from '../components/StudentComp/HomePage.jsx'
import CourseSchedule from '../components/CourseSchedule.jsx'
import AcademicRecord from '../components/AcademicRecord.jsx'
import CourseRegistration from '../components/StudentComp/CourseRegistration.jsx'
import studentInfo from '../data/studentInfo.json'
import '../styles/styles.css'

const StudentRouter = ({ userRole, setUserRole }) => {

  // const [studentData, setStudentData] = useState(null)

  // useEffect(() => {
  //   const getStudentData = async () => {
  //     axios
  //       .get('/student')
  //       .then(response => {
  //         console.log(response.data)
  //         setStudentData(response.data)
  //       })
  //       .catch(error => {
  //         console.error('Error:', error)
  //       })
  //   }
  //   getStudentData()
  // }, [])
  
  return (
    <Router>
      <div>
        <Navbar />
        <main className='container'>
          <Switch>
            <Route exact path='/'>
              <HomePage courses={studentInfo.courses} gpa={studentInfo.gpa} />
            </Route>
            <Route path='/course-schedule'>
              <CourseSchedule
                studentId={studentInfo.id}
                showCourseDetails={courseCode =>
                  alert(`Course Details for ${courseCode}`)
                }
              />
            </Route>
            <Route path='/academic-record'>
              <AcademicRecord academicRecord={studentInfo.academicRecord} />
            </Route>
            <Route path='/course-registration'>
              <CourseRegistration
                schedule={studentInfo.schedule}
                showCourseDetails={courseCode =>
                  alert(`Course Details for ${courseCode}`)
                }
              />
            </Route>
            <Route path='/logout'>
              {({ history }) => {
                setUserRole(null)
                history.push('/')
                return null
              }}
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default StudentRouter
