import React from 'react'
// import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        AI-Powered Job Search
        <br />
        <span className="green_gradient text-center">
        AI-Powered Job Match Dashboard
      </span>
      </h1>
      <p className="desc text-center">
        This AI-Powered Job Search will help you assess the job’s technical depth, problem-solving skills, 
        UI/UX understanding, and ability to work with APIs.
      </p>
      {/* <Feed/> */}
    </section>
  )
}

export default Home
