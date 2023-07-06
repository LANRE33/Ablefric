import React from "react";


function layer (){
    return(
        <section className="fluid-container Homepage-cards" style={{ backgroundColor: '#262262'}} >
        <div className="container">
          <div className="row card-grid pattern inline text-white">
            <div className="col-12 col-lg-4" style={{ backgroundColor:'#262262'}}>
                <div className="border-none card feed" style={{ backgroundColor: '#262262'}}>
                    <div className="card-body">
                    <figure className="figure  w-"></figure>
                        <div className="card-text">
                           <p>Lorem Ipsum is <em className="aou-text">simply dummy</em>
                           text of the printing? </p> 
                              
                        </div>
                        <a className="bottom-button btn btn-light gtm-button">Get Involved</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-4" style={{ backgroundColor: '#262262'}}>
                <div className="border-none card feed" style={{ backgroundColor: '#262262'}} >
                    <div className="card-body">
                    <figure className="figure  w-"></figure>
                        <div className="card-text ">
                        <p>Lorem Ipsum is <em className="aou-text">simply dummy</em>
                           text of the printing? </p> 
                        </div>
                        <a className="bottom-button btn btn-light gtm-button">Research and Partnerships</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-4" style={{ backgroundColor: '#262262'}}>
                <div className="border-none card feed" style={{ backgroundColor: '#262262'}}>
                    <div className="card-body">
                    <figure className="figure  w-"></figure>
                        <div className="card-text ">
                        <p>Lorem Ipsum is <em className="aou-text">simply dummy</em>
                           text of the printing? </p> 
                        </div>
                        <a className="bottom-button btn btn-light gtm-button">Patients and Participants</a>
                    </div>
                    </div>
                    </div>
            </div>  
            </div>   
        </section>
    );
}

export default layer;