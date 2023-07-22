import footer from "../assets/img/img-footer-map.webp";

import teamone from "../assets/img/persons.webp";
import people from "../assets/img/hiring-waitress1098-13288.webp";
import order from "../assets/img/order-summary.webp";
import peopletwo from "../assets/img/peppletwo.webp";
import pay from "../assets/img/payslip.webp";
export default function Recruitment() {
  return (
    <>
      <section className="breadcrumbs-sec">
        <div className="container breadcrumbs-container">
          <div className="row breadcrumbs-row">
            <div className="col-md-12 breadcrumbs-col">
              <div className="breadcrumbs-title">
                <h1>Recruitment Services</h1>
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
                <h1>GROW WITH CONFIDENCE</h1>
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
                  <h1>Tap into a vast network of candidates</h1>
                  <p>
                    Do you have a hard time identifying and attracting quality
                    candidates? We can help you! Our extensive network of
                    applicants is composed of 20,000+ contacts ready to fill
                    your open positions. With our unique Applicant Tracking
                    Software JazzHR, we can post jobs on 25+ job boards
                    simultaneously, reaching 100,000+ candidates daily.
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
                  <h1>Get the fast results you are looking for</h1>
                  <p>
                    We know you are inundated by staffing agency calls every
                    day, many of whom have not delivered what they promised. We
                    are proud to say we are different and invite you to give us
                    a call. Have a brief conversation and give us the chance to
                    prove our knowledge and expertise. We customize our
                    recruiting and staffing solutions to fit your business
                    needs.
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
                  <h1>Build a strong, recognizable brand</h1>
                  <p>
                    Recruiters are often the first person your job candidates
                    interact with, and we take that responsibility seriously.
                    With our expertise, we promote your company in the best
                    light. Our team sells candidates on your company and its
                    open positions to stand out from the pack. location.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="avantage-box">
                <div className="avantage-img">
                  <img src={pay} alt="" />
                </div>
                <div className="avantage-content">
                  <h1>
                    Reduce turnover by 82% with a great onboarding strategy
                  </h1>
                  <p>
                    Did you know 88% of businesses don’t onboard new hires well?
                    Consequently, these new hires look for other career
                    opportunities shortly after being hired. With XcelHR, you
                    can retain new hires longer and make them productive sooner.
                    Our onboarding strategy can improve employee retention by
                    82% and productivity by over 70%.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="avantage-box">
                <div className="avantage-img">
                  <img src={order} alt="" />
                </div>
                <div className="avantage-content">
                  <h1>Collaborate with a team of experts</h1>
                  <p>
                    Our services provide solutions for every stage of your
                    employee life, from hire to retirement. Our list of services
                    includes payroll, benefits, recruiting and hiring,
                    unemployment and workers compensation insurance, compliance
                    and drug testing programs, family and medical leave, and
                    more. Focus on what you do best, and we do the rest
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
