import React from 'react'
import { useState } from 'react';
import './qualification.css'

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
      setToggleState(index);
  }
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
          onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon">Education</i>
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
          onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon">Experience</i>
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">MS in Computer Science</h3>
                <span className="qualification__subtitle">Newark, NJ, USA</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2022 - 2024
                </div>
              </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
              <div>
                <h3 className="qualification__title">BE in Computer Engineering</h3>
                <span className="qualification__subtitle">Thane, Maharashtra, India</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2018 - 2022
                </div>
              </div>
            </div>
          </div>

        <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}
        >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Research Assistant - Data Scientist</h3>
                <span className="qualification__subtitle">Newark, NJ, USA</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2024 - 2024
                </div>
              </div>
              <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
              <div>
                <h3 className="qualification__title">Graduate Teaching Assistant: CS656</h3>
                <span className="qualification__subtitle">Newark, NJ, USA</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2023 - 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">AWS AI/ML Intern</h3>
                <span className="qualification__subtitle">Remote</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>Oct 2021 - Dec 2021
                </div>
              </div>
              <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
              <div>
                <h3 className="qualification__title">
                Cyber Security Intern </h3>
                <span className="qualification__subtitle">Remote</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>Jan 2021 - Jun 2021
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Qualification