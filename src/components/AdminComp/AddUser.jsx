import React, { useState } from 'react';

const AddUser = () => {


  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [isRoleStudent, setIsRoleStudent] = useState(false);
  const [departments, setDepartments] = useState([
    { name: "cs", label: "Select a faculty" }
  ]);

  const handleUserRoleChange = (event) => {
    if (event.target.value === "student"){
      setIsRoleStudent(true);
    }else{
      setIsRoleStudent(false);
    }
  };

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
      <div className="container w-5/6 mx-auto px-4 py-8">
        <h1 className='text-3xl font-bold mb-2 text-red-600'>Add User</h1>
        <form className='p-2'>
          <h1 className="text-2xl font-bold mb-2 text-orange-500">Personal Details</h1>
          <div className="p-2 fields mb-2">
            <div className="flex gap-4 mb-2">
              <div className="input-item w-full">
                <label className='text-xl font-bold' htmlFor="fullName">Full Name</label>
                <input type="text" name="fullName" id="fullName" className='border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' required/>
              </div>
              <div className="input-item w-full">
                <label className='text-xl font-bold' htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" className='border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' required/>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="input-item" style={{"width": "25%"}}>
                <label className='text-xl font-bold' htmlFor="idNum">ID Number</label>
                <input type="text" name="idNum" id="idNum" className='border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' required/>
              </div>
              <div className="input-item" style={{"width": "23.5%"}}>
                <label className='text-xl font-bold' htmlFor="dob">Date of Birth</label>
                <input type="date" name="dob" id="dob" className='border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' required/>
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2 text-orange-500">Academic Details</h1>
          <div className='p-2 fields mb-2'>
            <div className="flex gap-4">
              <div className="input-item w-full flex flex-col">
                  <label className='text-xl font-bold' htmlFor="faculty">Faculty</label>
                  <select id="faculty" className="px-3 py-2 border rounded border border-primary border-2" onChange={handleFacultyChange}>
                    <option value="" selected disabled>Select Faculty</option>
                    <option value="engineering">Engineering</option>
                    <option value="economics">Economics</option>
                    <option value="architecture">Architecture</option>
                  </select>
              </div>
              <div className="input-item w-full flex flex-col">
                  <label className='text-xl font-bold' htmlFor="department">Department</label>
                  <select id="department" className="px-3 py-2 border rounded border border-primary border-2">
                    <option value="" selected disabled>Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept.name} value={dept.name}>{dept.label}</option>
                    ))}
                  </select>
              </div>
            </div>
          </div>
          <div className='p-2 fields mb-2'>
            <div className="flex gap-4">
              <div className="input-item w-full flex flex-col">
                  <label className='text-xl font-bold' htmlFor="userRole">User Role</label>
                  <select id="userRole" className="px-3 py-2 border rounded border border-primary border-2" onChange={handleUserRoleChange}>
                    <option value="" selected disabled>Select User Role</option>
                    <option value="advisor">Advisor</option>
                    <option value="student">Student</option>
                  </select>
              </div>

              {isRoleStudent && (
                <div className="input-item w-full flex flex-col">
                  <label className='text-xl font-bold' htmlFor="advisor">Advisor</label>
                  <select id="advisor" className="px-3 py-2 border rounded border border-primary border-2">
                    <option value="" selected disabled>Select Advisor for student</option>
                    <option value="mustafa">Mustafa Ayoubi</option>
                    <option value="felix">Felix Babalola</option>
                    <option value="ahmed">Ahmet Aker</option>
                  </select>
                </div>
              )}
              
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2 text-orange-500">Credentials</h1>
          <div className='p-2 fields mb-8'>
            <div className="flex gap-4">
              <div className="input-item w-full">
                  <label className='text-xl font-bold' htmlFor="username">Username</label>
                  <input type="text" name="dob" id="dob" className='border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' required/>
              </div>
              <div className="input-item w-full">
                  <label className='text-xl font-bold' htmlFor="password">Password</label>
                  <input type="text" name="dob" id="dob" className='border border-primary border-2 appearance-none rounded relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' required/>    
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between m-auto" style={{"width": "20%"}}>
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
