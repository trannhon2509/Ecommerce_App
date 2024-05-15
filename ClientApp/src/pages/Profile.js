import React from "react";

function Profile() {
  return (
    <section className="py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row gy-4 gy-lg-0">
          <div className="col-12 col-lg-4 col-xl-3">
            <div className="row gy-4">
              <div className="col-12">
                <div className="card widget-card border-light shadow-sm">
                  <div className="card-header text-bg-primary">
                    Welcome, Ethan Leo
                  </div>
                  <div className="card-body bg-light">
                    <div className="text-center mb-3">
                      <img
                        src="/img/logo.png"
                        width={100}
                        className="img-fluid rounded-circle"
                        alt="Luna John"
                      />
                    </div>
                    <h5 className="text-center mb-1">Ethan Leo</h5>
                    <p className="text-center text-secondary mb-4">
                      Project Manager
                    </p>
                    <ul className="list-group list-group-flush mb-4">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <h6 className="m-0">Followers</h6>
                        <span>7,854</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <h6 className="m-0">Following</h6>
                        <span>5,987</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <h6 className="m-0">Friends</h6>
                        <span>4,620</span>
                      </li>
                    </ul>
                    <div className="d-grid m-0">
                      <button className="btn btn-success shadow" type="button">
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card widget-card border-light shadow-sm">
                  <div className="card-header text-bg-primary">
                    Social Accounts
                  </div>
                  <div className="card-body bg-light">
                    <a
                      href="#!"
                      className="d-inline-block bg-dark link-light lh-1 p-2 rounded"
                    >
                      <i className="bi bi-youtube" />
                    </a>
                    <a
                      href="#!"
                      className="d-inline-block bg-dark link-light lh-1 p-2 rounded"
                    >
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a
                      href="#!"
                      className="d-inline-block bg-dark link-light lh-1 p-2 rounded"
                    >
                      <i className="bi bi-facebook" />
                    </a>
                    <a
                      href="#!"
                      className="d-inline-block bg-dark link-light lh-1 p-2 rounded"
                    >
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card widget-card border-light shadow-sm">
                  <div className="card-header text-bg-primary">About Me</div>
                  <div className="card-body bg-light">
                    <ul className="list-group list-group-flush mb-0">
                      <li className="list-group-item">
                        <h6 className="mb-1">
                          <span className="bii bi-mortarboard-fill me-2" />
                          Education
                        </h6>
                        <span>M.S Computer Science</span>
                      </li>
                      <li className="list-group-item">
                        <h6 className="mb-1">
                          <span className="bii bi-geo-alt-fill me-2" />
                          Location
                        </h6>
                        <span>Mountain View, California</span>
                      </li>
                      <li className="list-group-item">
                        <h6 className="mb-1">
                          <span className="bii bi-building-fill-gear me-2" />
                          Company
                        </h6>
                        <span>GitHub Inc</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 col-xl-9">
            <div className="card widget-card border-light shadow-sm">
              <div className="card-body p-4 bg-light">
                <ul className="nav nav-tabs" id="profileTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active fw-bold text-black"
                      id="overview-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#overview-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="overview-tab-pane"
                      aria-selected="true"
                    >
                      Overview
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link fw-bold text-black"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="profile-tab-pane"
                      aria-selected="false"
                    >
                      Profile
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link fw-bold text-black"
                      id="password-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#password-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="password-tab-pane"
                      aria-selected="false"
                    >
                      Password
                    </button>
                  </li>
                </ul>
                <div className="tab-content pt-4" id="profileTabContent">
                  <div
                    className="tab-pane fade show active bg-light"
                    id="overview-tab-pane"
                    role="tabpanel"
                    aria-labelledby="overview-tab"
                    tabIndex={0}
                  >
                    <h5 className="mb-3">About</h5>
                    <p className="lead mb-3">
                      Ethan Leo is a seasoned and results-driven Project Manager
                      who brings experience and expertise to project management.
                      With a proven track record of successfully delivering
                      complex projects on time and within budget, Ethan Leo is
                      the go-to professional for organizations seeking efficient
                      and effective project leadership.
                    </p>
                    <h5 className="mb-3">Profile</h5>
                    <div className="row g-0">
                      <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div className="p-2">First Name</div>
                      </div>
                      <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                        <div className="p-2">Ethan</div>
                      </div>
                      <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div className="p-2">Last Name</div>
                      </div>
                      <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                        <div className="p-2">Leo</div>
                      </div>
                      <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div className="p-2">Education</div>
                      </div>
                      <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                        <div className="p-2">M.S Computer Science</div>
                      </div>
                      <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div className="p-2">Address</div>
                      </div>
                      <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                        <div className="p-2">Mountain View, California</div>
                      </div>
                      <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div className="p-2">Country</div>
                      </div>
                      <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                        <div className="p-2">United States</div>
                      </div>
                      <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div className="p-2">Job</div>
                      </div>
                      <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                        <div className="p-2">Project Manager</div>
                      </div>
                      <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div className="p-2">Company</div>
                      </div>
                      <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                        <div className="p-2">GitHub Inc</div>
                      </div>
                      <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div className="p-2">Phone</div>
                      </div>
                      <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                        <div className="p-2">+1 (248) 679-8745</div>
                      </div>
                      <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div className="p-2">Email</div>
                      </div>
                      <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                        <div className="p-2">leo@example.com</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabIndex={0}
                  >
                    <form action="#!" className="row gy-3 gy-xxl-4 bg-light">
                      <div className="col-12 col-md-6">
                        <label htmlFor="inputFirstName" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="search"
                          id="inputFirstName"
                          defaultValue="Ethan"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="inputLastName" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="search"
                          id="inputLastName"
                          defaultValue="Leo"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="inputEducation" className="form-label">
                          Education
                        </label>
                        <input
                          type="text"
                          className="search"
                          id="inputEducation"
                          defaultValue="M.S Computer Science"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="inputPhone" className="form-label">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="search"
                          id="inputPhone"
                          defaultValue={+12486798745}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="inputEmail" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="search"
                          id="inputEmail"
                          defaultValue="leo@example.com"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="inputAddress" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="search"
                          id="inputAddress"
                          defaultValue="Mountain View, California"
                        />
                      </div>
                      
                     
                      <div className="col-12 col-md-6">
                        <label htmlFor="inputX" className="form-label">
                          Tiktok
                        </label>
                        <input
                          type="text"
                          className="search"
                          id="inputX"
                          defaultValue="https://twitter.com/EthanLeo"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="inputFacebook" className="form-label">
                          Facebook
                        </label>
                        <input
                          type="text"
                          className="search"
                          id="inputFacebook"
                          defaultValue="https://www.facebook.com/EthanLeo"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="inputLinkedIn" className="form-label">
                          Instagram
                        </label>
                        <input
                          type="text"
                          className="search"
                          id="inputLinkedIn"
                          defaultValue="https://www.linkedin.com/EthanLeo"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="inputLinkedIn" className="form-label">
                          Youtube
                        </label>
                        <input
                          type="text"
                          className="search"
                          id="inputLinkedIn"
                          defaultValue="https://www.linkedin.com/EthanLeo"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputAbout" className="form-label">
                          About
                        </label>
                        <textarea
                          className="search"
                          id="inputAbout"
                          defaultValue={
                            "Ethan Leo is a seasoned and results-driven Project Manager who brings experience and expertise to project management. With a proven track record of successfully delivering complex projects on time and within budget, Ethan Leo is the go-to professional for organizations seeking efficient and effective project leadership."
                          }
                          style={{height: '100px'}}
                        />
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="password-tab-pane"
                    role="tabpanel"
                    aria-labelledby="password-tab"
                    tabIndex={0}
                  >
                    <form action="#!">
                      <div className="row gy-3 gy-xxl-4 bg-light">
                        <div className="col-12">
                          <label
                            htmlFor="currentPassword"
                            className="form-label"
                          >
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="search"
                            id="currentPassword"
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="newPassword" className="form-label">
                            New Password
                          </label>
                          <input
                            type="password"
                            className="search"
                            id="newPassword"
                          />
                        </div>
                        <div className="col-12">
                          <label
                            htmlFor="confirmPassword"
                            className="form-label"
                          >
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            className="search"
                            id="confirmPassword"
                          />
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary shadow">
                            Change Password
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
