import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const AddUser = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    departmentId: '',
    email: '',
    password: '',
    role: '',
    advisorID: ''
  });

  // State to store the fetched advisors
  const [advisors, setAdvisors] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const advisorResponse = await axios.get('http://localhost:5145/Advisor');
        setAdvisors(advisorResponse.data);

        //fetching departments data
        const departmentResponse = await axios.get('http://localhost:5145/Department');
        setDepartments(departmentResponse.data);
      } catch (error) {
        console.error("Error fetching advisors:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({...prevState, [name]: value }));
  };

  const handleDepartmentChange = (event) => {
    const selectedDepartmentId = parseInt(event.target.value); // Parse the selected department ID
    const selectedDepartment = departments.find(dep => dep.departmentId === selectedDepartmentId);
    if (selectedDepartment) {
      setFormData(prevState => ({...prevState, departmentId: selectedDepartment.departmentId}));
    }
  };

  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setFormData(prevState => ({
     ...prevState,
      role: selectedRole,
      advisorID: selectedRole === 'advisor'? -1 : prevState.advisorID // Reset advisor if role is not advisor
    }));
  };

  const handleAdvisorChange = (event) => {
    const selectedAdvisorId = parseInt(event.target.value);
    const selectedAdvisor = advisors.find(advisor => advisor.advisorId === selectedAdvisorId);
    if (selectedAdvisor) {
      // Update the state with only the advisor ID
      setFormData(prevState => ({
      ...prevState,
        advisorID: selectedAdvisorId // Store only the advisor ID
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Map formData to match the API expected format
    let apiData;

    try {
      if(formData.role === 'student'){
        apiData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          departmentId: formData.departmentId,
          advisorId: formData.advisorID,
          email: formData.email,
          password: formData.password
        };
        // const postStudentResponse = await axios.post('http://localhost:5145/Student', apiData);
        await axios.post('http://localhost:5145/Student', apiData);
        console.log("student post request handled successfully");
      } else if (formData.role === 'advisor') {
        // Default values for advisor role
        apiData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          departmentId: formData.departmentId,
          email: formData.email,
          password: formData.password
        };
        const postProfessorResponse = await axios.post('http://localhost:5145/Professor', apiData);
        console.log("professor post request handled successfully");
        // const postAdvisorResponse = await axios.post('http://localhost:5145/Advisor', {
        //   "professorId": postProfessorResponse.data
        // });
        await axios.post('http://localhost:5145/Advisor', {
          "professorId": postProfessorResponse.data
        });
        console.log("advisor post request handled successfully");
      }
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container w-5/6 mx-auto px-4 py-8">
        <h1 className='text-3xl font-bold mb-2 text-red-600'>Add User</h1>
        <form className='p-2' onSubmit={handleSubmit}>
          <div className="p-2 fields mb-2">
              <div className="flex gap-4 mb-2">
                  <div className="input-item w-full">
                      <label className='text-xl font-bold' htmlFor="firstName">Name</label>
                      <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleFieldChange} className='border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' required/>
                  </div>
                  <div className="input-item w-full">
                      <label className='text-xl font-bold' htmlFor="lastName">Surname</label>
                      <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleFieldChange} className='border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' required/>
                  </div>
              </div>
              <div className="flex gap-4">
                  <div className="input-item w-full">
                      <label className='text-xl font-bold' htmlFor="email">E-mail</label>
                      <input type="email" name="email" id="email" value={formData.email} onChange={handleFieldChange} className='border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' required/>
                  </div>
                  <div className="input-item w-full">
                      <label className='text-xl font-bold' htmlFor="password">Password</label>
                      <input type="password" name="password" id="password" value={formData.password} onChange={handleFieldChange} className='border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' required/>
                  </div>
              </div>
          </div>
          <div className="input-item w-full flex flex-col mb-5">
            <label className='text-xl font-bold' htmlFor="department">Department</label>
            <select id="department" name="departmentId" value={formData.departmentId  || '0'} onChange={handleDepartmentChange} className="px-3 py-2 border rounded border border-primary border-2">
              <option value="">Select a department</option>
              {departments.map(dep => (
                  <option key={dep.departmentId} value={dep.departmentId}>{dep.departmentName}</option> // Changed value to dep.id
              ))}
            </select>
          </div>
          <div className="flex gap-4">
            <div className="input-item w-full flex flex-col mb-5">
              <label className='text-xl font-bold' htmlFor="role">Role</label>
              <select id="role" name="role" value={formData.role} onChange={handleRoleChange} className="px-3 py-2 border rounded border border-primary border-2">
                <option value="">Select a role</option>
                <option value="student">Student</option>
                <option value="advisor">Advisor</option>
              </select>
            </div>
            {formData.role === 'student' && (
              <div className="input-item w-full flex flex-col mb-5">
                <label className='text-xl font-bold' htmlFor="advisorInput">Advisor</label>
                <select id="advisorInput" name="advisor" value={formData.advisorID || '0'} onChange={handleAdvisorChange} className="px-3 py-2 border rounded border border-primary border-2">
                  <option value="">Select an advisor</option>
                  {advisors.map(advisor => (
                    <option key={advisor.advisorId} value={advisor.advisorId}>{advisor.professor.firstName + ' ' + advisor.professor.lastName}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between m-auto" style={{ width: "55%" }}>
            <button type="reset" className="text-xl bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Clear Form
            </button>
            <button type="submit" className="text-xl bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add User
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUser;