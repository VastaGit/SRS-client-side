import React from 'react'
import NavBar from './navBar'

const StudentHome = () => {
  return (
    <div class='container mx-auto mt-10'>
      <NavBar />
      <div class='bg-white p-8 border-2 border-black'>
        <h1 class='text-3xl font-bold mb-6'>Current Courses</h1>
        <table class='table-auto w-full striped-table'>
          <thead>
            <tr>
              <th class='border-2 border-black px-4 py-2 text-left'>
                Course name
              </th>
              <th class='border-2 border-black px-4 py-2 text-left'>
                Instructor
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class='border-2 border-black px-4 py-2'>
                Software Project Management
              </td>
              <td class='border-2 border-black px-4 py-2'>Felix Bablola</td>
            </tr>
            <tr>
              <td class='border-2 border-black px-4 py-2'>Calculus II</td>
              <td class='border-2 border-black px-4 py-2'>Ibrahim Avci</td>
            </tr>
            <tr>
              <td class='border-2 border-black px-4 py-2'>Linear Algebra</td>
              <td class='border-2 border-black px-4 py-2'>Ceren Ustaoglu</td>
            </tr>
            <tr>
              <td class='border-2 border-black px-4 py-2'>
                Software analysis and design
              </td>
              <td class='border-2 border-black px-4 py-2'>Ibrahim Adeshola</td>
            </tr>
            <tr>
              <td class='border-2 border-black px-4 py-2'>English II</td>
              <td class='border-2 border-black px-4 py-2'>Shahab Miri</td>
            </tr>
          </tbody>
        </table>
        <div class='mt-6'>
          <span class='text-2xl font-bold'>Current CGPA: 4.00</span>
        </div>
      </div>
    </div>
  )
}
export default StudentHome
