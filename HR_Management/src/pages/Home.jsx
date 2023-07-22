import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import slideone from "../assets/img/img-slider-01.webp";
import slidetwo from "../assets/img/img-slider-02.webp";
import team from "../assets/img/img-team.webp";
import teamone from "../assets/img/img-people-01.webp";
import people from "../assets/img/img-people-02.png";
import peopletwo from "../assets/img/img-people-03.png";
import peoplethree from "../assets/img/img-people-04.png";
import gallery from "../assets/img/img-blog-33-1280x1280.jpg";
import galleryone from "../assets/img/img-portfolio-02-1280x1280.jpg";
import gallerytwo from "../assets/img/img-portfolio-03-1280x1280.jpg";
import quote from "../assets/img/img-quote.webp";
import footer from "../assets/img/img-footer-map.webp";

const Home = () => {
  return (
    <>
      <section className="banner-slider-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 slide-col">
              <div className="slide-box">
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide className="slide-one">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-7">
                          <div className="slide-img">
                            <img src={slideone} alt="" />
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="text-box">
                            <div className="slide-content">
                              <span>HR IS ALL ABOUT PEOPLE</span>
                              <h1>
                                The Right People<p>For Your Team</p>
                              </h1>
                              <a
                                href="#"
                                className="btn btn-theme-brand hire-btn"
                              >
                                HIRE OUR HR EXPERTS
                              </a>
                              <a
                                href="#"
                                className="btn btn-theme-brand viev-btn"
                              >
                                VIEW OUR SERVICES
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="slide-one">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="text-box">
                            <div className="slide-content">
                              <span>TODAY'S TALENT, TOMORROW'S SUCCESS</span>
                              <h1>
                                The Future<p>Is Bright</p>
                              </h1>
                              <a
                                href="#"
                                className="btn btn-theme-brand hire-btn"
                              >
                                HIRE OUR HR EXPERTS
                              </a>
                              <a
                                href="#"
                                className="btn btn-theme-brand viev-btn"
                              >
                                VIEW OUR SERVICES
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="slide-img">
                            <img src={slidetwo} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="needs-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-bpx">
                <span>DRIVING YOU FORWARD</span>
                <h1>Understanding your needs</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="headline_tag">
                <div className="headline_content">
                  <h1>Boost Business Growth</h1>
                  <p>
                    Secure a successful future for your enterprise by
                    collaborating with a CPEO like XcelHR. Grow 7 to 9% faster
                    and reduce your chances of going out of business.
                  </p>
                  <a href=" #">LEARN MORE</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="headline_tag">
                <div className="headline_content">
                  <h1>Optimize Profit</h1>
                  <p>
                    Save up to 40% in administrative costs and manage your
                    workforce smartly. Achieve economies of scale by taking full
                    advantage of our HR resources and group plans.
                  </p>
                  <a href=" #">LEARN MORE</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="headline_tag">
                <div className="headline_content">
                  <h1>Hire and Retain Talent</h1>
                  <p>
                    Locate and hire your “dream team” with fortune 500 benefits.
                    Gain access to thousands of renowned providers who offer
                    cost-effective benefit plans.
                  </p>
                  <a href=" #">LEARN MORE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="people-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="headline_tag">
                <div className="headline_content">
                  <span>Helping small businesses for 25+ years</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service_content">
                <div className="separator-service">
                  <div className="icon-box icon-one">
                    <span>
                      <i className="fas fa-users"></i>
                    </span>
                  </div>
                  <div className="service_content_title">
                    <h3>Manufacturing</h3>
                    <p>
                      XcelHR gives government contractors access to a complete
                      system of FAR-compliant HR software and services. Our team
                      makes navigating the red tape that surrounds working with
                      the federal government a little easier.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service_content">
                <div className="separator-service">
                  <div className="icon-box icon-two">
                    <span>
                      <i className="fas fa-border-none"></i>
                    </span>
                  </div>
                  <div className="service_content_title">
                    <h3>Professional Trades</h3>
                    <p>
                      Save valuable time and money with us. Our services can
                      lower the cost of benefits administration and workers’
                      compensation insurance, allowing you to realize other
                      efficiencies that will boost your bottom line.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service_content">
                <div className="separator-service">
                  <div className="icon-box icon-one">
                    <span>
                      <i className="fas fa-users"></i>
                    </span>
                  </div>
                  <div className="service_content_title">
                    <h3>Team Build Up</h3>
                    <p>
                      More and less froze grumbled ran{" "}
                      <p> hawk mindfully tearfully pending crud.</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service_content">
                <div className="separator-service">
                  <div className="icon-box icon-two">
                    <span>
                      <i className="fas fa-border-none"></i>
                    </span>
                  </div>
                  <div className="service_content_title">
                    <h3>Strategy</h3>
                    <p>
                      A less until infallible indistinct decided
                      <p> inventoried gosh hey some contemplated.</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service_content">
                <div className="separator-service">
                  <div className="icon-box icon-one">
                    <span>
                      <i className="fas fa-border-none"></i>
                    </span>
                  </div>
                  <div className="service_content_title">
                    <h3>Communication</h3>
                    <p>
                      A less until infallible indistinct decided
                      <p> inventoried gosh hey some contemplated.</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="consultants-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-box">
                <div className="slide-content">
                  <span>Our Services</span>
                  <h1>
                    Benefits, payroll, <p>and HR. All in a single place.</p>
                  </h1>
                  <ul>
                    <li>
                      <a href="#">
                        <span>
                          <i className="fas fa-arrow-right"></i>
                        </span>
                        <span>Payroll & Taxes</span>
                      </a>
                      <a href="#">
                        <span>
                          <i className="fas fa-arrow-right"></i>
                        </span>
                        <span>Human Resources Management</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <i className="fas fa-arrow-right"></i>
                        </span>
                        <span>Benefits</span>
                      </a>
                      <a href="#">
                        <span>
                          <i className="fas fa-arrow-right"></i>
                        </span>
                        <span>Talent Acquisition</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <i className="fas fa-arrow-right"></i>
                        </span>
                        <span>Risk Management</span>
                      </a>
                      <a href="#">
                        <span>
                          <i className="fas fa-arrow-right"></i>
                        </span>
                        <span>Professional Employer Organization (PEO)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <i className="fas fa-arrow-right"></i>
                        </span>
                        <span>Administrative Services Organization (ASO)</span>
                      </a>
                      <a href="#">
                        <span>
                          <i className="fas fa-arrow-right"></i>
                        </span>
                        <span>Connect HR Software</span>
                      </a>
                    </li>
                  </ul>
                  <a href="#" className="btn btn-theme-brand viev-btn">
                    GET A QUOTE NOW
                  </a>
                </div>
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
                  <span>GET YOUR TEAM WORKING RIGHT</span>
                  <h1>
                    Improve Your<p>Business</p>
                  </h1>
                  <p>
                    Phosfluorescently engage worldwide methodologies with
                    web-enabled technology. Interactively coordinate proactive
                    e-commerce via process-centric "outside the box" thinking.
                  </p>

                  <a href="#" className="btn btn-theme-brand viev-btn">
                    VIEW OUR PORTFOLIO
                  </a>
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
                <h1>
                  Avantage<p>Professionals</p>
                </h1>
              </div>
            </div>
          </div>
          <div className="row avantage-row">
            <div className="col-md-3">
              <div className="avantage-box">
                <div className="avantage-img">
                  <img src={teamone} alt="" />
                </div>
                <div className="avantage-content">
                  <span>CHIEF EXECUTIVE</span>
                  <h1>Hannah Alberts</h1>
                  <p>
                    Ignobly belched incoherently poetic enticing cowered where
                    grateful hatchet resold ferret.
                  </p>
                  <a href="#">
                    FIND OUT MORE <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="avantage-box">
                <div className="avantage-img">
                  <img src={people} alt="" />
                </div>
                <div className="avantage-content">
                  <span>HR MANAGER</span>
                  <h1>Melissa Leblanc</h1>
                  <p>
                    Ignobly belched incoherently poetic enticing cowered where
                    grateful hatchet resold ferret.
                  </p>
                  <a href="#">
                    FIND OUT MORE <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="avantage-box">
                <div className="avantage-img">
                  <img src={peopletwo} alt="" />
                </div>
                <div className="avantage-content">
                  <span>HR SENIOR EXECUTIVE</span>
                  <h1>Kendrick Hart</h1>
                  <p>
                    Ignobly belched incoherently poetic enticing cowered where
                    grateful hatchet resold ferret.
                  </p>
                  <a href="#">
                    FIND OUT MORE <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="avantage-box">
                <div className="avantage-img">
                  <img src={peoplethree} alt="" />
                </div>
                <div className="avantage-content">
                  <span>HR PROFESSIONAL</span>
                  <h1>Blair Dane</h1>
                  <p>
                    Ignobly belched incoherently poetic enticing cowered where
                    grateful hatchet resold ferret.
                  </p>
                  <a href="#">
                    FIND OUT MORE <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="isotop-box">
                <div className="menu-tab">
                  <button className="btn active">ALL</button>
                  <button className="btn">Financial</button>
                  <button className="btn">Human Resources</button>
                  <button className="btn">Solicitory</button>
                  <button className="btn">Start Ups</button>
                  <button className="btn">Strategy</button>
                </div>
                <div className="row gallery-row">
                  <div className="col-md-4">
                    <div className="gallery-img">
                      <div className="img-box">
                        <img src={gallery} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="gallery-img">
                      <div className="img-box">
                        <img src={galleryone} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="gallery-img">
                      <div className="img-box">
                        <img src={gallerytwo} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src={quote} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-box">
                <div className="slide-content">
                  <span>GREAT REVIEWS FOR OUR SERVICES</span>
                  <h1>
                    Trusted by Biggest<p>Business Names</p>
                  </h1>
                  <p>
                    Our clients have always trusted our expertise and advices.
                    Here’s what they have to say about us.
                  </p>
                  <div className="trustedadvisor">
                    <h5>
                      Scallop and sarcastic opossum crudely hey ape one one
                      hello lucrative far implacable sighed consoled apart
                      across hatchet.
                    </h5>
                    <p>
                      <span>Applauz Startup</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="text-box">
                <div className="slide-content">
                  <span>OUR OFFICES</span>
                  <h1>
                    Get in <p>Touch</p>
                  </h1>
                  <p>
                    Come and visit our quarters or simply send us an email
                    anytime you want. We are open to all suggestions from our
                    clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="trustedadvisor">
                <div className="row">
                  <div className="col-md-6">
                    <div className="icon-box">
                      <span>
                        <i className="fas fa-map-marker-alt"></i>
                      </span>

                      <p>Mumbai Office</p>
                      <h6>
                        Address:
                        <p>
                          A Tarng Gillbert Hill Road Andheri (w) Mumbai-400058
                        </p>
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="icon-box">
                      <span>
                        <i className="fas fa-street-view"></i>
                      </span>

                      <p>Singapore Office</p>
                      <h6>
                        Address:<p>25 NORTH BRIDGE, SINGAPORE - 179104;</p>
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="icon-box">
                      <span>
                        <i className="fas fa-envelope-open"></i>
                      </span>

                      <p>Email us</p>
                      <h6>mithilashetty@gmail.com</h6>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="icon-box">
                      <span>
                        <i className="fas fa-mobile-alt"></i>
                      </span>

                      <p>Call us</p>
                      <h6>020 7946 020 / 020 7996 223</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titile-box">
                <span>OUR LATEST NEWS</span>
                <h1>
                  Avantage <p>Blog Posts</p>
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="blog-box">
                <div className="blog-img">
                  <img src={gallery} alt="" />
                </div>
                <div className="blog-content">
                  <div className="content">
                    <span>Projects</span>
                    <h1>Consulting Project</h1>
                    <p>
                      Dynamically target high-payoff intellectual capital for
                      customized technologies.
                    </p>
                    <a href="#">Read more</a>
                  </div>
                </div>
                <div className="date-box">
                  <span>
                    4<p>jun</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-box">
                <div className="blog-img">
                  <img src={galleryone} alt="" />
                </div>
                <div className="blog-content">
                  <div className="content">
                    <span>Projects</span>
                    <h1>Consulting Project</h1>
                    <p>
                      Dynamically target high-payoff intellectual capital for
                      customized technologies.
                    </p>
                    <a href="#">Read more</a>
                  </div>
                </div>
                <div className="date-box">
                  <span>
                    5<p>jun</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-box">
                <div className="blog-img">
                  <img src={gallerytwo} alt="" />
                </div>
                <div className="blog-content">
                  <div className="content">
                    <span>Projects</span>
                    <h1>Consulting Project</h1>
                    <p>
                      Dynamically target high-payoff intellectual capital for
                      customized technologies.
                    </p>
                    <a href="#">Read more</a>
                  </div>
                </div>
                <div className="date-box">
                  <span>
                    3<p>jun</p>
                  </span>
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
      {/* https://avantage.bold-themes.com/hr/# */}
    </>
  );
};

export default Home;
