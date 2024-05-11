import React from 'react'

function HeroBlob() {
    return (
        <div className='vh-100'>
            <section className="bsb-hero-2 px-3">
                <div className="container overflow-hidden">
                    <div className="row gy-3 gy-lg-0 align-items-lg-center justify-content-lg-between">
                        <div className="col-12 col-lg-6 order-1 order-lg-0">
                            <h1 className="display-3 fw-bold mb-3">Protect Enviroment</h1>
                            <p className="fs-4 mb-5">Powerful, extensible, and feature-packed frontend toolkit. Build and customize
                                with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful
                                JavaScript plugins.</p>
                            <div className="d-grid gap-2 d-sm-flex">
                                <button type="button" className="btn btn-primary bsb-btn-3xl rounded-pill">Free
                                    Consultation</button>
                                <button type="button" className="btn btn-outline-primary bsb-btn-3xl rounded-pill">Buy
                                    Credits</button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 text-center">
                            <img className="img-fluid" loading="lazy" src="/imgs/testimonial-img.png" alt='' style={{ WebkitMaskImage: 'url(/imgs/logo.png)' }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroBlob