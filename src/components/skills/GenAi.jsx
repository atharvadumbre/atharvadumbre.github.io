import React from 'react'

const GenAi = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Gen AI</h3>
    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">OpenAI</h3>
                </div>
            </div>
{/* OpenAI */}
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">LangChain</h3>
                </div>
            </div>
{/* LangChain */}
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Hugging Face</h3>
                </div>
            </div>
{/* Hugging Face */}

        </div>

        <div className="skills__group">
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">LLM</h3>
                </div>
            </div>
{/* LLM (Large Language Models) */}
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">RAG</h3>
                </div>
            </div>
{/* RAG */}
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Multi-Agent Models</h3>
                </div>
            </div>
{/* Multi-Agent Models */}

        </div>

    </div>
</div>
  )
}

export default GenAi