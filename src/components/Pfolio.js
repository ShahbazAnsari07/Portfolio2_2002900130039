import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootdtrap.min.js';
import './style.css';

function Portfolio() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">CRC Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#adi"><b>Home</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#adi2"><b>Assignment</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#adi3"><b>Courses</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#adi4"><b>About</b></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container" style={{ marginTop: '20px' }}>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img style={{ height: '450px', width: '400px' }} src="./images/img1.jpg" className="d-block w-100" alt="image" />
            </div>
            <div className="carousel-item">
              <img style={{ height: '450px', width: '400px' }} src="./images/img2.jpg" className="d-block w-100" alt="image" />
            </div>
            <div className="carousel-item">
              <img style={{ height: '450px', width: '400px' }} src="./images/img3.jpg" className="d-block w-100" alt="image" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Week 1 */}
        <div className="container mt-2" id="adi2">
          <h1 style={{ textAlign: 'center' }}><b>Week 1</b></h1>
          <div className="row">
            <div className="col md-4">
              <div className="card">
                <img
                  src="https://www.wikihow.com/images/thumb/5/5f/Make-a-Timetable-Step-3-Version-3.jpg/v4-460px-Make-a-Timetable-Step-3-Version-3.jpg.webp"
                  height="250px" className="card-img-top" alt="img"
                />
                <div className="card-body">
                  <h5 className="card-title">Assignment 1</h5>
                  <p className="card-text">Time table</p>
                  <a href="../day1/timetable.html" className="btn btn-primary" target="_blank">Detail</a>
                </div>
              </div>
            </div>

            
            {/* Rest of the cards and content */}
            {/* ... */}
            
          </div>
        </div>

        {/* Week 2 */}
        <div className="container mt-2" id="adi2">
          <h1 style={{ textAlign: 'center' }}><b>Week 2</b></h1>
          <div className="row">
            {/* Week 2 cards and content */}
            {/* ... */}
          </div>
        </div>

        {/* Week 3 */}
        <div className="container mt-2" id="adi2">
          <h1 style={{ textAlign: 'center' }}><b>Week 3</b></h1>
          <div className="row">
            {/* Week 3 cards and content */}
            {/* ... */}
          </div>
        </div>

        {/* Week 4 */}
        <div className="container mt-2" id="adi2">
          <h1 style={{ textAlign: 'center' }}><b>Week 4</b></h1>
          <div className="row">
            {/* Week 4 cards and content */}
            {/* ... */}
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    </div>
  );
}

export default Portfolio;
