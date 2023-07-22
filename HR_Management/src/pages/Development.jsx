import React from "react";
import footer from "../assets/img/img-footer-map.webp";
import team from "../assets/img/img-team.webp";
import teamone from "../assets/img/persons.webp";
import people from "../assets/img/hiring-waitress1098-13288.webp";
import peopletwo from "../assets/img/img-people-03.png";
export default function Development() {
  return (
    <>
      <section className="breadcrumbs-sec">
        <div className="container breadcrumbs-container">
          <div className="row breadcrumbs-row">
            <div className="col-md-12 breadcrumbs-col">
              <div className="breadcrumbs-title">
                <h1>ONLINE SKILL DEVELOPMENT SERVICES</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="text-box">
                <div className="slide-content">
                  <span>Welcome to</span>
                  <h1>Introduction</h1>
                  <p>
                    In today's fast-paced and dynamic business environment,
                    organizations are constantly seeking ways to enhance their
                    workforce capabilities to stay competitive. Two key areas
                    that play a vital role in achieving this are online skill
                    development services and HR consulting. By integrating these
                    two components, organizations can effectively address skill
                    gaps, develop talent, and optimize their human resources.
                    This article explores the synergies between online skill
                    development services and HR consulting, highlighting their
                    benefits and how they contribute to organizational success.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src={team} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="avantage-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="avantage-heading">
                <span>WE ARE THERE FOR YOU</span>
                <h1>Online Skill Development Services</h1>
              </div>
            </div>
          </div>
          <div className="row avantage-row">
            <div className="col-md-4">
              <div className="avantage-box">
                <div className="avantage-img">
                  <img src={teamone} alt="" />
                </div>
                <div className="avantage-content">
                  <h1> Broadening Skill Sets</h1>
                  <p>
                    Online skill development services provide a vast array of
                    learning opportunities through courses, webinars, and
                    e-learning platforms. These resources offer employees the
                    chance to acquire new skills, expand their knowledge base,
                    and stay updated with industry trends.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="avantage-box">
                <div className="avantage-img">
                  <img src={people} alt="" />
                </div>
                <div className="avantage-content">
                  <h1> Flexible Learning Options</h1>
                  <p>
                    Online platforms allow employees to learn at their own pace
                    and convenience, eliminating the constraints of time and
                    location. This flexibility encourages continuous learning,
                    empowering individuals to upskill or reskill as per their
                    needs and interests.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="avantage-box">
                <div className="avantage-img">
                  <img src={people} alt="" />
                </div>
                <div className="avantage-content">
                  <h1>Specialized Training</h1>
                  <p>
                    Online skill development services often offer specialized
                    training programs tailored to specific job roles or
                    industries. This targeted approach enables organizations to
                    address skill gaps more effectively and ensure that
                    employees receive training aligned with their job
                    requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="list-footer">
                <span>AVANTAGE</span>
                <h1>Headquarters</h1>
                <p>
                  Organically grow the holistic world view of disruptive
                  innovation via empowerment.
                </p>
                <ul>
                  <li>
                    <a href="#">
                      <span className="icon">
                        <i className="fas fa-phone-alt"></i>
                      </span>
                      <span className="text">+917738442552</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon">
                        <i className="fas fa-home"></i>
                      </span>
                      <span className="text">mithilashetty@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon">
                        <i className="fas fa-globe-africa"></i>
                      </span>
                      <span className="text">iriquehitech.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="list-footer">
                <span>OUR LOCATIONS</span>
                <h1>Where to find us</h1>
                <div className="img-map">
                  <img src={footer} alt="" />
                </div>
                <ul>
                  <li>
                    <a href="#">
                      <span className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                      <span className="text">Mumbai</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                      <span className="text">Singapore</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="list-footer">
                <span>OUR LOCATIONS</span>
                <h1>Get inTouch</h1>
                <p>
                  Come and visit our quarters or simply send us an email anytime
                  you want. We are open to all suggestions from our clients.
                </p>
                <ul className="socile-list">
                  <li>
                    <a href="#">
                      <span className="icon">
                        <i className="fab fa-facebook"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon">
                        <i className="fab fa-twitter"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon">
                        <i className="fab fa-google-plus-g"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon">
                        <i className="fab fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
