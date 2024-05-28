import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const AddUser = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    departmentId: 0,
    email: '',
    password: '',
    role: '', // New field to store the user role
    advisorID: '' // New field to store the selected advisor (if role is advisor)
  });

  // State to store the fetched advisors
  const [advisors, setAdvisors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5145/Advisor');
        setAdvisors(response.data);
        console.log(response.data.advisorId);
      } catch (error) {
        console.error("Error fetching advisors:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  // Example list of departments
  const departments = [
    { id: 1, name: 'Computer Science' },
    { id: 2, name: 'Mathematics' },
    { id: 3, name: 'Physics' },
    // Add more departments as needed
  ];

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({...prevState, [name]: value }));
  };

  const handleDepartmentChange = (event) => {
    const selectedDepartmentId = parseInt(event.target.value); // Parse the selected department ID
    const selectedDepartment = departments.find(dep => dep.id === selectedDepartmentId);
    if (selectedDepartment) {
      setFormData(prevState => ({...prevState, departmentId: selectedDepartment.id}));
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

  const handleSubmit = /*async*/ (event) => {
    event.preventDefault();
    try {
      // const response = await axios.post('YOUR_ENDPOINT_URL', formData);
      console.log(formData);
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
            <select id="department" name="departmentId" value={formData.departmentId} onChange={handleDepartmentChange} className="px-3 py-2 border rounded border border-primary border-2">
              <option value="">Select a department</option>
              {departments.map(dep => (
                  <option key={dep.id} value={dep.id}>{dep.name}</option> // Changed value to dep.id
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
                <select id="advisorInput" name="advisor" value={formData.advisorID || -2} onChange={handleAdvisorChange} className="px-3 py-2 border rounded border border-primary border-2">
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