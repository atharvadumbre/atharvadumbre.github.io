import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Atharva Dumbre</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/atharvadumbre/" className="footer__social-link" target="_blank" rel="noreferrer">
                <i className='uil uil-linkedin'></i>
                </a>

                

                <a href="https://www.kaggle.com/atharvadumbre" className="footer__social-link" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" id="kaggle"><path d="M17.992 24h-2.868c-.226 0-.554-.073-.838-.42l-4.403-5.872-.767.764v4.689c0 .501-.331.837-.822.837H6.072c-.492 0-.822-.336-.822-.837V.837c0-.501.33-.837.822-.837h2.223c.492 0 .822.336.822.837v12.487l4.806-5.096c.252-.262.525-.393.814-.393h2.964c.317 0 .592.178.715.465.125.29.073.64-.126.851l-5.693 5.776 5.984 7.794c.047.062.08.134.095.21l.065.338a.505.505 0 0 1-.005.212c-.061.252-.288.519-.744.519zM6.25 22.999h1.867v-4.734a.5.5 0 0 1 .147-.354l1.321-1.317a.5.5 0 0 1 .753.054l4.735 6.315 2.456.031-5.991-7.803a.5.5 0 0 1 .041-.656l5.618-5.7H14.74c.003.002-.032.019-.094.083L8.98 14.926a.5.5 0 0 1-.863-.343V1H6.25v21.999zM8.295 1h.004L8.295.5V1z"></path></svg>
                </a>

                <a href="https://github.com/atharvadumbre" className="footer__social-link" target="_blank" rel="noreferrer">
                <i className='uil uil-github-alt'></i>
                </a>
            </div>
            <span className="footer__copy">&#169; Atharva Dumbre. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer