import React from "react";
import face from '../images/facebook-icon.png';
import twit from '../images/twitter-icon.png';
import ins from '../images/instagram-icon.png';
import you from '../images/youtube-icon.png';

function Footer(){
    return(
      
<footer  className="fluid-container p-3 footer d-print-none" role="contentinfo">
<div className="container">
    <div className="row">
        <div className="col-12 col-lg-3 footer-main-section-column">
            <div className="footer-logo">
                <a href="/"><img src="/" className="img-fluid" style={{ width:'200', height: '65'}}  alt="All of Us Research Program Logo" /> </a>
            </div>
            <div className="footer-subscribe">
    <a className="btn btn-lg btn-light gtm-button gtm-footer-join-left button-join-footer" href="/">Join Now </a>
            </div>

        </div>
        <div className="col-6 col-lg-3 footer-main-section-column">
            <h2 className="footer-mainSection-title">
                <a href="/about" className="gtm-footer-nav">About</a>
            </h2>

            <ul className="list-unstyled footer-main-section-menu">
                <li>
                    <a href="/about/all-us-research-program-overview" className="gtm-footer-nav">Program Overview</a>
                </li>
                <li>
                    <a href="/about/core-values" className="gtm-footer-nav">Core Values</a>
                </li>
                <li>
                    <a href="/about/all-us-research-program-protocol" className="gtm-footer-nav">Protocol</a>
                </li>
                <li>
                    <a href="/about/faq" className="gtm-footer-nav">FAQ</a>
                </li>
            </ul>

            <h2 className="footer-mainSection-title">
                <a href="/get-involved">Get Involved</a>
            </h2>
            <ul className="list-unstyled footer-main-section-menu">
                <li>
                    <a href="/get-involved/opportunities-researchers" className="gtm-footer-nav">Opportunities for Researchers</a>
                </li>
                <li>
                    <a href="/get-involved/participation" className="gtm-footer-nav">Participation</a>
                </li>
            </ul>


            <h2 className="footer-mainSection-title">
                <a href="/funding-and-program-partners"classNames="gtm-footer-nav">Funding and Program Partners</a>
            </h2>
        </div>

        <div className="col-6 col-lg-3 footer-main-section-column">
            <h2 className="footer-mainSection-title">
                <a href="/news-events">News and Events</a>
            </h2>
            <ul className="list-unstyled footer-main-section-menu">
                <li>
                    <a href="/news-events/announcements" class="gtm-footer-nav">Recent Announcements</a>
                </li>
                <li>
                    <a href="/news-events/events" class="gtm-footer-nav">Upcoming Events</a>
                </li>
            </ul>

            <h2 className="footer-mainSection-title">
                <a href="/protecting-data-and-privacy/">Protecting Data and Privacy</a>
            </h2>
            <ul className="list-unstyled footer-main-section-menu">
                <li>
                    <a href="/protecting-data-and-privacy/precision-medicine-initiative-privacy-and-trust-principles" class="gtm-footer-nav">Privacy and Trust Principles</a>
                </li>
                <li>
                    <a href="/protecting-data-and-privacy/precision-medicine-initiative-data-security-policy-principles-and-framework-overview" class="gtm-footer-nav">Data Security Policy and Framework</a>
                </li>
            </ul>
        </div>
        <div className="col-12 col-lg-3 footer-main-section-column last-column">
            <h2 className="footer-mainSection-title">
                <a href="https://home-c71.nice-incontact.com/incontact/chatclient/chatclient.aspx?poc=4ec1cdde-348d-4bd7-b734-e6b2d8bbe07a&bu=4598528 ">Connect With Us</a>
            </h2>
            <ul className="list-unstyled footer-main-section-menu">
                <li>
                    <a href="https://service.govdelivery.com/accounts/USNIH/subscriber/new?topic_id=USNIH_95" class="gtm-footer-nav">Subscribe to Updates</a>
                </li>
                <li>
                    <a href="/about/contact-us" class="gtm-footer-nav">Contact Us</a>
                    <ul className="footer-list-level-3">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12 .0497-19.12-9.7v-83.98h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384C483.2 0 511.1 28.75 511.1 63.1z"></path></svg>                                        <a href="https://home-c73.niceincontact.com/incontact/chatclient/chatclient.aspx?poc=4d9cd540-9c78-4323-ad4c-974af956b896&bu=4604131" class="gtm-footer-nav">Start online chat</a>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12 .0497-19.12-9.7v-83.98h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384C483.2 0 511.1 28.75 511.1 63.1z"></path></svg>                                        <a href="https://home-c73.niceincontact.com/incontact/chatclient/chatclient.aspx?poc=af442a2b-d9ce-47fd-851a-666b09db3d2a&bu=4604131" class="gtm-footer-nav" lang="es">Inicie una conversación en línea</a>
                        </li>
                    </ul>
                </li>
            </ul>

            <h2 className="footer-mainSection-title">Follow
                <em>Able Africa</em>
            </h2>

            <div className="footer__social_icon_box">
                <a href="https://www.facebook.com/AllofUsResearch/" target="_blank" rel="noopener noreferrer">
            <img className="footer__social_icon" src={face} alt="Facebook icon" />
        </a>
                <a href="https://twitter.com/AllofUsResearch/" target="_blank" rel="noopener noreferrer">
            <img className="footer__social_icon" src={twit} alt="Twitter icon" />
        </a>
                <a href="https://www.instagram.com/allofusresearch/" target="_blank" rel="noopener noreferrer">
            <img className="footer__social_icon" src={ins} alt="Instagram icon" />
        </a>
                <a href="https://www.youtube.com/channel/UCQId1TfpwPaYiDIGlxEhlkA" target="_blank" rel="noopener noreferrer">
            <img className="footer__social_icon" src={you} alt="YouTube icon" />
        </a>
            </div>

            <div className="footer-button">

                <a className="btn btn-lg btn-light gtm-button gtm-footer-join-right" href="/"></a>
            </div>

            <div className="footer-button">
                <a className="btn btn-lg btn-light gtm-button" href="/"></a>

            </div>
        </div>
        <hr className="col-12 d-none d-sm-block" />

        <div className="footer__mainSection__bottomAside">
            <div className="col-md-12">

                <div className="footer__mainSection__disclaimer">
                    <p>
                    Able Africa, the Able Africa logo, Precision Medicine Initiative, PMI and The Future of Health Begins with You<br /> are service marks of the U.S.
                        <a className="footer__mainSection__disclaimer__link" href="https://www.hhs.gov/" target="_blank">Department of Health and Human Services (HHS)</a>. 
                    </p>
                    <p>
                        The Able Africa Research Program was formerly named the Precision Medicine Initiative Cohort Program. Read more about our
                        <a className="footer__mainSection__disclaimer__link" href="/news-events/announcements/pmi-cohort-program-announces-new-name-all-us-research-program">name change</a>.
                    </p>
                </div>

            </div>
        </div>
        <hr />
        <div className="col-lg-8 clearfix footer__bottomSection__left">
            <ul className="footer__bottomSection__menu clearfix" aria-label="Government information and services">
                <li className="footer__bottomSection__menu__item">
                    <a href="https://www.hhs.gov/civil-rights/for-individuals/nondiscrimination/index.html" target="_blank">Nondiscrimination Notice</a>
                </li>
                <li className="footer__bottomSection__menu__item">
                    <a href="https://www.nih.gov/web-policies-notices" target="_blank">Privacy Notice</a>
                </li>
                <li className="footer__bottomSection__menu__item">
                    <a href="https://www.nih.gov/institutes-nih/nih-office-director/office-communications-public-liaison/freedom-information-act-office" target="_blank">FOIA</a>
                </li>
                <li className="footer__bottomSection__menu__item">
                    <a href="https://www.nih.gov/web-policies-notices" target="_blank">Disclaimer</a>
                </li>
                <li className="footer__bottomSection__menu__item">
                    <a href="https://www.nih.gov/web-policies-notices" target="_blank">Accessibility</a>
                </li>
                <li className="footer__bottomSection__menu__item">
                    <a href="https://www.hhs.gov/vulnerability-disclosure-policy/index.html" target="_blank">HHS Vulnerability Disclosure</a>
                </li>
                <li className="footer__bottomSection__menu__item">
                    <a href="" target="_blank">USA.Gov - Government Made Easy</a>
                </li>
            </ul>
        </div>

        <div className="col-lg-4 footer__bottomSection__right">
            <ul className="footer__bottomSection__list clearfix">
                <li className="footer__bottomSection__list__item footer__bottomSection__list__item--tagline">
                    <img className="footer__bottomSection__tagline__logo" alt="National Institutes of Health logo" src="/" />
                    <span>Turning Discovery into Health</span>
                </li>
            </ul>
        </div>

        <p className="col-12 footer__bottomSection__copyright">Copyright © 2023
        </p>
</div>
</div>
</footer>


   
    );
}

export default Footer;