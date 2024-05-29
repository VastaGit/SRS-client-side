import React, { useState } from 'react';
import studentInfo from '../../data/studentInfo.json';

const Courses = () => {
  // State to hold the selected faculty and the filtered departments
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [departments, setDepartments] = useState([
    { name: "cs", label: "Select a faculty" }
  ]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  const toggleEditFormVisibility = () => {
    setShowEditForm(!showEditForm);
  }

  // Function to handle faculty selection
  const handleFacultyChange = (event) => {
    setSelectedFaculty(event.target.value);
    if (event.target.value === "engineering") {
      setDepartments([
        { name: "soft", label: "Software" },
        { name: "elec", label: "Electrical" },
        { name: "civil", label: "Civil" }
      ]);
    } else if (event.target.value === "economics") {
      setDepartments([
        { name: "econ", label: "Business" },
        { name: "Int trade", label: "International Trade" },
        { name: "finance", label: "Finance" },
      ]);
    } else if (event.target.value === "architecture") {
      setDepartments([
        { name: "int design", label: "Interior Design" },
        { name: "arch", label: "Architecture" }
      ]);
    }
  };

  return (
    <>
      <div className="container w-5/6 mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 text-red-600">Courses</h1>
        <div className="filters px-2 mb-8">
          <h1 className="text-2xl font-bold mb-4 text-black-600">Filters</h1>
          <div className="filter-fields">
            <div className="field-container flex mb-4 justify-between" style={{"max-width": "410px"}}>
              <h2 className='text-xl font-bold text-orange-600'>Faculty</h2>
              <select className="w-64 ml-4 border rounded p-1 border border-primary border-2" onChange={handleFacultyChange}>
                <option value="all" selected>All</option>
                <option value="engineering">Engineering</option>
                <option value="economics">Economics</option>
                <option value="architecture">Architecture</option>
              </select>
            </div>
            <div className="field-container flex justify-between" style={{"max-width": "410px"}}>
              <h2 className='text-xl font-bold text-orange-600'>Department</h2>
              <select className="w-64 ml-4 border rounded p-1 border border-primary border-2">
                <option value="all" selected>All</option>
                {departments.map((dept) => (
                  <option key={dept.name} value={dept.name}>{dept.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-600">Course Name</h1>
        <div className="max-h-64 overflow-y-auto mb-2">
          <table className="min-w-full bg-white border border-gray-300">
            <tbody>
              {studentInfo.schedule[0].courses.map((course, index) => (
                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'}`}>
                  <td className="py-2 px-4">{course.title}</td>
                  <td className="py-2 px-4">
                  <div className='flex justify-end gap-3'>
                    <button onClick={togglePopup} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                      Details
                    </button>
                    <button onClick={toggleEditFormVisibility} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                      Edit
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
            <p>Total Course Count: 150</p>
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
                      <h3 className="text-xl leading-6 font-medium text-gray-900" id="modal-title">
                        Course Details
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Course Code: <span>123</span>
                        </p>
                        <p className="text-sm text-gray-500">
                          Course Name: <span>123</span>
                        </p>
                        <p className="text-sm text-gray-500">
                          Course Instructor: <span>123</span>
                        </p>
                        <p className="text-sm text-gray-500">
                          Course Faculty: <span>123</span>
                        </p>
                        <p className="text-sm text-gray-500">
                          Course Department: <span>123</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button onClick={togglePopup} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
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
                        {/* Form content goes here */}
                        <form className="space-y-6">
                          <div className="rounded-md shadow-sm -space-y-px">
                            <div className='mb-2'>
                              <label htmlFor="courseName">Course Full Name</label>
                              <input id="courseName" name="courseName" type="text" autoComplete="given-name" required className="border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Course Name" />
                            </div>
                            <div className='flex gap-4' style={{"margin-bottom": "0.5rem"}}>
                              <div className='w-full'>
                                <label htmlFor="courseCode">Course Code</label>
                                <input id="courseCode" name="courseCode" type="text" autoComplete="given-name" required className="border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Course Code" />
                              </div>
                              <div className='w-full'>
                                <label htmlFor="courseCredits">Number of Credits</label>
                                <input id="courseCredits" name="courseCredits" type="text" autoComplete="given-name" required className="border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Course Credits" />
                              </div>
                            </div>
                            <div className='flex gap-4' style={{"margin-bottom": "0.5rem"}}>
                              <div className='flex flex-col w-full'>
                                <label htmlFor="faculty">Faculty</label>
                                <select id="faculty" className="px-3 py-2 border rounded border border-primary border-2" onChange={handleFacultyChange}>
                                  <option value="all" selected>All</option>
                                  <option value="engineering">Engineering</option>
                                  <option value="economics">Economics</option>
                                  <option value="architecture">Architecture</option>
                                </select>
                              </div>
                              <div className='flex flex-col w-full'>
                                <label htmlFor="department">Department</label>
                                <select id="department" className="px-3 py-2 border rounded border border-primary border-2" onChange={handleFacultyChange}>
                                  <option value="all" selected>All</option>
                                  {departments.map((dept) => (
                                    <option key={dept.name} value={dept.name}>{dept.label}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className='flex gap-4 mb-4'>
                                <div className='flex flex-col w-full'>
                                  <label htmlFor="instructor">Instructor</label>
                                  <select id="instructor" className="px-3 py-2 border rounded border border-primary border-2" onChange={handleFacultyChange}>
                                    <option value="" disabled selected>Select</option>
                                    <option value="mustafa">mustafa</option>
                                    <option value="felix">felix</option>
                                    <option value="ibrahim">ibrahim</option>
                                  </select>
                                </div>
                                <div className='w-full'>
                                  <label htmlFor="preRequisites">Prerequisites</label>
                                  <input id="preRequisites" name="preRequisites" type="text" autoComplete="given-name" required className="border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Course Names" />
                                </div>
                              </div>
                            {/* Add other form fields similarly */}
                          </div>
                          <div className="flex items-center justify-between">
                            <button type="submit" onClick={toggleFormVisibility} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
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
        {showEditForm && (
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
                      {/* Form content goes here */}
                      <form className="space-y-6">
                        <div className="rounded-md shadow-sm -space-y-px">
                          <div className='mb-2'>
                            <label htmlFor="courseName">Course Full Name</label>
                            <input id="courseName" name="courseName" type="text" required className="border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Course Name" />
                          </div>
                          <div className='flex gap-4' style={{"margin-bottom": "0.5rem"}}>
                            <div className='w-full'>
                              <label htmlFor="courseCode">Course Code</label>
                              <input id="courseCode" name="courseCode" type="text" required className="border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Course Code" />
                            </div>
                            <div className='w-full'>
                              <label htmlFor="courseCredits">Number of Credits</label>
                              <input id="courseCredits" name="courseCredits" type="text" required className="border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Course Credits" />
                            </div>
                          </div>
                          <div className='flex gap-4' style={{"margin-bottom": "0.5rem"}}>
                            <div className='flex flex-col w-full'>
                              <label htmlFor="faculty">Faculty</label>
                              <select id="faculty" className="px-3 py-2 border rounded border border-primary border-2" onChange={handleFacultyChange}>
                                <option value="all" selected>All</option>
                                <option value="engineering">Engineering</option>
                                <option value="economics">Economics</option>
                                <option value="architecture">Architecture</option>
                              </select>
                            </div>
                            <div className='flex flex-col w-full'>
                              <label htmlFor="department">Department</label>
                              <select id="department" className="px-3 py-2 border rounded border border-primary border-2" onChange={handleFacultyChange}>
                                <option value="all" selected>All</option>
                                {departments.map((dept) => (
                                  <option key={dept.name} value={dept.name}>{dept.label}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className='flex gap-4 mb-4'>
                              <div className='flex flex-col w-full'>
                                <label htmlFor="instructor">Instructor</label>
                                <select id="instructor" className="px-3 py-2 border rounded border border-primary border-2" onChange={handleFacultyChange}>
                                  <option value="" disabled selected>Select</option>
                                  <option value="mustafa">mustafa</option>
                                  <option value="felix">felix</option>
                                  <option value="ibrahim">ibrahim</option>
                                </select>
                              </div>
                              <div className='w-full'>
                                <label htmlFor="preRequisites">Prerequisites</label>
                                <input id="preRequisites" name="preRequisites" type="text" required className="border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Course Names" />
                              </div>
                            </div>
                          {/* Add other form fields similarly */}
                        </div>
                        <div className="flex items-center justify-between">
                          <button type="submit" onClick={toggleEditFormVisibility} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Edit Course
                          </button>
                          <button onClick={toggleEditFormVisibility} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="reset">
                            Cancel
                          </button>
                          <button onClick={toggleEditFormVisibility} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="reset">
                            Delete
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