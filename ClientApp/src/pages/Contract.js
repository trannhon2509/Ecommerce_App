import React from 'react'

function Contract() {
  return (
    <section className="newsletter-sec section pt-0 pb-4">
      <div className="sec-wp">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="newsletter-box text-center back-img white-text" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/paper-art-saving-water-world-environment-day-ecology-world-water-day-environmental-protection-save-earth-water-generate-ai_39665-884.jpg)' }}>
                <div className="bg-overlay dark-overlay" />
                <div className="sec-wp">
                  <div className="newsletter-box-text">
                    <h2 className="h2-title">Subscribe our newsletter</h2>
                    <p>This is Lorem ipsum dolor sit amet consectetur adipisicing elit ad
                      veritatis.</p>
                  </div>
                  <form action="#" className="newsletter-form">
                    <input className="newsletter-form-input" type='text' placeholder='Name' required/>
                    <input className="newsletter-form-input" type='email' placeholder='Email' required/>
                    <textarea className="form-input" placeholder="Your Message" required />
                    <button type="submit" className="sec-btn primary-btn">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Contract