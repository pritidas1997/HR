import footer from "../assets/img/img-footer-map.webp";
import team from "../assets/img/img-team.webp";
import teamone from "../assets/img/persons.webp";
import people from "../assets/img/hiring-waitress1098-13288.webp";
import peopletwo from "../assets/img/img-people-03.png";
export default function Training() {
  return (
    <>
      <section className="breadcrumbs-sec">
        <div className="container breadcrumbs-container">
          <div className="row breadcrumbs-row">
            <div className="col-md-12 breadcrumbs-col">
              <div className="breadcrumbs-title">
                <h1>Training Services</h1>
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
                  <h1>Our HR Training Services!</h1>
                  <p>
                    Invest in your employees' growth and enhance your
                    organization's performance with our comprehensive HR
                    training services. At [Company Name], we specialize in
                    delivering high-quality training programs designed to
                    empower your HR professionals, equip your managers with
                    essential skills, and create a positive and productive work
                    environment.
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
                <h1>Why Choose Our HR Training Services?</h1>
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
                  <h1>Tailored Programs</h1>
                  <p>
                    We understand that every organization has unique HR needs.
                    Our team of experienced HR trainers will work closely with
                    you to develop customized training programs that align with
                    your specific goals and challenges. From compliance and
                    employee relations to talent acquisition and leadership
                    development, we've got you covered.
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
                  <h1>Expert Instructors</h1>
                  <p>
                    Our trainers are industry experts with extensive knowledge
                    and practical experience in human resources. They bring
                    real-world insights and best practices to the training
                    sessions, ensuring that your employees receive the most
                    relevant and up-to-date information. Our instructors are
                    also skilled facilitators who create an interactive and
                    engaging learning environment.
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
