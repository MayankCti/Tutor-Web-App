import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useNavigate } from "react-router";
import { pageRoutes } from "../routes/pageRoutes";
import ImageComparijan from "../components/ImageComparijan";

const Home = () => {
  const navigate = useNavigate();
  const options = {
    loop: true,
    margin: 24,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 5,
      },
    },
  };
  const options2 = {
    loop: true,
    margin: 24,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };
  const options3 = {
    loop: true,
    margin: 125,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  return (
    <div>
      <section className="ct_hero_banner" style={{overflowY:"hidden"}}>
        <header className="ct_header">
          <div className="ct_logo" onClick={() => navigate(pageRoutes.home)}>
            <a href="javascript:void(0)">
              <img src="../assets/img/tutor-logo.png" alt="" />
            </a>
          </div>
          <nav>
            <ul>
              <li onClick={() => navigate(pageRoutes.login)}>
                <a
                  href="javascript:void(0)"
                  className="ct_purple_btn ct_ff_Outfit"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="ct_banner_section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 mb-4 mb-lg-0">
                <div className="ct_banner_left_cnt">
                  <h2 className="ct_fs_52 ct_fw_700 ct_ff_Outfit mb-3">
                  Stop Juggling,{" "}
                    <span className="ct_sky_blue_text"> Start  </span>Teaching
         
                  </h2>
                  <h3>
                    <a
                      href=""
                      className="typewrite ct_animated_text ct_ff_Outfit ct_fw_700 ct_fs_52 ct_res_fs_30 text-white"
                      data-period="2000"
                      data-type='[ "Let Hank Handle the Rest!"]'
                    >
                      <span className="wrap"></span>
                    </a>
                  </h3>
                  <p className="mt-4 ct_fw_500">
                  Your All-in-One Automation Tool for Tutoring Businesses. Focus on What You Love—Let Hank Take Care of the Rest!

                  </p>
                  <div className="d-flex align-items-center gap-3 mt-4 ct_btn_group">
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.studentlogin)}
                      className="ct_gredent_btn ct_fw_600 ct_fs_18"
                    >
                      Book a Demo{" "}
                      <i className="fa-solid fa-chevron-right"></i>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="ct_outline_btn ct_gredent_btn ct_fw_500 ct_fs_18 w-auto px-4 py-3 h-auto"
                      style={{
                        border: "1px solid #DDDDDD",
                        borderRadius: "5px",
                      }}
                    >
                      Start Your 21-Day  {" "}
                      <span className="ct_sky_blue_text">Free Trial</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mb-4 mb-lg-0">
                <div className="ct_banner_right_img">
                  <img src="assets/img/banner_right_girl2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ct_py_136">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="ct_about_section_left">
                <img
                  src="assets/img/curve_line_orange.svg"
                  className="ct_img_56 mb-4"
                  alt=""
                />
                <h4 className="ct_fs_22 ct_ff_Outfit ct_fw_400 mb-0">
                Problem Statement
                </h4>
                <h3 className="ct_ff_Outfit ct_fs_36 ct_fw_600">
                Running a Tutoring Business isn’t Just Tutoring

                </h3>
                <p className="mb-0 mt-4">
                You're also handling endless admin tasks like managing inquiries, onboarding new students, invoicing, scheduling, collecting payments and keeping parents and staff in the loop. It can be exhausting and keeps you from doing what you actually love: tutoring and helping your students.
                </p>
                <h6 className="mt-4 ct_fw_600 ct_line_h_25">Imagine if you could free up hours each week, reduce errors and enhance your business efficiency effortlessly.</h6>
                <div className="mt-4">
                  <a
                    href="javascript:void(0)"
                    className="ct_purple_btn ct_ff_Outfit ct_fw_600 ct_py_12"
                  >
                    Explore more about us{" "}
                    <i className="fa-solid fa-chevron-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-7  mb-4 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="ct_about_right">
                <img src="assets/img/about.png" alt="" className="ct_img_450" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ct_py_136 pt-0">
        <div className="container">
          <div className="row align-items-center">
          <div
              className="col-lg-5  mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="ct_about_right">
                <img src="assets/img/about_212.jpg" alt="" className="ct_img_450 ct_border_10" />
              </div>
            </div>
            <div
              className="col-lg-6 offset-lg-1 mb-4 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="ct_about_section_left">
                <img
                  src="assets/img/curve_line_orange.svg"
                  className="ct_img_56 mb-4"
                  alt=""
                />
                <h4 className="ct_fs_22 ct_ff_Outfit ct_fw_400 mb-0">
                Introducing Hank Systems
                </h4>
                <h3 className="ct_ff_Outfit ct_fs_36 ct_fw_600">
                Say Hello to Hank – Your 8-Tentacled Multitasker!


                </h3>
                <p className="mb-0 mt-4">
                That’s where Hank comes in. Hank's 8 tentacles (like the multitasker you wish you had!) will take care of all the admin so you can focus on growing your business and helping students thrive.

                </p>
                <p className="mb-0 mt-4">
                Hank Systems is the ultimate automation tool designed exclusively for independent tutors and larger tutoring businesses in Australia and beyond. With Hank by your side, managing your tutoring operations becomes a breeze, allowing you to focus on what truly matters—teaching and growing your business.
                </p>
              </div>
            </div>
          
          </div>
        </div>
      </section>

      <section className="ct_py_106 ct_our_success_bg">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 mb-5"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div className="text-center">
              <h4 class="ct_fs_22 ct_ff_Outfit ct_fw_400 mb-0">   Key Features</h4>
              <h3 class="ct_ff_Outfit ct_fs_36 ct_fw_600">Why Hank Stands Out:
              </h3>
              
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="ct_success_box">
                <div className="ct_success_icon">
                  <img src="assets/img/Seamless_icon.png" alt="" />
                </div>
                <div className="ct_success_cnt mt-3">
                  <h3
                    className="ct_fs_22 ct_fw_700 mb-3 "
                   
                  >
                  Seamless Automation
                  </h3>
                  <p className="mb-3"><span className="ct_fw_600 ">Effortless Inquiries Handling:</span> Automatically capture and respond to student inquiries, ensuring no lead is ever missed.
                  </p>
                  <p className="mb-0"><span className="ct_fw_600 ">Streamlined Onboarding:</span> Simplify the process of enrolling new students with automated workflows, saving you so much time!
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 mb-4 "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="ct_success_box">
                <div className="ct_success_icon">
                  <img src="assets/img/Scheduling_icon.png" alt="" />
                </div>
                <div className="ct_success_cnt mt-3">
                  <h3
                    className="ct_fs_22 ct_fw_700 mb-3"
                  
                  >
                  Simplified Scheduling
                  </h3>
                  <p className="mb-3"><span className="ct_fw_600">Smart Calendar Integration:</span> Easily manage tutoring schedules, avoiding conflicts and optimising your time.
                  </p>
                  <p className="mb-0"><span className="ct_fw_600">Automated Reminders:</span>Reduce no-shows with automated session reminders sent directly to families.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 mb-4 "
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="ct_success_box">
                <div className="ct_success_icon">
                  <img src="assets/img/invoice_icon_1.png" alt="" />
                </div>
                <div className="ct_success_cnt mt-3">
                  <h3 className="ct_fs_22 ct_fw_700 mb-3">
                  Comprehensive Invoicing & Payments

                  </h3>
                  <p className="mb-3"><span className="ct_fw_600">Automated Invoicing:</span> Generate and send invoices without lifting a finger.

                  </p>
                  <p className="mb-0"><span className="ct_fw_600">Secure Payment Collection:</span>Ensure timely payments with integrated payment gateways.

                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              <div className="ct_success_box">
                <div className="ct_success_icon">
                  <img src="assets/img/success_icon_4.png" alt="" />
                </div>
                <div className="ct_success_cnt mt-3">
                  <h3 className="ct_fs_22 ct_fw_700 mb-3">
                  Centralised Communication
                  </h3>
                  <p className="mb-3"><span className="ct_fw_600">Family Messaging Hub:</span> Communicate effortlessly with parents and students through a unified platform.
                  </p>
                  <p className="mb-0"><span className="ct_fw_600">Automated Notifications: </span>Keep families informed with updates and announcements.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              <div className="ct_success_box">
                <div className="ct_success_icon">
                  <img src="assets/img/Renewal_ixon.png" alt="" />
                </div>
                <div className="ct_success_cnt mt-3">
                  <h3 className="ct_fs_22 ct_fw_700 mb-3">
                  Efficient Re-Enrolment

                  </h3>
                  <p className="mb-0"><span className="ct_fw_600">Automated Renewal Processes: </span> Simplify the re-enrolment of existing students each term, boosting retention rates.

                  </p>
                
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              <div className="ct_success_box">
                <div className="ct_success_icon">
                  <img src="assets/img/Integrations_ixon.png" alt="" />
                  
                </div>
                <div className="ct_success_cnt mt-3">
                  <h3 className="ct_fs_22 ct_fw_700 mb-3">
                  Seamless Integrations

                  </h3>
                  <p className="mb-0"><span className="ct_fw_600">Xero Integration:</span>Sync effortlessly with your accounting software for streamlined financial management. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ct_py_136">
        <div className="container">
          <div className="row align-items-center">
          <div
              className="col-lg-5  mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <ImageComparijan />
              {/* <div className="ct_about_right">
                <img src="assets/img/about_212.jpg" alt="" className="ct_img_450" />
              </div> */}
            </div>
            <div
              className="col-lg-6 offset-lg-1 mb-4 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="ct_about_section_left">
                <img
                  src="assets/img/curve_line_orange.svg"
                  className="ct_img_56 mb-4"
                  alt=""
                />
                <h4 className="ct_fs_22 ct_ff_Outfit ct_fw_400 mb-0">
               Benefits

                </h4>
                <h3 className="ct_ff_Outfit ct_fs_36 ct_fw_600 mb-4">
                Transform Your Tutoring Business with Hank:
                </h3>
                <div className="mt-3">
                      <h5 className="ct_fw_600 mb-2">Save Time & Reduce Stress</h5>
                      <ul className="ct_list_style_dot ps-3">
                        <li>Automate tedious admin tasks and reclaim your valuable time to invest back into tutoring.</li>
                      </ul>
                </div>
                <div className="mt-3">
                      <h5 className="ct_fw_600 mb-2">Increase Conversion Rates
                      </h5>
                      <ul className="ct_list_style_dot ps-3">
                        <li>Smooth and automated onboarding processes ensure higher student acquisition and retention.
                        </li>
                      </ul>
                </div>
                <div className="mt-3">
                      <h5 className="ct_fw_600 mb-2">Enhance Organisation
                      </h5>
                      <ul className="ct_list_style_dot ps-3">
                        <li>Keep all your business operations centralised, reducing errors and improving efficiency.
                        </li>
                      </ul>
                </div>
                <div className="mt-3">
                      <h5 className="ct_fw_600 mb-2">Boost Revenue

                      </h5>
                      <ul className="ct_list_style_dot ps-3">
                        <li>By minimising missed payments and optimising scheduling, watch your revenue grow effortlessly.

                        </li>
                      </ul>
                </div>
                <div className="mt-3">
                      <h5 className="ct_fw_600 mb-2">Focus on What You Love


                      </h5>
                      <ul className="ct_list_style_dot ps-3">
                        <li>Let Hank handle the logistics while you concentrate on inspiring, supporting and educating your students.


                        </li>
                      </ul>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>


      <section className="ct_py_106 ct_our_success_bg">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 mb-5"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div className="text-center">
              <h4 class="ct_fs_22 ct_ff_Outfit ct_fw_400 mb-0"> How It Works</h4>
              <h3 class="ct_ff_Outfit ct_fs_36 ct_fw_600">Hank’s 3-Step Automation Process:
              </h3>
              
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0" data-aos="fade-down"
              data-aos-duration="1000">
                <div className="ct_round_work_card">
                  <div className="ct_step_num_12">
                      <h4 className="mb-0">
                        01
                      </h4>
                  </div>
                  <div className="ct_round_work_cnt">
                    <h4>Capture & Convert</h4>
                    <p className="mb-0">Automatically handle incoming inquiries and convert them into enrolled students with minimal effort.
                    </p>
                  </div>
                </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0 "   data-aos="fade-down"
              data-aos-duration="1000">
                <div className="ct_round_work_card">
                  <div className="ct_step_num_12">
                      <h4 className="mb-0">
                        02
                      </h4>
                  </div>
                  <div className="ct_round_work_cnt">
                    <h4>Manage & Communicate
                    </h4>
                    <p className="mb-0">Organise schedules, send invoices, collect payments and communicate with families—all from one platform.

                    </p>
                  </div>
                </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0"   data-aos="fade-down"
              data-aos-duration="1000">
                <div className="ct_round_work_card">
                  <div className="ct_step_num_12">
                      <h4 className="mb-0">
                        03
                      </h4>
                  </div>
                  <div className="ct_round_work_cnt">
                    <h4>Retain & Grow
                    </h4>
                    <p className="mb-0">Simplify re-enrolment processes and maintain strong relationships with families to ensure continued growth.
                    </p>
                  </div>
                </div>
            </div>
          </div>
       
        </div>
      </section>


      {/* <section className="ct_py_80">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div className="text-center">
                <img
                  src="assets/img/curve_line_orange.svg"
                  className="ct_img_56 mb-4"
                  alt=""
                />
                <h4 className="ct_fs_22 ct_ff_Outfit ct_fw_400 mb-0">
                  Better Learning. Better Results
                </h4>
                <h3 className="ct_ff_Outfit ct_fs_36 ct_fw_600 mb-3">
                  Online education platform for all
                </h3>
                <p>
                  Accusamus et iusidio dignissimos ducimus blanditiis
                  praesentium voluptatum deleniti atque corrupti quos <br />
                  dolores etmquasa molestias epturi sint occaecati cupiditate
                  non providente mikume.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div
              className="col-md-12"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <OwlCarousel
                className="owl-carousel owl-theme ct_tutor_slider mb-4"
                {...options2}
              >
                <div className="item">
                  <figure className="ct_tutor_card">
                    <div className="ct_tutor_img">
                      <img
                        src="assets/img/tutor_1.jpg"
                        alt=""
                        className="ct_img_h_250"
                      />
                      <span className="ct_tutor_badge">FEATURED</span>
                    </div>
                    <figcaption>
                      <div className="d-flex align-items-center gap-3 ct_px_20">
                        <img
                          src="assets/img/tutor_small_1.png"
                          alt=""
                          className="ct_img_44"
                        />
                        <div>
                          <div className="d-flex align-items-center gap-2">
                            <h5 className="ct_fs_18 ct_fw_600 mb-0">
                              Traci Emard
                            </h5>
                            <i className="bi bi-check2-circle ct_green_text"></i>
                          </div>
                          <p className="mb-0 ct_fs_14">Charlotte, OK</p>
                        </div>
                      </div>

                      <ul className="mt-4 ct_tutor_info_list ct_px_20">
                        <li>
                          <span>Starting from:</span>
                          <span className="ct_fw_600">$69.00/hr</span>
                        </li>
                        <li>
                          <span>Mobile:</span>
                          <span className="ct_fw_600">080027</span>
                        </li>
                        <li>
                          <span>Whatsapp:</span>
                          <span className="ct_fw_600">132414</span>
                        </li>
                        <li>
                          <span>Qualification:</span>
                          <span className="ct_fw_600">Physicist</span>
                        </li>
                      </ul>

                      <div className="ct_rating_area_cnt ct_px_20 pe-0">
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="mb-0">5.0</h6>
                          <i className="fa-solid fa-star ct_yellow_text"></i>
                          <span>(06)</span>
                        </div>
                        <div className="ct_like_icon">
                          <i className="fa-regular fa-heart ct_grey_text"></i>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="item">
                  <figure className="ct_tutor_card">
                    <div className="ct_tutor_img">
                      <img
                        src="assets/img/tutor_2.jpg"
                        alt=""
                        className="ct_img_h_250"
                      />
                      <span className="ct_tutor_badge">FEATURED</span>
                    </div>
                    <figcaption>
                      <div className="d-flex align-items-center gap-3 ct_px_20">
                        <img
                          src="assets/img/tutor_small_2.png"
                          alt=""
                          className="ct_img_44"
                        />
                        <div>
                          <div className="d-flex align-items-center gap-2">
                            <h5 className="ct_fs_18 ct_fw_600 mb-0">
                              Dorothy Herzog
                            </h5>
                            <i className="bi bi-check2-circle ct_green_text"></i>
                          </div>
                          <p className="mb-0 ct_fs_14">San Francisco, ID</p>
                        </div>
                      </div>

                      <ul className="mt-4 ct_tutor_info_list ct_px_20">
                        <li>
                          <span>Starting from:</span>
                          <span className="ct_fw_600">$21.00/hr</span>
                        </li>
                        <li>
                          <span>Mobile:</span>
                          <span className="ct_fw_600">080027</span>
                        </li>
                        <li>
                          <span>Whatsapp:</span>
                          <span className="ct_fw_600">132414</span>
                        </li>
                        <li>
                          <span>Qualification:</span>
                          <span className="ct_fw_600">MBBS</span>
                        </li>
                      </ul>

                      <div className="ct_rating_area_cnt ct_px_20 pe-0">
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="mb-0">5.0</h6>
                          <i className="fa-solid fa-star ct_yellow_text"></i>
                          <span>(06)</span>
                        </div>
                        <div className="ct_like_icon">
                          <i className="fa-regular fa-heart ct_grey_text"></i>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="item">
                  <figure className="ct_tutor_card">
                    <div className="ct_tutor_img">
                      <img
                        src="assets/img/tutor_3.jpg"
                        alt=""
                        className="ct_img_h_250"
                      />
                      <span className="ct_tutor_badge">FEATURED</span>
                    </div>
                    <figcaption>
                      <div className="d-flex align-items-center gap-3 ct_px_20">
                        <img
                          src="assets/img/tutor_small_3.png"
                          alt=""
                          className="ct_img_44"
                        />
                        <div>
                          <div className="d-flex align-items-center gap-2">
                            <h5 className="ct_fs_18 ct_fw_600 mb-0">
                              Wilma McKenzie
                            </h5>
                            <i className="bi bi-check2-circle ct_green_text"></i>
                          </div>
                          <p className="mb-0 ct_fs_14">Indianapolis, CA</p>
                        </div>
                      </div>

                      <ul className="mt-4 ct_tutor_info_list ct_px_20">
                        <li>
                          <span>Starting from:</span>
                          <span className="ct_fw_600">$69.00/hr</span>
                        </li>
                        <li>
                          <span>Mobile:</span>
                          <span className="ct_fw_600">080027</span>
                        </li>
                        <li>
                          <span>Whatsapp:</span>
                          <span className="ct_fw_600">132414</span>
                        </li>
                        <li>
                          <span>Qualification:</span>
                          <span className="ct_fw_600">MBBS</span>
                        </li>
                      </ul>

                      <div className="ct_rating_area_cnt ct_px_20 pe-0">
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="mb-0">5.0</h6>
                          <i className="fa-solid fa-star ct_yellow_text"></i>
                          <span>(06)</span>
                        </div>
                        <div className="ct_like_icon">
                          <i className="fa-regular fa-heart ct_grey_text"></i>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="item">
                  <figure className="ct_tutor_card">
                    <div className="ct_tutor_img">
                      <img
                        src="assets/img/tutor_4.jpg"
                        alt=""
                        className="ct_img_h_250"
                      />
                      <span className="ct_tutor_badge">FEATURED</span>
                    </div>
                    <figcaption>
                      <div className="d-flex align-items-center gap-3 ct_px_20">
                        <img
                          src="assets/img/tutor_small_4.png"
                          alt=""
                          className="ct_img_44"
                        />
                        <div>
                          <div className="d-flex align-items-center gap-2">
                            <h5 className="ct_fs_18 ct_fw_600 mb-0">
                              Dr. Leigh Goyette
                            </h5>
                            <i className="bi bi-check2-circle ct_green_text"></i>
                          </div>
                          <p className="mb-0 ct_fs_14">Tampa, LA</p>
                        </div>
                      </div>

                      <ul className="mt-4 ct_tutor_info_list ct_px_20">
                        <li>
                          <span>Starting from:</span>
                          <span className="ct_fw_600">$69.00/hr</span>
                        </li>
                        <li>
                          <span>Mobile:</span>
                          <span className="ct_fw_600">080027</span>
                        </li>
                        <li>
                          <span>Whatsapp:</span>
                          <span className="ct_fw_600">132414</span>
                        </li>
                        <li>
                          <span>Qualification:</span>
                          <span className="ct_fw_600">MBBS</span>
                        </li>
                      </ul>

                      <div className="ct_rating_area_cnt ct_px_20 pe-0">
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="mb-0">5.0</h6>
                          <i className="fa-solid fa-star ct_yellow_text"></i>
                          <span>(06)</span>
                        </div>
                        <div className="ct_like_icon">
                          <i className="fa-regular fa-heart ct_grey_text"></i>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="item">
                  <figure className="ct_tutor_card">
                    <div className="ct_tutor_img">
                      <img
                        src="assets/img/tutor_1.jpg"
                        alt=""
                        className="ct_img_h_250"
                      />
                      <span className="ct_tutor_badge">FEATURED</span>
                    </div>
                    <figcaption>
                      <div className="d-flex align-items-center gap-3 ct_px_20">
                        <img
                          src="assets/img/tutor_small_1.png"
                          alt=""
                          className="ct_img_44"
                        />
                        <div>
                          <div className="d-flex align-items-center gap-2">
                            <h5 className="ct_fs_18 ct_fw_600 mb-0">
                              Traci Emard
                            </h5>
                            <i className="bi bi-check2-circle ct_green_text"></i>
                          </div>
                          <p className="mb-0 ct_fs_14">Charlotte, OK</p>
                        </div>
                      </div>

                      <ul className="mt-4 ct_tutor_info_list ct_px_20">
                        <li>
                          <span>Starting from:</span>
                          <span className="ct_fw_600">$69.00/hr</span>
                        </li>
                        <li>
                          <span>Mobile:</span>
                          <span className="ct_fw_600">080027</span>
                        </li>
                        <li>
                          <span>Whatsapp:</span>
                          <span className="ct_fw_600">132414</span>
                        </li>
                        <li>
                          <span>Qualification:</span>
                          <span className="ct_fw_600">Physicist</span>
                        </li>
                      </ul>

                      <div className="ct_rating_area_cnt ct_px_20 pe-0">
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="mb-0">5.0</h6>
                          <i className="fa-solid fa-star ct_yellow_text"></i>
                          <span>(06)</span>
                        </div>
                        <div className="ct_like_icon">
                          <i className="fa-regular fa-heart ct_grey_text"></i>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="item">
                  <figure className="ct_tutor_card">
                    <div className="ct_tutor_img">
                      <img
                        src="assets/img/tutor_2.jpg"
                        alt=""
                        className="ct_img_h_250"
                      />
                      <span className="ct_tutor_badge">FEATURED</span>
                    </div>
                    <figcaption>
                      <div className="d-flex align-items-center gap-3 ct_px_20">
                        <img
                          src="assets/img/tutor_small_2.png"
                          alt=""
                          className="ct_img_44"
                        />
                        <div>
                          <div className="d-flex align-items-center gap-2">
                            <h5 className="ct_fs_18 ct_fw_600 mb-0">
                              Dorothy Herzog
                            </h5>
                            <i className="bi bi-check2-circle ct_green_text"></i>
                          </div>
                          <p className="mb-0 ct_fs_14">San Francisco, ID</p>
                        </div>
                      </div>

                      <ul className="mt-4 ct_tutor_info_list ct_px_20">
                        <li>
                          <span>Starting from:</span>
                          <span className="ct_fw_600">$21.00/hr</span>
                        </li>
                        <li>
                          <span>Mobile:</span>
                          <span className="ct_fw_600">080027</span>
                        </li>
                        <li>
                          <span>Whatsapp:</span>
                          <span className="ct_fw_600">132414</span>
                        </li>
                        <li>
                          <span>Qualification:</span>
                          <span className="ct_fw_600">MBBS</span>
                        </li>
                      </ul>

                      <div className="ct_rating_area_cnt ct_px_20 pe-0">
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="mb-0">5.0</h6>
                          <i className="fa-solid fa-star ct_yellow_text"></i>
                          <span>(06)</span>
                        </div>
                        <div className="ct_like_icon">
                          <i className="fa-regular fa-heart ct_grey_text"></i>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="item">
                  <figure className="ct_tutor_card">
                    <div className="ct_tutor_img">
                      <img
                        src="assets/img/tutor_3.jpg"
                        alt=""
                        className="ct_img_h_250"
                      />
                      <span className="ct_tutor_badge">FEATURED</span>
                    </div>
                    <figcaption>
                      <div className="d-flex align-items-center gap-3 ct_px_20">
                        <img
                          src="assets/img/tutor_small_3.png"
                          alt=""
                          className="ct_img_44"
                        />
                        <div>
                          <div className="d-flex align-items-center gap-2">
                            <h5 className="ct_fs_18 ct_fw_600 mb-0">
                              Wilma McKenzie
                            </h5>
                            <i className="bi bi-check2-circle ct_green_text"></i>
                          </div>
                          <p className="mb-0 ct_fs_14">Indianapolis, CA</p>
                        </div>
                      </div>

                      <ul className="mt-4 ct_tutor_info_list ct_px_20">
                        <li>
                          <span>Starting from:</span>
                          <span className="ct_fw_600">$69.00/hr</span>
                        </li>
                        <li>
                          <span>Mobile:</span>
                          <span className="ct_fw_600">080027</span>
                        </li>
                        <li>
                          <span>Whatsapp:</span>
                          <span className="ct_fw_600">132414</span>
                        </li>
                        <li>
                          <span>Qualification:</span>
                          <span className="ct_fw_600">MBBS</span>
                        </li>
                      </ul>

                      <div className="ct_rating_area_cnt ct_px_20 pe-0">
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="mb-0">5.0</h6>
                          <i className="fa-solid fa-star ct_yellow_text"></i>
                          <span>(06)</span>
                        </div>
                        <div className="ct_like_icon">
                          <i className="fa-regular fa-heart ct_grey_text"></i>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="item">
                  <figure className="ct_tutor_card">
                    <div className="ct_tutor_img">
                      <img
                        src="assets/img/tutor_4.jpg"
                        alt=""
                        className="ct_img_h_250"
                      />
                      <span className="ct_tutor_badge">FEATURED</span>
                    </div>
                    <figcaption>
                      <div className="d-flex align-items-center gap-3 ct_px_20">
                        <img
                          src="assets/img/tutor_small_4.png"
                          alt=""
                          className="ct_img_44"
                        />
                        <div>
                          <div className="d-flex align-items-center gap-2">
                            <h5 className="ct_fs_18 ct_fw_600 mb-0">
                              Dr. Leigh Goyette
                            </h5>
                            <i className="bi bi-check2-circle ct_green_text"></i>
                          </div>
                          <p className="mb-0 ct_fs_14">Tampa, LA</p>
                        </div>
                      </div>

                      <ul className="mt-4 ct_tutor_info_list ct_px_20">
                        <li>
                          <span>Starting from:</span>
                          <span className="ct_fw_600">$69.00/hr</span>
                        </li>
                        <li>
                          <span>Mobile:</span>
                          <span className="ct_fw_600">080027</span>
                        </li>
                        <li>
                          <span>Whatsapp:</span>
                          <span className="ct_fw_600">132414</span>
                        </li>
                        <li>
                          <span>Qualification:</span>
                          <span className="ct_fw_600">MBBS</span>
                        </li>
                      </ul>

                      <div className="ct_rating_area_cnt ct_px_20 pe-0">
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="mb-0">5.0</h6>
                          <i className="fa-solid fa-star ct_yellow_text"></i>
                          <span>(06)</span>
                        </div>
                        <div className="ct_like_icon">
                          <i className="fa-regular fa-heart ct_grey_text"></i>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="item">
                  <figure className="ct_tutor_card">
                    <div className="ct_tutor_img">
                      <img
                        src="assets/img/tutor_1.jpg"
                        alt=""
                        className="ct_img_h_250"
                      />
                      <span className="ct_tutor_badge">FEATURED</span>
                    </div>
                    <figcaption>
                      <div className="d-flex align-items-center gap-3 ct_px_20">
                        <img
                          src="assets/img/tutor_small_1.png"
                          alt=""
                          className="ct_img_44"
                        />
                        <div>
                          <div className="d-flex align-items-center gap-2">
                            <h5 className="ct_fs_18 ct_fw_600 mb-0">
                              Traci Emard
                            </h5>
                            <i className="bi bi-check2-circle ct_green_text"></i>
                          </div>
                          <p className="mb-0 ct_fs_14">Charlotte, OK</p>
                        </div>
                      </div>

                      <ul className="mt-4 ct_tutor_info_list ct_px_20">
                        <li>
                          <span>Starting from:</span>
                          <span className="ct_fw_600">$69.00/hr</span>
                        </li>
                        <li>
                          <span>Mobile:</span>
                          <span className="ct_fw_600">080027</span>
                        </li>
                        <li>
                          <span>Whatsapp:</span>
                          <span className="ct_fw_600">132414</span>
                        </li>
                        <li>
                          <span>Qualification:</span>
                          <span className="ct_fw_600">Physicist</span>
                        </li>
                      </ul>

                      <div className="ct_rating_area_cnt ct_px_20 pe-0">
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="mb-0">5.0</h6>
                          <i className="fa-solid fa-star ct_yellow_text"></i>
                          <span>(06)</span>
                        </div>
                        <div className="ct_like_icon">
                          <i className="fa-regular fa-heart ct_grey_text"></i>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="item">
                  <figure className="ct_tutor_card">
                    <div className="ct_tutor_img">
                      <img
                        src="assets/img/tutor_2.jpg"
                        alt=""
                        className="ct_img_h_250"
                      />
                      <span className="ct_tutor_badge">FEATURED</span>
                    </div>
                    <figcaption>
                      <div className="d-flex align-items-center gap-3 ct_px_20">
                        <img
                          src="assets/img/tutor_small_2.png"
                          alt=""
                          className="ct_img_44"
                        />
                        <div>
                          <div className="d-flex align-items-center gap-2">
                            <h5 className="ct_fs_18 ct_fw_600 mb-0">
                              Dorothy Herzog
                            </h5>
                            <i className="bi bi-check2-circle ct_green_text"></i>
                          </div>
                          <p className="mb-0 ct_fs_14">San Francisco, ID</p>
                        </div>
                      </div>

                      <ul className="mt-4 ct_tutor_info_list ct_px_20">
                        <li>
                          <span>Starting from:</span>
                          <span className="ct_fw_600">$21.00/hr</span>
                        </li>
                        <li>
                          <span>Mobile:</span>
                          <span className="ct_fw_600">080027</span>
                        </li>
                        <li>
                          <span>Whatsapp:</span>
                          <span className="ct_fw_600">132414</span>
                        </li>
                        <li>
                          <span>Qualification:</span>
                          <span className="ct_fw_600">MBBS</span>
                        </li>
                      </ul>

                      <div className="ct_rating_area_cnt ct_px_20 pe-0">
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="mb-0">5.0</h6>
                          <i className="fa-solid fa-star ct_yellow_text"></i>
                          <span>(06)</span>
                        </div>
                        <div className="ct_like_icon">
                          <i className="fa-regular fa-heart ct_grey_text"></i>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="item">
                  <figure className="ct_tutor_card">
                    <div className="ct_tutor_img">
                      <img
                        src="assets/img/tutor_3.jpg"
                        alt=""
                        className="ct_img_h_250"
                      />
                      <span className="ct_tutor_badge">FEATURED</span>
                    </div>
                    <figcaption>
                      <div className="d-flex align-items-center gap-3 ct_px_20">
                        <img
                          src="assets/img/tutor_small_3.png"
                          alt=""
                          className="ct_img_44"
                        />
                        <div>
                          <div className="d-flex align-items-center gap-2">
                            <h5 className="ct_fs_18 ct_fw_600 mb-0">
                              Wilma McKenzie
                            </h5>
                            <i className="bi bi-check2-circle ct_green_text"></i>
                          </div>
                          <p className="mb-0 ct_fs_14">Indianapolis, CA</p>
                        </div>
                      </div>

                      <ul className="mt-4 ct_tutor_info_list ct_px_20">
                        <li>
                          <span>Starting from:</span>
                          <span className="ct_fw_600">$69.00/hr</span>
                        </li>
                        <li>
                          <span>Mobile:</span>
                          <span className="ct_fw_600">080027</span>
                        </li>
                        <li>
                          <span>Whatsapp:</span>
                          <span className="ct_fw_600">132414</span>
                        </li>
                        <li>
                          <span>Qualification:</span>
                          <span className="ct_fw_600">MBBS</span>
                        </li>
                      </ul>

                      <div className="ct_rating_area_cnt ct_px_20 pe-0">
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="mb-0">5.0</h6>
                          <i className="fa-solid fa-star ct_yellow_text"></i>
                          <span>(06)</span>
                        </div>
                        <div className="ct_like_icon">
                          <i className="fa-regular fa-heart ct_grey_text"></i>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="item">
                  <figure className="ct_tutor_card">
                    <div className="ct_tutor_img">
                      <img
                        src="assets/img/tutor_4.jpg"
                        alt=""
                        className="ct_img_h_250"
                      />
                      <span className="ct_tutor_badge">FEATURED</span>
                    </div>
                    <figcaption>
                      <div className="d-flex align-items-center gap-3 ct_px_20">
                        <img
                          src="assets/img/tutor_small_4.png"
                          alt=""
                          className="ct_img_44"
                        />
                        <div>
                          <div className="d-flex align-items-center gap-2">
                            <h5 className="ct_fs_18 ct_fw_600 mb-0">
                              Dr. Leigh Goyette
                            </h5>
                            <i className="bi bi-check2-circle ct_green_text"></i>
                          </div>
                          <p className="mb-0 ct_fs_14">Tampa, LA</p>
                        </div>
                      </div>

                      <ul className="mt-4 ct_tutor_info_list ct_px_20">
                        <li>
                          <span>Starting from:</span>
                          <span className="ct_fw_600">$69.00/hr</span>
                        </li>
                        <li>
                          <span>Mobile:</span>
                          <span className="ct_fw_600">080027</span>
                        </li>
                        <li>
                          <span>Whatsapp:</span>
                          <span className="ct_fw_600">132414</span>
                        </li>
                        <li>
                          <span>Qualification:</span>
                          <span className="ct_fw_600">MBBS</span>
                        </li>
                      </ul>

                      <div className="ct_rating_area_cnt ct_px_20 pe-0">
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="mb-0">5.0</h6>
                          <i className="fa-solid fa-star ct_yellow_text"></i>
                          <span>(06)</span>
                        </div>
                        <div className="ct_like_icon">
                          <i className="fa-regular fa-heart ct_grey_text"></i>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </OwlCarousel>
              <div className="text-center mt-5">
                <a
                  href="javascript:void(0)"
                  className="ct_purple_btn ct_ff_Outfit ct_fw_600 ct_py_12 "
                >
                  Explore all tutors{" "}
                  <i className="fa-solid fa-chevron-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="ct_py_80 pt-0">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div className="text-center">
                <img
                  src="assets/img/curve_line_orange.svg"
                  className="ct_img_56 mb-4"
                  alt=""
                />
                <h4 className="ct_fs_22 ct_ff_Outfit ct_fw_400 mb-0">
                  Let’s make a quick start today
                </h4>
                <h3 className="ct_ff_Outfit ct_fs_36 ct_fw_600 mb-3">
                  Our top visited categories
                </h3>
                <p>
                  Accusamus et iusidio dignissimos ducimus blanditiis
                  praesentium voluptatum deleniti atque corrupti quos <br />
                  dolores etmquasa molestias epturi sint occaecati cupiditate
                  non providente mikume.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 mt-4"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
          
              <OwlCarousel
                className="owl-carousel owl-theme ct_category_slider mb-4"
                {...options}
              >
                <div className="item">
                  <div className="ct_categories_card">
                    <figure>
                      <div className="ct_category_img">
                        <img
                          src="assets/img/category_img_1.jpg"
                          alt=""
                          className="ct_img_h_450"
                        />
                      </div>
                      <figcaption>
                        <h5 className="text-white ct_fs_18 ct_ff_Outfit ct_fw_600">
                          Baisc & primary
                        </h5>
                        <p className="mb-0 text-white">46 Listings</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_categories_card">
                    <figure>
                      <div className="ct_category_img">
                        <img
                          src="assets/img/category_img_2.jpg"
                          alt=""
                          className="ct_img_h_450"
                        />
                      </div>
                      <figcaption>
                        <h5 className="text-white ct_fs_18 ct_ff_Outfit ct_fw_600">
                          O & A-Levels
                        </h5>
                        <p className="mb-0 text-white">46 Listings</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_categories_card">
                    <figure>
                      <div className="ct_category_img">
                        <img
                          src="assets/img/category_img_3.jpg"
                          alt=""
                          className="ct_img_h_450"
                        />
                      </div>
                      <figcaption>
                        <h5 className="text-white ct_fs_18 ct_ff_Outfit ct_fw_600">
                          Graduation
                        </h5>
                        <p className="mb-0 text-white">46 Listings</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_categories_card">
                    <figure>
                      <div className="ct_category_img">
                        <img
                          src="assets/img/category_img_4.jpg"
                          alt=""
                          className="ct_img_h_450"
                        />
                      </div>
                      <figcaption>
                        <h5 className="text-white ct_fs_18 ct_ff_Outfit ct_fw_600">
                          Arts & music
                        </h5>
                        <p className="mb-0 text-white">46 Listings</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_categories_card">
                    <figure>
                      <div className="ct_category_img">
                        <img
                          src="assets/img/category_img_5.jpg"
                          alt=""
                          className="ct_img_h_450"
                        />
                      </div>
                      <figcaption>
                        <h5 className="text-white ct_fs_18 ct_ff_Outfit ct_fw_600">
                          Health & sports
                        </h5>
                        <p className="mb-0 text-white">46 Listings</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_categories_card">
                    <figure>
                      <div className="ct_category_img">
                        <img
                          src="assets/img/category_img_1.jpg"
                          alt=""
                          className="ct_img_h_450"
                        />
                      </div>
                      <figcaption>
                        <h5 className="text-white ct_fs_18 ct_ff_Outfit ct_fw_600">
                          Baisc & primary
                        </h5>
                        <p className="mb-0 text-white">46 Listings</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_categories_card">
                    <figure>
                      <div className="ct_category_img">
                        <img
                          src="assets/img/category_img_2.jpg"
                          alt=""
                          className="ct_img_h_450"
                        />
                      </div>
                      <figcaption>
                        <h5 className="text-white ct_fs_18 ct_ff_Outfit ct_fw_600">
                          O & A-Levels
                        </h5>
                        <p className="mb-0 text-white">46 Listings</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_categories_card">
                    <figure>
                      <div className="ct_category_img">
                        <img
                          src="assets/img/category_img_3.jpg"
                          alt=""
                          className="ct_img_h_450"
                        />
                      </div>
                      <figcaption>
                        <h5 className="text-white ct_fs_18 ct_ff_Outfit ct_fw_600">
                          Graduation
                        </h5>
                        <p className="mb-0 text-white">46 Listings</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_categories_card">
                    <figure>
                      <div className="ct_category_img">
                        <img
                          src="assets/img/category_img_4.jpg"
                          alt=""
                          className="ct_img_h_450"
                        />
                      </div>
                      <figcaption>
                        <h5 className="text-white ct_fs_18 ct_ff_Outfit ct_fw_600">
                          Arts & music
                        </h5>
                        <p className="mb-0 text-white">46 Listings</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_categories_card">
                    <figure>
                      <div className="ct_category_img">
                        <img
                          src="assets/img/category_img_5.jpg"
                          alt=""
                          className="ct_img_h_450"
                        />
                      </div>
                      <figcaption>
                        <h5 className="text-white ct_fs_18 ct_ff_Outfit ct_fw_600">
                          Health & sports
                        </h5>
                        <p className="mb-0 text-white">46 Listings</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_categories_card">
                    <figure>
                      <div className="ct_category_img">
                        <img
                          src="assets/img/category_img_1.jpg"
                          alt=""
                          className="ct_img_h_450"
                        />
                      </div>
                      <figcaption>
                        <h5 className="text-white ct_fs_18 ct_ff_Outfit ct_fw_600">
                          Baisc & primary
                        </h5>
                        <p className="mb-0 text-white">46 Listings</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_categories_card">
                    <figure>
                      <div className="ct_category_img">
                        <img
                          src="assets/img/category_img_2.jpg"
                          alt=""
                          className="ct_img_h_450"
                        />
                      </div>
                      <figcaption>
                        <h5 className="text-white ct_fs_18 ct_ff_Outfit ct_fw_600">
                          O & A-Levels
                        </h5>
                        <p className="mb-0 text-white">46 Listings</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_categories_card">
                    <figure>
                      <div className="ct_category_img">
                        <img
                          src="assets/img/category_img_3.jpg"
                          alt=""
                          className="ct_img_h_450"
                        />
                      </div>
                      <figcaption>
                        <h5 className="text-white ct_fs_18 ct_ff_Outfit ct_fw_600">
                          Graduation
                        </h5>
                        <p className="mb-0 text-white">46 Listings</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_categories_card">
                    <figure>
                      <div className="ct_category_img">
                        <img
                          src="assets/img/category_img_4.jpg"
                          alt=""
                          className="ct_img_h_450"
                        />
                      </div>
                      <figcaption>
                        <h5 className="text-white ct_fs_18 ct_ff_Outfit ct_fw_600">
                          Arts & music
                        </h5>
                        <p className="mb-0 text-white">46 Listings</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="ct_categories_card">
                    <figure>
                      <div className="ct_category_img">
                        <img
                          src="assets/img/category_img_5.jpg"
                          alt=""
                          className="ct_img_h_450"
                        />
                      </div>
                      <figcaption>
                        <h5 className="text-white ct_fs_18 ct_ff_Outfit ct_fw_600">
                          Health & sports
                        </h5>
                        <p className="mb-0 text-white">46 Listings</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </OwlCarousel>
           
              <div className="text-center mt-5">
                <a
                  href="javascript:void(0)"
                  className="ct_purple_btn ct_ff_Outfit ct_fw_600 ct_py_12 "
                >
                  Explore all categories{" "}
                  <i className="fa-solid fa-chevron-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
          <section className="ct_py_136 ">
        <div className="container">
          <div className="row align-items-center">
          <div
              className="col-lg-5  mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="ct_about_right">
                <img src="assets/img/about_212.jpg" alt="" className="ct_img_450" />
              </div>
            </div>
            <div
              className="col-lg-6 offset-lg-1 mb-4 mb-lg-0"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="ct_about_section_left">
                <img
                  src="assets/img/curve_line_orange.svg"
                  className="ct_img_56 mb-4"
                  alt=""
                />
                <h4 className="ct_fs_22 ct_ff_Outfit ct_fw_400 mb-0">
                Why Choose Hank?
                </h4>
                <h3 className="ct_ff_Outfit ct_fs_36 ct_fw_600">
                Australian Designed & Built



                </h3>
                <p className="mb-0 mt-4">
                Proudly developed in Australia, Hank understands the unique needs of the local tutoring market, offering tailored solutions that global competitors simply can’t match.
                </p>
                <div className="mt-3">
                  <h4 className="ct_fs_18 ct_fw_600">Competitive Advantage:</h4>
                  <ul className="ct_list_style_dot ps-3 pt-2">
                    <li><span className="ct_fw_600">Full Automation:</span> Unlike other softwares and programs, Hank offers comprehensive automation for onboarding and re-enrolment.
                    </li>
                    <li><span className="ct_fw_600">Seamless Integration with Xero:</span> Effortlessly connect with your accounting software for streamlined financial management.
                    </li>
                    <li><span className="ct_fw_600">User-Friendly Interface:</span> Designed with simplicity in mind, ensuring that even the least tech-savvy users can navigate with ease.

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>

      <section
        className="ct_testimonial_main ct_py_80"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ct_testimonial_inner_item">
              <h4 className="ct_fs_22 ct_ff_Outfit ct_fw_400 mb-0">
              Testimonials

                </h4>
                <h3 className="ct_ff_Outfit ct_fs_36 ct_fw_600 mb-4">
                What Our Users Are Saying:
                </h3>
                {/* <h3 className="ct_fs_36 ct_ff_Outfit ct_fw_700 mb-0">
                  See how our “Students & Parents”
                  <br />
                  made their
                  <span className="ct_sky_blue_text">#Success Stories</span>
                </h3> */}
                <OwlCarousel
                  className="owl-carousel owl-theme ct_testimonial_slider mt-4"
                  {...options3}
                >
                  <div className="item">
                    <div className="ct_testimonial_slider_cnt">
                      <div className="ct_tetimonial_img">
                        <img
                          src="assets/img/success_story_img.png"
                          alt=""
                          className="ct_img_h_387"
                        />
                      </div>
                      <div className="ct_testimonial_title">
                       
                        <p className="pt-3 mb-0">
                        "Hank has revolutionised the way we manage our tutoring business. The automation features have saved us countless hours!
                        </p>
                        <div className="pt-3">
                          <h4 className="ct_fs_22 mb-0 ct_fw_600 ct_ff_Outfit">
                          Jane D., Melbourne
                          </h4>
                       
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="ct_testimonial_slider_cnt">
                      <div className="ct_tetimonial_img">
                        <img
                          src="assets/img/success_story_img.png"
                          alt=""
                          className="ct_img_h_387"
                        />
                      </div>
                      <div className="ct_testimonial_title">
                      
                        <p className="pt-3 mb-0">
                        "Thanks to Hank, we can focus more on our students and less on admin. Highly recommended!"
                        </p>
                        <div className="pt-3">
                          <h4 className="ct_fs_22 mb-0 ct_fw_600 ct_ff_Outfit">
                          Mark S., Sydney
                          </h4>
                          
                        </div>
                      </div>
                    </div>
                  </div>
               
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        className="ct_explore_section"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="text-left">
                <img
                  src="assets/img/curve_line_orange.svg"
                  className="ct_img_56 mb-4"
                  alt=""
                />
                <h4 className="ct_fs_22 ct_ff_Outfit ct_fw_400 mb-0">
                  Explore from our huge collection
                </h4>
                <h3 className="ct_ff_Outfit ct_fs_36 ct_fw_600 mb-3">
                  Search top notch tutors by grades
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="ct_explore_list_main">
                <h4 className="ct_fs_22 ct_fw_600 ct_ff_Outfit ps-4 ms-3">
                  Baisc & primary
                </h4>
                <ul className="mt-4 ct_tutor_info_list ct_px_20">
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Computer
                    </span>
                    <span>(46)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Drawing
                    </span>
                    <span>(46)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      English
                    </span>
                    <span>(46)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Math
                    </span>
                    <span>(46)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Science
                    </span>
                    <span>(46)</span>
                  </li>
                </ul>
                <div className="ps-4 ms-3 mt-3">
                  <a
                    href="javascript:void(0)"
                    className="ct_fw_600 ct_sky_blue_text ct_fw_600 ct_fs_18 ct_ff_open_sans"
                  >
                    Explore all
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="ct_explore_list_main">
                <h4 className="ct_fs_22 ct_fw_600 ct_ff_Outfit  ps-4 ms-3">
                  O & A-Levels
                </h4>
                <ul className="mt-4 ct_tutor_info_list ct_px_20">
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Accounting
                    </span>
                    <span>(46)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Art & Design
                    </span>
                    <span>(46)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Biology
                    </span>
                    <span>(46)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Business studies
                    </span>
                    <span>(46)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Chemistry
                    </span>
                    <span>(46)</span>
                  </li>
                </ul>
                <div className="ps-4 ms-3 mt-3">
                  <a
                    href="javascript:void(0)"
                    className="ct_fw_600 ct_sky_blue_text ct_fw_600 ct_fs_18 ct_ff_open_sans"
                  >
                    Explore all
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="ct_explore_list_main">
                <h4 className="ct_fs_22 ct_fw_600 ct_ff_Outfit  ps-4 ms-3">
                  Graduation
                </h4>
                <ul className="mt-4 ct_tutor_info_list ct_px_20">
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Accounting
                    </span>
                    <span>(19)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Advertising
                    </span>
                    <span>(26)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Agriculture
                    </span>
                    <span>(14)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Architecture
                    </span>
                    <span>(18)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Astronomy
                    </span>
                    <span>(24)</span>
                  </li>
                </ul>
                <div className="ps-4 ms-3 mt-3">
                  <a
                    href="javascript:void(0)"
                    className="ct_fw_600 ct_sky_blue_text ct_fw_600 ct_fs_18 ct_ff_open_sans"
                  >
                    Explore all
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="ct_explore_list_main">
                <h4 className="ct_fs_22 ct_fw_600 ct_ff_Outfit  ps-4 ms-3">
                  Arts & music
                </h4>
                <ul className="mt-4 ct_tutor_info_list ct_px_20">
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Acting
                    </span>
                    <span>(21)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Audio Production
                    </span>
                    <span>(20)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Composition
                    </span>
                    <span>(20)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Dance
                    </span>
                    <span>(18)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Drums
                    </span>
                    <span>(19)</span>
                  </li>
                </ul>
                <div className="ps-4 ms-3 mt-3">
                  <a
                    href="javascript:void(0)"
                    className="ct_fw_600 ct_sky_blue_text ct_fw_600 ct_fs_18 ct_ff_open_sans"
                  >
                    Explore all
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="ct_explore_list_main">
                <h4 className="ct_fs_22 ct_fw_600 ct_ff_Outfit  ps-4 ms-3">
                  Health & sports
                </h4>
                <ul className="mt-4 ct_tutor_info_list ct_px_20">
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Aerobics
                    </span>
                    <span>(20)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Athletics
                    </span>
                    <span>(17)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Badminton
                    </span>
                    <span>(16)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Baseball
                    </span>
                    <span>(14)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Basketball
                    </span>
                    <span>(22)</span>
                  </li>
                </ul>
                <div className="ps-4 ms-3 mt-3">
                  <a
                    href="javascript:void(0)"
                    className="ct_fw_600 ct_sky_blue_text ct_fw_600 ct_fs_18 ct_ff_open_sans"
                  >
                    Explore all
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="ct_explore_list_main">
                <h4 className="ct_fs_22 ct_fw_600 ct_ff_Outfit  ps-4 ms-3">
                  Spoken languages
                </h4>
                <ul className="mt-4 ct_tutor_info_list ct_px_20">
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Arabic
                    </span>
                    <span>(39)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Chinese
                    </span>
                    <span>(40)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Czech
                    </span>
                    <span>(42)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Danish
                    </span>
                    <span>(37)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Dutch
                    </span>
                    <span>(42)</span>
                  </li>
                </ul>
                <div className="ps-4 ms-3 mt-3">
                  <a
                    href="javascript:void(0)"
                    className="ct_fw_600 ct_sky_blue_text ct_fw_600 ct_fs_18 ct_ff_open_sans"
                  >
                    Explore all
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="ct_explore_list_main">
                <h4 className="ct_fs_22 ct_fw_600 ct_ff_Outfit  ps-4 ms-3">
                  Short courses
                </h4>
                <ul className="mt-4 ct_tutor_info_list ct_px_20">
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Accountancy
                    </span>
                    <span>(46)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Agriculture
                    </span>
                    <span>(46)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Architecture
                    </span>
                    <span>(46)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Astrology
                    </span>
                    <span>(46)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Aviation
                    </span>
                    <span>(46)</span>
                  </li>
                </ul>
                <div className="ps-4 ms-3 mt-3">
                  <a
                    href="javascript:void(0)"
                    className="ct_fw_600 ct_sky_blue_text ct_fw_600 ct_fs_18 ct_ff_open_sans"
                  >
                    Explore all
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="ct_explore_list_main">
                <h4 className="ct_fs_22 ct_fw_600 ct_ff_Outfit  ps-4 ms-3">
                  IT & programing
                </h4>
                <ul className="mt-4 ct_tutor_info_list ct_px_20">
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Adobe Illustrator
                    </span>
                    <span>(46)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Adobe Photoshop
                    </span>
                    <span>(46)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Android development
                    </span>
                    <span>(46)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      AutoCAD
                    </span>
                    <span>(46)</span>
                  </li>
                  <li className="ct_fs_16">
                    <span>
                      <i className="fa-solid fa-check pe-2 ct_check_icon"></i>
                      Database
                    </span>
                    <span>(46)</span>
                  </li>
                </ul>
                <div className="ps-4 ms-3 mt-3">
                  <a
                    href="javascript:void(0)"
                    className="ct_fw_600 ct_sky_blue_text ct_fw_600 ct_fs_18 ct_ff_open_sans"
                  >
                    Explore all
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


<section className="py-5"   data-aos="fade-down"
              data-aos-duration="1000">
  <div className="container">
    <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="ct_newleter_bg">
              <h3>Call to Action</h3>
              <h5>Ready to Transform Your Tutoring Business?
              </h5>
              <p>Join the growing community of tutors and tutoring businesses who are streamlining their operations with Hank.
              </p>
              <div className="d-flex align-items-center gap-3 justify-content-center mt-5 flex-wrap">
              <a href="javascript:void(0)" class="ct_purple_btn ct_ff_Outfit ct_fw_600 ct_py_12 ct_yellow_btn">Start Your 21-Day Free Trial <i class="fa-solid fa-chevron-right ms-2"></i></a>
              <a href="javascript:void(0)" class="ct_purple_btn ct_ff_Outfit ct_fw_600 ct_py_12 ct_yellow_btn horizontal-shake"> Book a Live Demo</a>
              </div>
          </div>

        </div>

    </div>

  </div>
</section>
      

      <footer >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="ct_footer_left_dtl_cnt">
                <div className="ct_logo">
                  <a href="javascript:void(0)">
                    <img src="../assets/img/tutor-logo.png" alt="" />
                  </a>
                </div>
                <p
                  className="mt-4 mb-0 ct_line_h_26"
                  style={{ color: "#EEEEEE" }}
                >
                  Accusamus etidio dignissimos ducimus blanditiis praesentium
                  volupta eleniti atquete corrupti quolores etmquasa molestias
                  epturi sinteam occaecati cupiditate non providente mikume
                  molareshe.
                </p>
                <ul className="ct_footer_social_icons mt-4">
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="ct_footer_cnt">
                <h4 className="ct_fs_18 ct_ff_Outfit text-white ct_fw_600 mb-4">
                Stay Connected
                </h4>
                <ul className="ct_footer_menu">
                  <li>
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4044 16.0811C13.3627 16.0811 13.3263 16.0811 13.295 16.0811C13.2638 16.0811 13.2482 16.0811 13.2482 16.0811C12.7065 16.0186 12.17 15.93 11.6388 15.8154C11.1179 15.6904 10.6023 15.5394 10.0919 15.3623C9.58149 15.1852 9.08149 14.9769 8.59191 14.7373C8.10232 14.4873 7.62836 14.2165 7.17003 13.9248C6.74295 13.6644 6.3367 13.3779 5.95128 13.0654C5.56586 12.7529 5.19868 12.4196 4.84972 12.0654C4.50076 11.7113 4.17003 11.3363 3.85753 10.9404C3.54503 10.5446 3.25857 10.1227 2.99816 9.6748C2.70649 9.2373 2.43566 8.77897 2.18566 8.2998C1.93566 7.82064 1.71691 7.32845 1.52941 6.82324C1.34191 6.31803 1.18045 5.80501 1.04503 5.28418C0.920031 4.75293 0.826281 4.21647 0.763781 3.6748C0.722114 3.12272 0.878364 2.63314 1.23253 2.20605C1.5867 1.77897 2.04503 1.52376 2.60753 1.44043C2.6492 1.44043 2.67524 1.44043 2.68566 1.44043C2.69607 1.44043 2.72211 1.44043 2.76378 1.44043H4.76378C5.24295 1.44043 5.67524 1.60449 6.06066 1.93262C6.44607 2.26074 6.68045 2.68522 6.76378 3.20605C6.80545 3.47689 6.86534 3.76595 6.94347 4.07324C7.02159 4.38053 7.12316 4.6748 7.24816 4.95605C7.36274 5.32064 7.38097 5.68783 7.30284 6.05762C7.22472 6.42741 7.04503 6.75293 6.76378 7.03418L6.27941 7.51855C6.68566 8.12272 7.14399 8.68001 7.65441 9.19043C8.16482 9.70085 8.72212 10.1592 9.32628 10.5654L9.81066 10.0811C10.0919 9.7998 10.4174 9.62012 10.7872 9.54199C11.157 9.46387 11.5242 9.4821 11.8888 9.59668C12.17 9.72168 12.4539 9.81022 12.7403 9.8623C13.0268 9.91439 13.3263 9.96126 13.6388 10.0029C14.1596 10.0758 14.5841 10.3076 14.9122 10.6982C15.2403 11.0889 15.4044 11.5238 15.4044 12.0029V14.0029C15.4044 14.5967 15.2117 15.0915 14.8263 15.4873C14.4409 15.8831 13.9669 16.0811 13.4044 16.0811ZM4.76378 2.7998H2.76378C2.56586 2.7998 2.40961 2.88053 2.29503 3.04199C2.18045 3.20345 2.12316 3.3623 2.12316 3.51855C2.18566 3.99772 2.26899 4.47689 2.37316 4.95605C2.48774 5.43522 2.62576 5.90658 2.78722 6.37012C2.94868 6.83366 3.13357 7.28939 3.34191 7.7373C3.55024 8.18522 3.78461 8.61751 4.04503 9.03418C4.28461 9.4196 4.55024 9.78418 4.84191 10.1279C5.12316 10.4821 5.42524 10.8154 5.74816 11.1279C6.07107 11.4404 6.40441 11.7373 6.74816 12.0186C7.09191 12.2998 7.44607 12.5602 7.81066 12.7998C8.22732 13.0602 8.65441 13.2998 9.09191 13.5186C9.52941 13.7373 9.97732 13.9274 10.4357 14.0889C10.894 14.2503 11.3575 14.3883 11.8263 14.5029C12.295 14.6071 12.769 14.68 13.2482 14.7217C13.4461 14.7217 13.6153 14.654 13.756 14.5186C13.8966 14.3831 13.9669 14.2373 13.9669 14.0811V12.0811C13.9669 11.9248 13.9122 11.779 13.8028 11.6436C13.6935 11.5081 13.5607 11.4404 13.4044 11.4404C13.0502 11.3988 12.7091 11.3389 12.381 11.2607C12.0528 11.1826 11.7273 11.0811 11.4044 10.9561C11.2898 10.9144 11.1622 10.9118 11.0216 10.9482C10.881 10.9847 10.769 11.0394 10.6857 11.1123L9.81066 12.0029C9.68566 12.1175 9.55024 12.18 9.40441 12.1904C9.25857 12.2008 9.12316 12.1644 8.99816 12.0811C8.58149 11.7998 8.18045 11.4977 7.79503 11.1748C7.40961 10.8623 7.03982 10.5238 6.68566 10.1592C6.33149 9.7946 6.00336 9.41439 5.70128 9.01855C5.38878 8.62272 5.10232 8.20085 4.84191 7.75293C4.76899 7.63835 4.74555 7.50814 4.77159 7.3623C4.79764 7.21647 4.84711 7.08105 4.92003 6.95605L5.81066 6.08105C5.88357 5.99772 5.93826 5.88574 5.97472 5.74512C6.01118 5.60449 6.00857 5.47689 5.96691 5.3623C5.84191 5.03939 5.74034 4.71387 5.66222 4.38574C5.58409 4.05762 5.5242 3.71647 5.48253 3.3623C5.44086 3.19564 5.36014 3.06022 5.24034 2.95605C5.12055 2.85189 4.9617 2.7998 4.76378 2.7998ZM12.6857 7.44043C12.5294 7.44043 12.394 7.38574 12.2794 7.27637C12.1648 7.16699 12.0867 7.03418 12.045 6.87793C11.9304 6.3571 11.6857 5.90137 11.3107 5.51074C10.9357 5.12012 10.4877 4.88314 9.96691 4.7998C9.76899 4.75814 9.62576 4.66439 9.53722 4.51855C9.44868 4.37272 9.40441 4.20085 9.40441 4.00293C9.44607 3.80501 9.53982 3.66178 9.68566 3.57324C9.83149 3.4847 10.0034 3.44043 10.2013 3.44043C11.0034 3.59668 11.6935 3.95866 12.2716 4.52637C12.8497 5.09408 13.2013 5.7998 13.3263 6.64355C13.3679 6.84147 13.3341 7.01335 13.2247 7.15918C13.1153 7.30501 12.9617 7.39876 12.7638 7.44043C12.7638 7.44043 12.7612 7.44043 12.756 7.44043C12.7508 7.44043 12.7273 7.44043 12.6857 7.44043ZM15.4044 7.44043C15.2482 7.44043 15.1023 7.38574 14.9669 7.27637C14.8315 7.16699 14.7638 7.03418 14.7638 6.87793C14.6804 6.24251 14.5086 5.64876 14.2482 5.09668C13.9773 4.5446 13.6336 4.06283 13.2169 3.65137C12.8002 3.23991 12.3211 2.90397 11.7794 2.64355C11.2482 2.38314 10.67 2.22168 10.045 2.15918C9.84711 2.11751 9.69347 2.02637 9.58409 1.88574C9.47472 1.74512 9.44086 1.59668 9.48253 1.44043C9.5242 1.28418 9.60232 1.13835 9.71691 1.00293C9.83149 0.867513 9.96691 0.799805 10.1232 0.799805C10.9044 0.883138 11.6336 1.09147 12.3107 1.4248C12.9877 1.75814 13.5867 2.18783 14.1075 2.71387C14.6284 3.23991 15.0554 3.84147 15.3888 4.51855C15.7221 5.20605 15.9409 5.94043 16.045 6.72168C16.045 6.87793 15.9877 7.02637 15.8732 7.16699C15.7586 7.30762 15.6023 7.39876 15.4044 7.44043Z"
                        fill="#DDDDDD"
                      />
                    </svg>
                    <a href="te:1234567890">+01 1234567890</a>
                    {/* <span>( Mon to Sun 9am - 11pm GMT )</span> */}
                  </li>
                  <li>
                    <svg
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4044 0.799805H2.68567C2.16484 0.799805 1.70129 0.992513 1.29504 1.37793C0.888794 1.76335 0.685669 2.2373 0.685669 2.7998V10.7998C0.685669 11.3623 0.878377 11.8363 1.26379 12.2217C1.64921 12.6071 2.12317 12.7998 2.68567 12.7998H13.3263C13.8888 12.7998 14.3628 12.6071 14.7482 12.2217C15.1336 11.8363 15.3263 11.3623 15.3263 10.7998V2.7998C15.368 2.2373 15.1883 1.76335 14.7872 1.37793C14.3862 0.992513 13.9253 0.799805 13.4044 0.799805ZM2.68567 2.15918H13.3263C13.4409 2.15918 13.5529 2.19564 13.6622 2.26855C13.7716 2.34147 13.8471 2.44043 13.8888 2.56543L8.04504 6.64355L2.12317 2.4873C2.16484 2.40397 2.23775 2.32845 2.34192 2.26074C2.44609 2.19303 2.56067 2.15918 2.68567 2.15918ZM14.045 10.7998C14.045 10.9977 13.9773 11.154 13.8419 11.2686C13.7065 11.3831 13.5607 11.4404 13.4044 11.4404H2.68567C2.48775 11.4404 2.3315 11.3727 2.21692 11.2373C2.10234 11.1019 2.04504 10.9561 2.04504 10.7998V4.08105L7.63879 8.00293C7.68046 8.0446 7.73775 8.06803 7.81067 8.07324C7.88359 8.07845 7.96171 8.08105 8.04504 8.08105C8.12838 8.08105 8.19609 8.07845 8.24817 8.07324C8.30025 8.06803 8.36796 8.0446 8.45129 8.00293L14.045 4.08105V10.7998Z"
                        fill="#DDDDDD"
                      />
                    </svg>
                    <a href="javascript:void(0)">user@yourdomain.com</a>
                  </li>
                
              
                </ul>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="ct_footer_cnt">
                <h4 className="ct_fs_18 ct_ff_Outfit text-white ct_fw_600 mb-4">
                Legal Links:
                </h4>
                <ul className="ct_footer_menu">
                  <li>
                   
                    <a href="#">Privacy Policy </a>
                    {/* <span>( Mon to Sun 9am - 11pm GMT )</span> */}
                  </li>
                  <li>
                   
                    <a href="#">Terms of Service
                    </a>
                  </li>
                
              
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="ct_sub_footer">
          <p className="mb-0">©2024 All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
