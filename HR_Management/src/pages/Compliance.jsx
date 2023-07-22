import footer from "../assets/img/img-footer-map.webp";
import team from "../assets/img/img-team.webp";
import teamone from "../assets/img/persons.webp";
import people from "../assets/img/hiring-waitress1098-13288.webp";

import peopletwo from "../assets/img/peppletwo.webp";

export default function Compliance() {
  return (
    <>
      <section className="breadcrumbs-sec">
        <div className="container breadcrumbs-container">
          <div className="row breadcrumbs-row">
            <div className="col-md-12 breadcrumbs-col">
              <div className="breadcrumbs-title">
                <h1>Compliance Services</h1>
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
                  <h1>
                    Take some of the sting<p>out of running a business</p>
                  </h1>
                  <p>
                    When you’re running a small business, you’re often juggling
                    multiple administrative tasks at once with limited
                    resources. It’s hard to keep a consistent eye on HR
                    operations and legal compliance when more urgent business
                    matters demand your attention. Luckily, we exist to handle
                    the nuts and bolts of HR operations for resource-strapped
                    businesses.
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
                <h1>Compliance</h1>
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
                  <h1>Compliance risk</h1>
                  <p>
                    We perfect your current HR procedures and help develop new
                    policies to support your operations effectively and keep
                    your team from making costly mistakes.
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
                  <h1>Operational HR risk</h1>
                  <p>
                    We assist you with the human resources issues so you can
                    have the ability to focus on strategic objectives. We are
                    here to combat skill shortages and offer benefits to prevent
                    losing key employees.
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
                  <h1>Financial risk</h1>
                  <p>
                    We provide a system for checks and balances that keep
                    paycheck and benefit deductions controlled, minimizing your
                    risk for mistakes and wage & hour issues.
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
