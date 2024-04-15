import React, { useState } from 'react'
import NavBar from './navBar';

const AcademicRecord = () => {
    return (
        <div className="min-h-screen bg-white">
            <NavBar/>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <h1 className="text-3xl font-bold mb-6">Academic Record</h1>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="text-left font-semibold text-red-600 px-6 py-4">Course name</th>
                                <th className="text-left font-semibold text-red-600 px-6 py-4">Year</th>
                                <th className="text-left font-semibold text-red-600 px-6 py-4">Semester</th>
                                <th className="text-left font-semibold text-red-600 px-6 py-4">Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 8 }, (_, index) => (
                                <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                    <td className="px-6 py-4">Computer Programming I</td>
                                    <td className="px-6 py-4">2022</td>
                                    <td className="px-6 py-4">Spring</td>
                                    <td className="px-6 py-4">A</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AcademicRecord