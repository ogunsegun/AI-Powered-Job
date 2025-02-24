'use client'
import { useState, useEffect } from "react";
import jobs from "../utils/data";


//user is skills,
const userSkills = ['React', 'JavaScript', 'HTML', 'CSS'];

const JobRecommendations = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [missingSkills, setMissingSkills] = useState([]);

  const getMatchColor = (score) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  const handleApply = (job) => {
    const missing = job.requiredSkills.filter(skill => !userSkills.includes(skill));
    if(missing.length > 0) {
      setMissingSkills(missing);
      alert(`You're missing some skills: ${missing.join(", ")}. Consider upskilling!`);
    } else {
      alert ('Application submitted successfully!');
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Job Recommendations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company} - {job.location}</p>
            <p className="text-gray-700">Salary: {job.salary}</p>
            <div className="flex items-center mt-2">
              <span className={`px-4 py-2 text-white text-lg rounded ${getMatchColor(job.matchScore)}`}>Match Score: {job.matchScore}%</span>
            </div>
            <button 
              className="mt-4 bg-blue-500 text-white px-3 py-2 rounded-lg text-lg"
              onClick={() => handleApply(job)} >
                Apply Now
              </button>
            <button 
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded" 
              onClick={() => setSelectedJob(job)}
            >View Details</button>
          </div>
        ))}
      </div>

      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold">{selectedJob.title}</h2>
            <p className="text-gray-600">{selectedJob.company} - {selectedJob.location}</p>
            <p className="text-gray-700">Salary: {selectedJob.salary}</p>
            <p className="mt-2 font-semibold">Required Skills:</p>
            <ul className="list-disc pl-5">
              {selectedJob.requiredSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <button 
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setSelectedJob(null) }
            >
              Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobRecommendations;


















// import React from 'react'
// import { jobs } from '@utils/data';


// const Jobsr = () => {
  

//   return (
//     <section className="w-full flex-center flex-col">
//         <h1 className='head_text text-center'>
//             Job Recommendations
//         </h1>
//         {jobs.map((job) => (
//             <div key={job.id} id={`job-${job.id}`} 
//             className='mb-4 p-4 shadow-lg rounded-lg'>
//                <h2 className='text-xl font-semibold'>{job.title}</h2>
//                <p className="text-gray-600">{job.company} - {job.location}</p>
//             <p className="text-gray-800 font-medium">Salary: {job.salary}</p>
//             <div className="mt-2">
//               <p className="text-gray-600">Match Score: {job.matchScore}%</p>
//               <Progress value={job.matchScore} max={100} />
//             </div>
//             </div>
            
//         ))}
//     </section>
//   )
// }

// export default Jobsr
