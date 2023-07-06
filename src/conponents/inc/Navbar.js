import React from "react";
import baf from "../images/delimiter-arrow.png";
import logo from "../images/logo-nih-aou2.png";
import {Link} from "react-router-dom";


function Navbar() {
    return (
    
        <header className="header sticky-top" role="banner" aria-label="Navigation and search">
        <div className="header__topSection d-print-none">
            <div className="container">
                <div className="row header__topSection__content">
                    <div className="col-sm-12 header__topSection__column">

                        <a href="https://www.hhs.gov/" className="header__topSection__home-link">
                    <img src="/" alt=" " role="presentation" />
                    </a>
                        <img src={baf} alt="" role="presentation" />
                       
                    </div>
                </div>
            </div>
        </div>
      <nav aria-label="Mobile navigation"  className="container navbar">
      <div className="col-1 d-lg-none header-column-hamburger">
      <button  className="btn btn-none gtm-button navbar-toggler hamburger">
          <div className="animated-icon2">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
              </button>
          </div>
          
                      <div className="col-6 col-lg-4 logo-container text-center header-column-logo">
              <a href="/" classname="navbar-logo d-block gtm-header-home mobile" title="All of Us">
                  <img src={logo}  className="img-fluid" alt="..." />
              </a>
          </div>
          
                      <div className="col-5 no-gutters join-now-container d-block">
              
              <Link to="/Login" className="header-button button-link pipe-right" >Log In</Link>
              <Link to="/Register" className="gtm-button gtm-header-join  mobile-flush-right">Join Now</Link>
      
          </div>
          
                      <div className="input-group search-bar-desktop d-none d-lg-block col-lg-3">
              
      
      <form className="search-form search-form" role="search" action="https://search.usa.gov/search" method="get" id="search-block-form" accept-charset="UTF-8" target="_self">
      
      <input name="utf8" type="hidden" value="&#x2713;"/>
      <input type="hidden" name="affiliate" id="affiliate" value="all_of_us"/>
      
      <input aria-label="Enter search terms" title="Enter the terms you wish to search for." class="custom-search-box form-text usagov-search-autocomplete" placeholder="Search" type="text" name="query" value="" size="15" maxlength="128" tabindex="0" />
      
      <div className="input-group-append">
          <button className="btn btn-outline-secondary" name="commit" value="Search" type="submit" aria-label="Search" data-disable-with="Search">
              <span className='font-awesome'  aria-label="Search"></span>
          </button>
      </div>
      </form>
      
      
          </div>
                          
      
                  <div
              className="collapse d-lg-block no-gutters col-12 mt-3" id="">
                              <div className="input-group d-lg-none search-bar-mobile">
                  
      
      <form className="search-form search-form" role="search" action="https://search.usa.gov/search" method="get" id="search-block-form-mobile" accept-charset="UTF-8" target="_self">
      
      <input name="utf8" type="hidden" value="&#x2713;"/>
      <input type="hidden" name="affiliate" id="affiliate-mobile" value="all_of_us"/>
      
      <input aria-label="Enter search terms" title="Enter the terms you wish to search for." className="custom-search-box form-text usagov-search-autocomplete" placeholder="Search" type="text" name="query" value="" size="15" maxlength="128" tabindex="0" />
      
      <div className="input-group-append">
          <button className="btn btn-outline-secondary" name="commit" value="Search" type="submit" aria-label="Search" data-disable-with="Search">
              <span className="fas fa-search" aria-label="Search"></span>
          </button>
      </div>
      </form>
      
      
              </div>
              
                              
              <div className="main-menu">            
      <h2 className="visually-hidden" id="block-particle-mainnavigation-menu">Main navigation</h2>
      
      <ul className="aria-menu menu ml-auto nav navbar-nav">
      
      <li className="dropdown nav-item">
      <a className="gtm-topnav nav-link" href="/about">
          About
      </a>
      <a className="dropdown-toggle d-lg-none" href="/" data-toggle="dropdown" aria-label="Toggle dropdown">
          <i className="fas fa-angle-up"></i>
          <i className="fas fa-angle-down"></i>
      </a>
      
                  <ul className="dropdown-menu submenu" data-test="true" aria-hidden="true" role="menu">
                                  <a className="gtm-topnav-drop" href="/about/program-overview">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Program Overview
      
                      </li>
                  </a>
      
                                  <a className="gtm-topnav-drop" href="/about/core-values">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Core Values
      
                      </li>
                  </a>
      
                                  <a className="gtm-topnav-drop" href="/about/diversity-and-inclusion">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Diversity and Inclusion
      
                      </li>
                  </a>
      
                                  <a className="gtm-topnav-drop" href="/about/all-us-research-program-protocol">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Protocol
      
                      </li>
                  </a>
      
                                  <a className="gtm-topnav-drop" href="/about/who-we-are">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Who We Are
      
                      </li>
                  </a>
      
                                  <a className="gtm-topnav-drop" href="/about/program-goals">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Strategic Goals
      
                      </li>
                  </a>
      
                                  <a className="gtm-topnav-drop" href="/about/faq">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          FAQ
      
                      </li>
                  </a>
      
                                  <a className="gtm-topnav-drop" href="/about/contact-us">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Contact Us
      
                      </li>
                  </a>
      
                          </ul>
          </li>
      
      <li className="dropdown nav-item">
      <a className="gtm-topnav nav-link" href="/get-involved">
          Our Initiatives
      </a>
      <a className="dropdown-toggle d-lg-none" href="/" data-toggle="dropdown" aria-label="Toggle dropdown">
          <i class="fas fa-angle-up"></i>
          <i class="fas fa-angle-down"></i>
      </a>
      
                  <ul className="dropdown-menu submenu" data-test="true" aria-hidden="true" role="menu">
                                  <a class="gtm-topnav-drop" href="/get-involved/participation">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Participation
      
                      </li>
                  </a>
      
                                  <a className="gtm-topnav-drop" href="/get-involved/opportunities-researchers">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Opportunities for Researchers
      
                      </li>
                  </a>
      
                          </ul>
          </li>
      
      
                      
      
      
      
      
      
      <li className="dropdown nav-item">
      <a className="gtm-topnav nav-link" href="/funding-and-program-partners">
          Patients and Participant
      </a>
      <a className="dropdown-toggle d-lg-none" href="/" data-toggle="dropdown" aria-label="Toggle dropdown">
          <i class="fas fa-angle-up"></i>
          <i class="fas fa-angle-down"></i>
      </a>
      
                  <ul className="dropdown-menu submenu" data-test="true" aria-hidden="true" role="menu">
                                  <a class="gtm-topnav-drop" href="/funding-and-program-partners/funding-opportunities">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Funding Opportunities
      
                      </li>
                  </a>
      
                                  <a class="gtm-topnav-drop" href="/funding-and-program-partners/biobank">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Biobank
      
                      </li>
                  </a>
      
                               
      
                                  <a class="gtm-topnav-drop" href="/funding-and-program-partners/data-and-research-center">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Data and Research Center
      
                      </li>
                  </a>
      
                                  <a class="gtm-topnav-drop" href="/funding-and-program-partners/health-care-provider-organizations">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Health Care Provider Organizations
      
                      </li>
                  </a>
      
                                  <a class="gtm-topnav-drop" href="/funding-and-program-partners/participant-center">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Participant Center
      
                      </li>
                  </a>
      
                                  <a class="gtm-topnav-drop" href="/funding-and-program-partners/participant-technology-systems-center">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Participant Technology Systems Center
      
                      </li>
                  </a>
      
                                  <a class="gtm-topnav-drop" href="/funding-and-program-partners/genomics-partners">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Genomics Partners
      
                      </li>
                  </a>
                </ul>
          </li>
      <li className="dropdown nav-item">
      <a class="gtm-topnav nav-link" href="/protecting-data-and-privacy">
          Research and Partnerships
      </a>
      <a class="dropdown-toggle d-lg-none" href="/" data-toggle="dropdown" aria-label="Toggle dropdown">
          <i class="fas fa-angle-up"></i>
          <i class="fas fa-angle-down"></i>
      </a>
      <ul className="dropdown-menu submenu" data-test="true" aria-hidden="true" role="menu">
                                  <a class="gtm-topnav-drop" href="/protecting-data-and-privacy/precision-medicine-initiative-privacy-and-trust-principles">
      
                      <li className="dropdown-item" role="menuitem">
                          Precision Medicine Initiative
                      </li>
                  </a>
                                  <a class="gtm-topnav-drop" href="/protecting-data-and-privacy/precision-medicine-initiative-data-security-policy-principles-and-framework-overview">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Precision Medicine Initiative: Data Security Policy Principles and Framework Overview
                      </li>
                  </a>
      
                                  <a class="gtm-topnav-drop" href="/protecting-data-and-privacy/research-projects-all-us-data">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Research Projects with All of Us Data
      
                      </li>
                  </a>
      
                          </ul>
          </li>
      
      
                      
      
      
      
      
      
      <li className="dropdown nav-item">
      <a class="gtm-topnav nav-link" href="/news-events">
          News and Events
      </a>
      <a class="dropdown-toggle d-lg-none" href="/" data-toggle="dropdown" aria-label="Toggle dropdown">
          <i class="fas fa-angle-up"></i>
          <i class="fas fa-angle-down"></i>
      </a>
      
                  <ul className="dropdown-menu submenu" data-test="true" aria-hidden="true" role="menu">
                                  <a class="gtm-topnav-drop" href="/news-events/events">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Events
      
                      </li>
                  </a>
      
                                  <a class="gtm-topnav-drop" href="/news-events/announcements">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Program Announcements
      
                      </li>
                  </a>
      
                                  <a class="gtm-topnav-drop" href="/news-events/research-highlights">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Research Highlights
      
                      </li>
                  </a>
      
                                  <a class="gtm-topnav-drop" href="/news-events/voices-all-us">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Voices of All of Us
      
                      </li>
                  </a>
      
                                  <a class="gtm-topnav-drop" href="/news-events/sharable-resources">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Sharable Resources
      
                      </li>
                  </a>
      
                                  <a class="gtm-topnav-drop" href="/news-events/videos">
      
                      <li className="dropdown-item" role="menuitem">
      
      
                          Videos
      
                      </li>
                  </a>
      
                          </ul>
          </li>
      
          </ul>
      
      </div>
      
          </div>
      
          </nav>
          </header>

    );
}


export default Navbar;