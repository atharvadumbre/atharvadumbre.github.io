import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.linkedin.com/in/atharvadumbre/" className="home__social-icon" target="_blank" rel="noreferrer">
            <i className='uil uil-linkedin'></i>
        </a>

        <a href="https://github.com/atharvadumbre" className="home__social-icon" target="_blank" rel="noreferrer">
        <i className='uil uil-github-alt'></i>
        </a>

        <a href="https://www.kaggle.com/atharvadumbre" className="home__social-icon" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="kaggle"><path fill="#110638" d="M17.992,24h-2.868c-0.226,0-0.554-0.073-0.838-0.42l-4.403-5.872l-0.767,0.764v4.689c0,0.501-0.331,0.837-0.822,0.837H6.072c-0.492,0-0.822-0.336-0.822-0.837V0.837C5.25,0.336,5.58,0,6.072,0h2.223c0.492,0,0.822,0.336,0.822,0.837v12.487l4.806-5.096c0.252-0.262,0.525-0.393,0.814-0.393h2.964c0.317,0,0.592,0.178,0.715,0.465c0.125,0.29,0.073,0.64-0.126,0.851l-5.693,5.776l5.984,7.794c0.047,0.062,0.08,0.134,0.095,0.21l0.065,0.338c0.013,0.07,0.012,0.143-0.005,0.212C18.675,23.733,18.448,24,17.992,24z M6.25,22.999h1.867l0-4.734c0-0.133,0.053-0.26,0.147-0.354l1.321-1.317c0.103-0.102,0.239-0.155,0.389-0.145c0.144,0.01,0.277,0.083,0.364,0.199l4.735,6.315l2.456,0.031l-5.991-7.803c-0.152-0.198-0.135-0.478,0.041-0.656l5.618-5.7h-2.457c0.003,0.002-0.032,0.019-0.094,0.083l-5.666,6.008c-0.141,0.149-0.358,0.195-0.548,0.122c-0.19-0.076-0.315-0.26-0.315-0.465V1H6.25L6.25,22.999z M8.295,1c0.001,0,0.003,0,0.004,0L8.295,0.5V1z"></path></svg>
        </a>
    </div>
  )
}

export default Social