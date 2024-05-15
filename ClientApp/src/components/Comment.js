import React from 'react'
import '../assets/css/Comment.css'
function Comment() {
  return (
    <section className="content-item" id="comments">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <form>
              <h3 className="pull-left">New Comment</h3>
              <button type="submit" className="btn btn-normal pull-right">Submit</button>
              <fieldset>
                <div className="row">
                  <div className="col-sm-3 col-lg-2 hidden-xs">
                    <img className="img-responsive" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt />
                  </div>
                  <div className="form-group col-xs-12 col-sm-9 col-lg-10">
                    <textarea className="form-control" id="message" placeholder="Your message" required defaultValue={""} />
                  </div>
                </div>
              </fieldset>
            </form>
            <h3>4 Comments</h3>
            <div className="media">
              <a className="pull-left" href="#"><img className="media-object" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt /></a>
              <div className="media-body">
                <h4 className="media-heading">John Doe</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className='d-flex align-items-center justify-content-around'>
                  <ul className="list-unstyled list-inline media-detail pull-left d-flex">
                    <li><i class="bi bi-calendar-check-fill"></i> 27/02/2014</li>
                    
                  </ul>
                  <ul className="list-unstyled list-inline media-detail pull-right d-flex justify-content-center align-items-center">
                    <li className><a href>Like 👍</a></li>
                    <li className><a href>Reply <i class="bi bi-reply-fill"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="media">
              <a className="pull-left" href="#"><img className="media-object" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt /></a>
              <div className="media-body">
                <h4 className="media-heading">John Doe</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className='d-flex align-items-center justify-content-around'>
                  <ul className="list-unstyled list-inline media-detail pull-left d-flex">
                    <li><i class="bi bi-calendar-check-fill"></i> 27/02/2014</li>
                    
                  </ul>
                  <ul className="list-unstyled list-inline media-detail pull-right d-flex justify-content-center align-items-center">
                    <li className><a href>Like 👍</a></li>
                    <li className><a href>Reply <i class="bi bi-reply-fill"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="media">
              <a className="pull-left" href="#"><img className="media-object" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt /></a>
              <div className="media-body">
                <h4 className="media-heading">John Doe</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className='d-flex align-items-center justify-content-around'>
                  <ul className="list-unstyled list-inline media-detail pull-left d-flex">
                    <li><i class="bi bi-calendar-check-fill"></i> 27/02/2014</li>
                    
                  </ul>
                  <ul className="list-unstyled list-inline media-detail pull-right d-flex justify-content-center align-items-center">
                    <li className><a href>Like 👍</a></li>
                    <li className><a href>Reply <i class="bi bi-reply-fill"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="media">
              <a className="pull-left" href="#"><img className="media-object" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt /></a>
              <div className="media-body">
                <h4 className="media-heading">John Doe</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className='d-flex align-items-center justify-content-around'>
                  <ul className="list-unstyled list-inline media-detail pull-left d-flex">
                    <li><i class="bi bi-calendar-check-fill"></i> 27/02/2014</li>
                    
                  </ul>
                  <ul className="list-unstyled list-inline media-detail pull-right d-flex justify-content-center align-items-center">
                    <li className><a href>Like 👍</a></li>
                    <li className><a href>Reply <i class="bi bi-reply-fill"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>

  )
}

export default Comment