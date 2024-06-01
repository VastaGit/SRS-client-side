import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Courses = () => {
  // State to hold the selected faculty and the filtered departments
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedCourseCode, setSelectedCourseCode] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [formDepartments, setFormDepartments] = useState([]);
  const [courses, setCourses] = useState([]);
  const [professors, setProfessors] = useState([]);
  const [formData, setFormData] = useState({
    courseName: '',
    courseCode: '',
    courseCredits: 0,
    professorId: 0,
    departmentId: 0,
    dayOfWeek: 'default',
    preRequisites: '',
    courseDescription: '',
    roomNo: '',
    startTime: '',
    endTime: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const departmentResponse = await axios.get('http://localhost:5145/Department');
        setDepartments(departmentResponse.data);
        setFormDepartments(departmentResponse.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
      axios.get('http://localhost:5145/Course')
      .then(response => {
         setCourses(response.data);
       })
      .catch(error => {
         console.error("Failed to fetch courses for all departments:", error);
       });

       axios.get('http://localhost:5145/Professor')
      .then(response => {
         setProfessors(response.data);
       })
      .catch(error => {
         console.error("Failed to fetch professors:", error);
       });
    };

    fetchData();
  }, []);

  /*useEffect(() => {
    // Check if formData is not in its initial state
    if (formData && formData.departmentId!== 0) {
      const selectedDepartmentId = parseInt(formData.departmentId);
      const filteredProfessors = professors.filter(professor => professor.departmentId === selectedDepartmentId);
      setProfessors(filteredProfessors);
    } else {
      // If formData is in its initial state or departmentId is 0, show all professors
      setProfessors(professors);
    }
  }, [formData.departmentId]); // Depend on formData.departmentId to refetch when it changes*/
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
     ...prevState,
      [name]: value
    }));
  };

  const handleCreditChange = (e) => {
    const {name, value} = e.target;
    const convertedValue = parseInt(value);

    setFormData(prevState => ({
      ...prevState,
      [name]: convertedValue
    }));
  };
  
  const handleDepartmentChange = (event) => {
    const selectedDepartmentId = parseInt(event.target.value); // Parse the selected department ID
    const selectedDepartment = departments.find(dep => dep.departmentId === selectedDepartmentId);
    if (selectedDepartment) {
      setFormData(prevState => ({...prevState, departmentId: selectedDepartment.departmentId}));
    }
  };

  const handleProfessorChange = (event) => {
    const selectedProfessorId = parseInt(event.target.value);
    const selectedProfessor = professors.find(professor => professor.professorId === selectedProfessorId);
    if (selectedProfessor) {
      // Update the state with only the advisor ID
      setFormData(prevState => ({
      ...prevState,
      professorId: selectedProfessorId // Store only the advisor ID
      }));
    }
  };

  const handleSelectionChange = (event) => {
    setSelectedDepartment(event.target.value);
    if (event.target.value === 'all') {
      // Fetch courses for all departments using Axios
      axios.get('http://localhost:5145/Course')
      .then(response => {
         setCourses(response.data);
       })
      .catch(error => {
         console.error("Failed to fetch courses for all departments:", error);
       });
    } else {
      // Fetch courses for the selected department using Axios
      axios.get(`http://localhost:5145/Course/department/${event.target.value}`)
      .then(response => {
         setCourses(response.data);
       })
      .catch(error => {
         console.error(`Failed to fetch courses for department ${event.target.value}:`, error);
       });
    }
  };

  const togglePopup = (courseCode) => {
    setShowPopup(!showPopup);
    setSelectedCourseCode(courseCode);
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = async (e) => {
    // setShowForm(!showForm);
    e.preventDefault();
    let apiData;

    try {
      apiData = {
        academicYear: "2024",
        semesterId: 1,
        professorId: formData.professorId,
        professorName: "null",
        courseCode: formData.courseCode,
        courseName: formData.courseName,
        courseDescription: formData.courseDescription,
        creditHours: formData.courseCredits,
        departmentId: formData.departmentId,
        prerequisiteCourseId: null
      };
      console.log('Course Post Data');
      console.log(apiData);
      const postCourseResponse = await axios.post('http://localhost:5145/Course', apiData);
  
      apiData = {
        startTime: formData.startTime,
        endTime: formData.endTime,
        dayOfWeek: formData.dayOfWeek,
        roomNo: formData.roomNo,
        courseId: postCourseResponse.data
      };
      console.log('Schedule Post Data');
      console.log(apiData);
      await axios.post('http://localhost:5145/Advisor', apiData);
      alert("New Course Added successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container w-5/6 mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 text-red-600">Courses</h1>
        <div className="filters px-2 mb-8">
          <h1 className="text-2xl font-bold mb-4 text-black-600">Filters</h1>
          <div className="filter-fields">
            <div className="field-container flex justify-between" style={{"max-width": "410px"}}>
              <h2 className='text-xl font-bold text-orange-600'>Department</h2>
              <select className="w-64 ml-4 border rounded p-1 border border-primary border-2" value={selectedDepartment} onChange={handleSelectionChange}>
                <option value="all" selected>All</option>
                {departments.map((dept) => (
                  <option key={dept.departmentId} value={dept.departmentId}>{dept.departmentName}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-600">Course Name</h1>
        <div className="max-h-64 overflow-y-auto mb-2">
          <table className="min-w-full bg-white border border-gray-300">
            <tbody>
              {courses.map((course, index) => (
                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'}`}>
                  <td className="py-2 px-4">{`${course.courseCode} ${course.courseName}`}</td>
                  <td className="py-2 px-4">
                  <div className='flex justify-end gap-3'>
                    <button onClick={() => togglePopup(course.courseCode)} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                      Details
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between" style={{ width: '98%' }}>
          <button onClick={toggleFormVisibility} className='bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600'>Add Course</button>
          <div className="flex items-center">
            <p>Total Course Count: {courses.length}</p>
          </div>
        </div>
        {showPopup && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-xl leading-6 font-bold" id="modal-title">
                        Course Details
                      </h3>
                      <div className="mt-2 font-semibold">
                        {selectedCourseCode && (
                          <div>
                            <p className="text-sm">
                              Course Code: <span>{courses.find(course => course.courseCode === selectedCourseCode).courseCode}</span>
                            </p>
                            <p className="text-sm">
                              Course Name: <span>{courses.find(course => course.courseCode === selectedCourseCode).courseName}</span>
                            </p>
                            <p className="text-sm">
                              Course Instructor: <span>{courses.find(course => course.courseCode === selectedCourseCode).professorName}</span>
                            </p>
                            <p className="text-sm">
                              Course Description: <span>{courses.find(course => course.courseCode === selectedCourseCode).courseDescription}</span>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button onClick={() => setShowPopup(!showPopup)} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {showForm && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
            <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="relative bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                      <h3 className="text-xl leading-6 font-medium text-gray-900 mb-6" id="modal-title">
                        Add Course
                      </h3>
                      <div className="mt-2">
                        <form className="space-y-6">
                          <div className="rounded-md shadow-sm -space-y-px">
                            <div className='mb-2'>
                              <label htmlFor="courseName">Course Full Name</label>
                              <input id="courseName" name="courseName" type="text" autoComplete="given-name" value={formData.courseName} onChange={handleInputChange} required className="border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Course Name" />
                            </div>
                            <div className='mb-2'>
                              <label htmlFor="courseDescription">Course Description</label>
                              <input id="courseDescription" name="courseDescription" type="text" autoComplete="given-name" value={formData.courseDescription} onChange={handleInputChange} required className="border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Course Description" />
                            </div>
                            <div className='mb-2'>
                              <label htmlFor="roomNo">Classroom Number</label>
                              <input id="roomNo" name="roomNo" type="text" autoComplete="given-name" value={formData.roomNo} onChange={handleInputChange} required className="border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Room Number" />
                            </div>
                            <div className='flex gap-4' style={{"margin-bottom": "0.5rem"}}>
                              <div className='w-full'>
                                <label htmlFor="courseCode">Course Code</label>
                                <input id="courseCode" name="courseCode" type="text" autoComplete="given-name" value={formData.courseCode} onChange={handleInputChange} required className="border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Course Code" />
                              </div>
                              <div className='w-full'>
                                <label htmlFor="courseCredits">Number of Credits</label>
                                <input id="courseCredits" name="courseCredits" type="number" autoComplete="given-name" value={formData.courseCredits} onChange={handleCreditChange} required className="border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Course Credits" />
                              </div>
                            </div>
                            <div className='flex gap-4' style={{"margin-bottom": "0.5rem"}}>
                              <div className='flex flex-col w-48'>
                                <label htmlFor="department">Department</label>
                                <select id="department" value={formData.departmentId} className="px-3 py-2 border rounded border border-primary border-2" onChange={handleDepartmentChange}>
                                  <option value="" selected>Select</option>
                                  {formDepartments.map((dept) => (
                                    <option key={dept.departmentId} value={dept.departmentId}>{dept.departmentName}</option>
                                  ))}
                                </select>
                              </div>
                              <div className='flex flex-col w-full'>
                                <label htmlFor="instructor">Instructor</label>
                                <select id="instructor" value={formData.professorId} className="px-3 py-2 border rounded border border-primary border-2" onChange={handleProfessorChange}>
                                  <option value="" selected>Select</option>
                                  {professors.map((professor) => (
                                    <option key={professor.professorId} value={professor.professorId}>{`${professor.firstName} ${professor.lastName}`}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className='flex gap-4 mb-4'>
                                <div className='flex flex-col w-full'>
                                  <label htmlFor="dayOfWeek">Day of the Week</label>
                                  <select id="dayOfWeek" name="dayOfWeek" value={formData.dayOfWeek} className="px-3 py-2 border rounded border border-primary border-2" onChange={handleInputChange}>
                                    <option value="" disabled selected>Select</option>
                                    <option value="Mon">Monday</option>
                                    <option value="Tue">Tuesday</option>
                                    <option value="Wed">Wednesday</option>
                                    <option value="Thu">Thursday</option>
                                    <option value="Fri">Friday</option>
                                    <option value="Sat">Saturday</option>
                                  </select>
                                </div>
                                <div className='w-full'>
                                  <label htmlFor="preRequisites">Prerequisites</label>
                                  <input id="preRequisites" name="preRequisites" type="text" value={formData.preRequisites} onChange={handleInputChange} autoComplete="given-name" required className="border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Course Names" />
                                </div>
                            </div>
                            <div className='flex gap-4 mb-4'>
                                <div className='w-full'>
                                  <label htmlFor="startTime">Start Time</label>
                                  <input id="startTime" name="startTime" type="text" value={formData.startTime} onChange={handleInputChange} required className="border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Start Time" />
                                </div>
                                <div className='w-full'>
                                  <label htmlFor="endTime">End Time</label>
                                  <input id="endTime" name="endTime" type="text" value={formData.endTime} onChange={handleInputChange} required className="border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="End Time" />
                                </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <button type="submit" onClick={handleFormSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                              Create Course
                            </button>
                            <button onClick={toggleFormVisibility} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="reset">
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Courses;