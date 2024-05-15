import React from 'react'
import Devider from '../components/Devider';
import Story from '../components/Story';
import Testimonial from '../components/Testimonial';

function About() {
  const story1 = {
    title: "Chicken Pepperoni",
    imageSrc: '/img/p1.png',
    description1: 'This is Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolores eligendi earum eveniet soluta officiis asperiores repellat, eum praesentium nihil totam. Non ipsa expedita repellat atque mollitia praesentium assumenda quo distinctio excepturi nobis tenetur, cum ab vitae fugiat hic aspernatur? Quos laboriosam, repudiandae exercitationem atque a excepturi vel. Voluptas, ipsa.',
    description2: "This is Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit laborum voluptas magnam sed ad illum? Minus officiis quod deserunt.",
    type: 0
  };

  const story2 = {
    title: "Chicken Pepperoni",
    imageSrc: '/img/p1.png',
    description1: 'This is Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolores eligendi earum eveniet soluta officiis asperiores repellat, eum praesentium nihil totam. Non ipsa expedita repellat atque mollitia praesentium assumenda quo distinctio excepturi nobis tenetur, cum ab vitae fugiat hic aspernatur? Quos laboriosam, repudiandae exercitationem atque a excepturi vel. Voluptas, ipsa.',
    description2: "This is Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit laborum voluptas magnam sed ad illum? Minus officiis quod deserunt.",
    type: 1
  };

  return (
    <div>
      <section className="about-sec section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="about-video">
                <div className="about-video-img" style={{ backgroundImage: 'url(/img/1.png)' }}>
                </div>
                <div className="play-btn-wp">
                  <a href="https://youtu.be/YBCQ-tubtAk?si=NWlgxxAbIs1Rs5QP" data-fancybox="video" className="play-btn">
                    <i class="bi bi-play-fill"></i>
                  </a>
                  <span>Watch The Recipe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <Story {...story1} />
        <Story {...story2} />
      </div>

      <section className="testimonials section bg-light pt-4">
        <div className="sec-wp">
          <div className="container">
            <div className="row">
              <Devider title={"What Our Customers"} subtitle={"WHAT THEY SAY"} />
            </div>
            <div className="row">
              <div className="col-lg-5">
                <div className="testimonials-img">
                  <img src="/img/1.png" alt='' />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-sm-6">
                    <Testimonial imageUrl={"/img/1.png"} message={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."} name={"User 1"} starCount={5} />
                  </div>
                  <div className="col-sm-6">
                    <Testimonial imageUrl={"/img/1.png"} message={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."} name={"User 2"} starCount={5} />
                  </div>
                  <div className="col-sm-6">
                    <Testimonial imageUrl={"/img/1.png"} message={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."} name={"User 3"} starCount={5} />
                  </div>
                  <div className="col-sm-6">
                    <Testimonial imageUrl={"/img/1.png"} message={"Lorem, ipsum dolor sit amet consectetur adipisicing elit."} name={"User 4"} starCount={5} />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="faq-sec section-repeat-img my-4" style={{ backgroundImage: 'url(/img/faq-bg.png)' }}>
        <div className="sec-wp">
          <div className="container">
            <div className="row">
              <Devider subtitle={"FAQ"} title={"Ask Question"}/>
            </div>
            <div className="faq-row">
              <div className="faq-box">
                <h4 className="h4-title">What are the login hours?</h4>
                <p>It is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ipsum
                  vitae fugit laboriosam dolor distinctio.</p>
              </div>
              <div className="faq-box">
                <h4 className="h4-title">What do i get my refund?</h4>
                <p>It is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ipsum
                  vitae fugit laboriosam dolor distinctio. Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="faq-box">
                <h4 className="h4-title">How long it will take food to arrive?</h4>
                <p>It is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ipsum
                  vitae fugit laboriosam dolor distinctio.</p>
              </div>
              <div className="faq-box">
                <h4 className="h4-title">Does your restaurant has both veg and non veg?</h4>
                <p>It is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ipsum
                  vitae fugit laboriosam dolor distinctio. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Voluptates, distinctio?</p>
              </div>
              <div className="faq-box">
                <h4 className="h4-title">What is cost of food delivery?</h4>
                <p>It is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ipsum
                  vitae fugit laboriosam dolor distinctio. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Nam officiis ducimus, cum enim repudiandae animi.</p>
              </div>
              <div className="faq-box">
                <h4 className="h4-title">Who is eligible for pro membership?</h4>
                <p>It is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ipsum
                  vitae fugit laboriosam dolor distinctio. </p>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}

export default About