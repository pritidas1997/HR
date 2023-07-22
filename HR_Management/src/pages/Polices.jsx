import footer from "../assets/img/img-footer-map.webp";
import team from "../assets/img/img-team.webp";
import teamone from "../assets/img/persons.webp";
import people from "../assets/img/hiring-waitress1098-13288.webp";

import peopletwo from "../assets/img/peppletwo.webp";
export default function Polices() {
  return (
    <>
      <section className="breadcrumbs-sec">
        <div className="container breadcrumbs-container">
          <div className="row breadcrumbs-row">
            <div className="col-md-12 breadcrumbs-col">
              <div className="breadcrumbs-title">
                <h1>HR Polices</h1>
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
                  <span>HR COMPLIANCE</span>
                  <h1>HR policies</h1>
                  <p>
                    HR policies refer to a set of guidelines and procedures
                    established by an organization's Human Resources department
                    to govern the behavior, rights, and responsibilities of
                    employees within the organization. The specific content of
                    HR policies can vary depending on the industry, company
                    size, and legal requirements. However, here are some common
                    areas that HR policies may cover:
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
                <h1>Policies</h1>
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
                  <h1>Equal Employment Opportunity (EEO)</h1>
                  <p>
                    This policy ensures that all individuals have equal
                    opportunities in recruitment, hiring, promotion, and other
                    employment-related decisions, regardless of their race,
                    gender, age, religion, disability, or other protected
                    characteristics.
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
                  <h1>Anti-Harassment and Anti-Discrimination</h1>
                  <p>
                    These policies prohibit any form of harassment or
                    discrimination based on protected characteristics, such as
                    race, gender, sexual orientation, religion, national origin,
                    etc. They provide a framework for reporting and addressing
                    such incidents.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="avantage-box">
                <div className="avantage-img">
                  <img src={peopletwo} alt="" />
                </div>
                <div className="avantage-content">
                  <h1>Compensation and Benefits</h1>
                  <p>
                    This policy covers various aspects of employee compensation,
                    including base salary, bonuses, incentives, benefits (e.g.,
                    health insurance, retirement plans), pay scales, and salary
                    reviews.
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
