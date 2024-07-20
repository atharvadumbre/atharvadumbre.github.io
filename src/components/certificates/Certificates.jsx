import React from 'react'
import "./certificates.css"
import aws from "..//..//assets/aws-certified-cloud-practitioner.png"
import oracle from "..//..//assets/oracle.jpg"
import ccna from "..//..//assets/ccna-introduction-to-networks.png"
import ibm from "..//..//assets/data-science-tools.png"

const Certificates = () => {
  return (
 

<section className="certificate section" id='certificates'>
        <h2 className="section__title">Certificates</h2>
        <span className="section__subtitle">Achievements & Recognition</span>

        <div className="certificate__container container grid">
      <div className="certificate__card">
        <img src={aws} alt="" className="certificate__img"/>
        <h3 className="certificate__title">AWS Cloud Practitoner</h3>
        <a href="https://www.credly.com/badges/5f7cc004-2148-460a-8f8c-611f819488e1/public_url" className="certificate__button">
        Certificate <i className="bx bx-right-arrow-alt certificate__button-icon"></i>
         </a>
      </div>

      <div className="certificate__card">
        <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/70106658" alt="" className="certificate__img" />
        <h3 className="certificate__title">Tensorflow Developer</h3>
        <a href="https://www.credential.net/ade741b9-55d5-4175-84c3-b7637a5989b3" className="certificate__button">
        Certificate <i className="bx bx-right-arrow-alt certificate__button-icon"></i>
         </a>
      </div>

      <div className="certificate__card">
        <img src={oracle} alt="" className="certificate__img" />
        <h3 className="certificate__title">Oracle Generative AI Professional</h3>
        <a href="https://drive.google.com/file/d/1laj1gXOjUEtpOwUY2KD5F_7RebAKXVjE/view?usp=sharing" className="certificate__button">
        Certificate <i className="bx bx-right-arrow-alt certificate__button-icon"></i>
         </a>
      </div>

      <div className="certificate__card">
        <img src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~3ZLC3ZX9HDUR/CERTIFICATE_LANDING_PAGE~3ZLC3ZX9HDUR.jpeg" alt="" className="certificate__img" />
        <h3 className="certificate__title">HTML, CSS, & JS for Web Developers</h3>
        <a href="https://www.coursera.org/account/accomplishments/verify/3ZLC3ZX9HDUR?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" className="certificate__button">
        Certificate <i className="bx bx-right-arrow-alt certificate__button-icon"></i>
         </a>
      </div>

      <div className="certificate__card">
        <img src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~9E6WRBUZPB62/CERTIFICATE_LANDING_PAGE~9E6WRBUZPB62.jpeg" alt="" className="certificate__img" />
        <h3 className="certificate__title">Getting Started with AWS ML</h3>
        <a href="https://coursera.org/share/77d851b78516a2b3e201c3ca984cfc8c" className="certificate__button">
        Certificate <i className="bx bx-right-arrow-alt certificate__button-icon"></i>
         </a>
      </div>

      <div className="certificate__card">
        <img src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~FXPXPEXFHAAE/CERTIFICATE_LANDING_PAGE~FXPXPEXFHAAE.jpeg" alt="" className="certificate__img" />
        <h3 className="certificate__title">Neural Networks and Deep Learning</h3>
        <a href="https://www.coursera.org/account/accomplishments/verify/FXPXPEXFHAAE?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" className="certificate__button">
        Certificate <i className="bx bx-right-arrow-alt certificate__button-icon"></i>
         </a>
      </div>

      <div className="certificate__card">
        <img src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~BLSW8MJSH45T/CERTIFICATE_LANDING_PAGE~BLSW8MJSH45T.jpeg" alt="" className="certificate__img" />
        <h3 className="certificate__title">Building Web Applications in PHP</h3>
        <a href="https://coursera.org/share/83971d167f160f8576742b4f26c0b21b" className="certificate__button">
        Certificate <i className="bx bx-right-arrow-alt certificate__button-icon"></i>
         </a>
      </div>

      <div className="certificate__card">
        <img src={ccna} alt="" className="certificate__img" />
        <h3 className="certificate__title">CCNA: Introduction to Networks</h3>
        <a href="https://www.credly.com/badges/9d1c3a1a-06bd-4870-ba68-b6fd695410e9/public_url" className="certificate__button">
        Certificate <i className="bx bx-right-arrow-alt certificate__button-icon"></i>
         </a>
      </div>

      <div className="certificate__card">
        <img src={ibm} alt="" className="certificate__img" />
        <h3 className="certificate__title">Data Science Tools</h3>
        <a href="https://www.credly.com/badges/ed300fac-f689-4c59-9f75-d02ace91e1a9/public_url" className="certificate__button">
        Certificate <i className="bx bx-right-arrow-alt certificate__button-icon"></i>
         </a>
      </div>


    </div>
    </section>
  )
}

export default Certificates