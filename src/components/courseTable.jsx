import React from 'react'

const CourseSchedule = () => {
  return (
    <div className='bg-white shadow-md'>
      <table className='w-full text-sm'>
        <thead className='bg-gray-200'>
          <tr>
            <th className='pb-4 px-2'></th>
            <th className='pb-4 px-2'>Monday</th>
            <th className='pb-4 px-2'>Tuesday</th>
            <th className='pb-4 px-2'>Wednesday</th>
            <th className='pb-4 px-2'>Thursday</th>
            <th className='pb-4 px-2'>Friday</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr
              className={`border-b ${
                index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
              }`}
            >
              <td className='px-2 py-4'>{`${8 + index}:30 - ${
                9 + index
              }:20`}</td>
              {Array.from({ length: 5 }).map((_, idx) => (
                <td
                  className={`px-2 py-4 ${
                    idx === 2 ? 'bg-gray-500 text-white' : ''
                  }`}
                >
                  {idx === 2 || idx === 4 ? 'Course Code' : ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default CourseSchedule
