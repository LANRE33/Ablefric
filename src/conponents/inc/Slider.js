import React from "react";
import back from "../images/background1.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
function Slider(){
    return (
      <main className="" role="main" >
      <a id="main-content" tabindex="-1" ></a>
      <div className="layout-content no-gutters container-fluid">
      <div>
      <div id="block-particle-content">
      <article data-history-node-id="/" role="article" about="/" typeof="schema:WebPage">
      <span property="schema:name" content="National Institutes of Health (NIH)" className="hidden"></span>
       <div>
        <div>
        < div className="container-fluid jumbotron-container" style={{ backgroundColor: '#f5f5f5'}} >
        <div className="jumbotron container" style={{ backgroundColor: '#f5f5f5'}} >
        <div className="row">
        <div className="col-12 col-lg-7 jumbotron-left">
        <img src={back}  className="img-fluid" alt="..." />
        <p className="promo__image__message"></p>
        </div>
        <div className="col-12 col-lg-5">
       <h1 className="text-color-gradient">
       Driving Change with the evidence we generate
      </h1>
      <p>
         <p>The <em>Lorem Ipsum</em>  is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      
        </p>
        <p className="lead">
      <a className="btn btn-dark gtm-button gtm-jumbotron" href="/">
            Join Now!
          </a>
        </p>
        </div>
        </div>
        </div>
          </div>
        </div>
       </div>
      </article>
      </div>
      </div>
      </div>
      </main>
    
      
     




      
    );
}

export default Slider;