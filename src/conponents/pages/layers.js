import React from "react";
import kin from '../images/kin.png';

function layers (){
    return(
        <div className="container-fluid jumbotron-container" style={{backgroundColor: '#9dcdf8'}}>
        <div className="jumbotron container" style={{backgroundColor: '#9dcdf8'}}>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <h1 className="text-color-primary">
                        Strengthing individual and institutional capacity across  sub-sahara africa
                    </h1>
                    <p>
                    <p>The <em>Lorem Ipsum</em>   is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </p>
                    <p className="lead">
                        <a className="btn btn-dark gtm-button gtm-jumbotron" href="/">Opportunities for Researchers</a>
                    </p>
                </div>
                <div className="col-12 col-lg-4 offset-lg-2 jumbotron-right">
                    <img src={kin} class="img-fluid" alt="..." />
                    <p className="promo__image__message"></p>
                    <p>Research focuses on the intersection of three factors</p>
                </div>

            </div>
        </div>
    </div>

    );
}

export default layers;