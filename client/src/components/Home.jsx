import React from 'react'

function Home() {
  return (
    <div>
     <section className="pb-12 pb-lg-24 bg-white">
 
  <div className="container">
    <div className="mw-lg-3xl mx-auto mb-24 text-center">
      <h1 className="mb-4">Boost your brand's visibility and reach fast.</h1>
      <p className="lead mw-xl mx-auto mb-10">
        Use and reuse tons of responsive sections to create the perfect layout.
        Sections are ready.
      </p>
      <a className="btn btn-primary py-4 mb-6" href="#">
        Try 14 Days Free Trial
      </a>
      <div>
        <span className="fs-6">No Credit Card Required / Cancel Anytime</span>
      </div>
    </div>
    <div className="position-relative d-lg-flex mw-lg mw-lg-3xl mw-xl-6xl mx-auto justify-content-between align-items-center">
      <img
        className="d-none d-lg-block position-absolute top-0 h-100 end-0 img-fluid rounded-pill"
        src="basko-assets/images/headers/avatar4.jpg"
        alt=""
      />
      <div className="mw-xl mw-lg-lg mw-xl-2xl position-relative">
        <div
          className="position-absolute top-0 start-0 d-block w-100 h-100 rounded-pill"
          style={{background:"red"}}
          
        ></div>
        <div className="position-relative d-lg-flex align-items-center">
          <div className="text-center flex-shrink-0 py-6 py-lg-0 px-12 ps-xl-24 pe-xl-16">
            <span className="d-block fs-1 text-white fw-semibold">168%</span>
            <span className="d-block mb-2 fs-4 fw-semibold text-white">
              Monthly Revenue
            </span>
            <p className="fs-6 text-white fw-medium">
              <span className="d-block">Average result customers sees</span>
              <span className="d-block">after using Subba</span>
            </p>
          </div>
          <img
            className="position-relative img-fluid ms-lg-n6 ms-xl-n0 mw-lg-sm mw-xl-none"
            src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg"
            alt="" style ={{width:"600px",height:"300px"}}
          />
        </div>
      </div>
    </div>
  </div>
  <div
    className="d-none navbar-menu position-fixed top-0 start-0 bottom-0 w-75 mw-xs"
    style={{ zIndex: 9999 }}
  >
    <div
      className="navbar-close navbar-backdrop position-fixed top-0 start-0 end-0 bottom-0 bg-dark"
      style={{ opacity: "75%" }}
    />
    <nav style={{border:"5px solid"}} className="position-relative h-100 w-100 d-flex flex-column justify-content-between py-8 px-8 bg-white overflow-auto">
      <div  className="d-flex align-items-center">
        <a  className="me-auto h4 mb-0 text-decoration-none" href="#">
          <img
            className="img-fluid"
            src="https://th.bing.com/th/id/OIG1.zqGNvLaTwcsJ_dYTr9xj"
            alt="" 
          />
        </a>
        <a className="navbar-close" href="#">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="#111827"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <div className="py-12">
        <ul className="nav flex-column">
          <li className="nav-item mb-4">
            <a className="nav-link text-dark" href="#">
              Features
            </a>
          </li>
          <li className="nav-item mb-4">
            <a className="nav-link text-dark" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item mb-4">
            <a className="nav-link text-dark" href="#">
              Automation
            </a>
          </li>
          <li className="nav-item pt-4 border-top">
            <a className="nav-link text-dark" href="#">
              Customer Login
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a className="btn btn-primary d-block" href="#">
          Try 14 Days Free Trial
        </a>
      </div>
    </nav>
  </div>
</section>
   
    </div>
  )
}

export default Home