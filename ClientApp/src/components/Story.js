import React from 'react'

function Story({ imageSrc, imageAlt, title, description1, description2, type }) {
    let posStory;
    type === 1 ? posStory = <section className="two-col-sec section pt-0">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 order-lg-1 order-2">
                    <div className="sec-text">
                        <h2 className="xxl-title">{title}</h2>
                        <p>{description1}</p>
                        <p>{description2}</p>
                    </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-1">
                    <div className="sec-img">
                        <img src={imageSrc} alt={imageAlt} />
                    </div>
                </div>
            </div>
        </div>
    </section> : posStory =
    <div>
        <section className="two-col-sec section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="sec-img mt-5">
                            <img src={imageSrc} alt={imageAlt} />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="sec-text">
                            <h2 className="xxl-title">{title}</h2>
                            <p>{description1}</p>
                            <p>{description2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    return (
        posStory
    )
}

export default Story

