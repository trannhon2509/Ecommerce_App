import React from 'react'

function Devider({ title, subtitle, content }) {
    return (
        <div className='section'>
            <div className="row">
                <div className="col-lg-12">
                    <div className="sec-title text-center mb-5">
                        {subtitle && <p className="sec-sub-title mb-3">{subtitle}</p>}
                        <h2 className="h2-title">{title}</h2>
                        <div className="sec-title-shape mb-4">
                            <img src="/img/title-shape.svg" alt='' />
                        </div>
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Devider
