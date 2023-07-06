import React from "react";
import Slider from '../inc/Slider';
import {Link} from "react-router-dom";
import Layer from './layer';
import Layer1 from './layers';
import Pros from './pros';
import Tin from '../images/1.png';
import Tinn from '../images/2.png';
import Tiny from '../images/3.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faLinkedin} from '@fortawesome/fontawesome-free-brands';

function Home() {
    return (
        <div>
            <Slider />

            <section className="section">
        <div className="container">
            <div className="row">
            <div className="col-md-12  text-center">
                <h1 className="home-news-title  text-center">Our Focus</h1>
                <div className="underline mx-auto"></div>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <Link to="/about" className="btn btn-warming shadow">Read More</Link>
            </div>
            </div>
        </div>
        </section>
        {/* Our Vision, Mission and values  */}
       <Layer />
       <Layer1 />
        <Pros />
     

         {/* Our Services */}
        
                        <section className="team">
                            <div className="container">
                                <h1 className="home-news-title text-center">Our Team</h1>
                                <div className="underline mx-auto"></div>
                                <div className="row">
                                    <div className="col-md-3 profile text-center">
                                        <div className="img-box">
                                            <img src={Tin}  className="img-responsive" alt=""/>
                                                <ul>
                                                <a href="/"><li> <FontAwesomeIcon className ='font-awesome' icon={faFacebook} /></li></a>
                                                    <a href="/"><li> <FontAwesomeIcon className ='font-awesome' icon={faTwitter} /></li></a>
                                                    <a href="/"><li><FontAwesomeIcon className ='font-awesome' icon={faLinkedin} /></li></a>
                                                </ul>
                                        </div>
                                        <h2>Dr Winnpoo Kumer</h2>
                                        <h3>Founder / CEO</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>

                                    <div className="col-md-3 profile text-center">
                                        <div className="img-box">
                                            <img src={Tinn} className="img-responsive" alt=""/>
                                                <ul>
                                                    <a href="/"><li> <FontAwesomeIcon className ='font-awesome' icon={faFacebook} /></li></a>
                                                    <a href="/"><li> <FontAwesomeIcon className ='font-awesome' icon={faTwitter} /></li></a>
                                                    <a href="/"><li><FontAwesomeIcon className ='font-awesome' icon={faLinkedin} /></li></a>
                                                </ul>
                                        </div>
                                        <h2>Dr Winnpoo Kumer</h2>
                                        <h3>Founder / CEO</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>

                                    <div className="col-md-3 profile text-center">
                                        <div className="img-box">
                                            <img src={Tiny} className="img-responsive" alt=""/>
                                                <ul>
                                                <a href="/"><li> <FontAwesomeIcon className ='font-awesome' icon={faFacebook} /></li></a>
                                                    <a href="/"><li> <FontAwesomeIcon className ='font-awesome' icon={faTwitter} /></li></a>
                                                    <a href="/"><li><FontAwesomeIcon className ='font-awesome' icon={faLinkedin} /></li></a>
                                                </ul>
                                        </div>
                                        <h2>Dr Winnpoo Kumer</h2>
                                        <h3>Founder / CEO</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>

                                    <div className="col-md-3 profile text-center">
                                        <div className="img-box">
                                            <img src={Tin} className="img-responsive" alt=""/>
                                                <ul>
                                                <a href="/"><li> <FontAwesomeIcon className ='font-awesome' icon={faFacebook} /></li></a>
                                                    <a href="/"><li> <FontAwesomeIcon className ='font-awesome' icon={faTwitter} /></li></a>
                                                    <a href="/"><li><FontAwesomeIcon className ='font-awesome' icon={faLinkedin} /></li></a>
                                                </ul>
                                        </div>
                                        <h2>Dr Winnpoo Kumer</h2>
                                        <h3>Founder / CEO</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>


                                </div>
                            </div>
                            
                            </section>            

            </div>
        );
    }
export default Home;