import React from 'react';
import "./skills.css";
import WebDevelopment from './WebDevelopment';
import MachineLearning from './MachineLearning';
import GenAi from './GenAi';
import Cloud from './Cloud';
import Languages from './Languages';
import ETL from './ETL'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Stack</span>

        <div className="skills__container container grid">
            <Languages />
            <MachineLearning />
            <Cloud />
            <ETL />
            <GenAi />
            <WebDevelopment />
        </div>
    </section>
  )
}

export default Skills