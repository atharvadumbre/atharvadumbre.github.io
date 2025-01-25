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
                <h3 className="qualification__title">PNC Financial</h3>
                <span className="qualification__subtitle">USA</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>June 2024 - Present
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
                <h3 className="qualification__title">NJIT</h3>
                <span className="qualification__subtitle">Newark, NJ, USA</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>Sep 2023 - May 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Citus Infotech</h3>
                <span className="qualification__subtitle">India</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>Jan 2020 - Jul 2022
                </div>
              </div>
              <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Qualification