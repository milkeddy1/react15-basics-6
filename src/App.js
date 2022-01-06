import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  console.log(jobs);
  if (loading) {
    return <section className="section loading">
      <h1>Loading...</h1>
    </section>
  }
  const { company, dates, duties, title } = jobs[value];
  // console.log(jobs);

  return <section className="section">
    <div className="title">
      <h2>expierence</h2>
      <div className="underline"></div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            jobs.map((item, index) => <button key={index} onClick={() => { return setValue(index) }} className={`job-btn  ${index === value && `active-btn`}`}>{item.company}</button>)
          }
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => <div className="job-desc" key={index}><FaAngleDoubleRight className="job-icon" />{duty}</div>)}
        </article>
      </div>
    </div>
  </section>
}

export default App
