import React from 'react';
import img1 from "../images/img1.jfif";
import img2 from "../images/img2.jfif";
import img3 from "../images/img3.jfif";

function Pros(){
    return(
        <div className="p-0 container dynamic-container">
        <div className="views-element-container form-group">
                <div className="feeds-container container home-news-feed">
                     <h1 className="home-news-title text-center">News and Events</h1>
                     <div className="underline mx-auto"></div>
                        <div id="news-events" class="row mb-3 grid">
                         <div className="grid-sizer"></div>
                                <div className="masonry-grid">
                                         <div className="row">       
                                         <div className="card-container grid-item col-sm-4 d-flex pb-3">
                                         <div className="card feed feed-events  ">
                                         <img src={img1}  className="w-100 border-bottom" alt="Service1"/>
                                         <div className="card-body ">
                                         <p className=" card-title gtm-card">Applied Genomics and Biological Technologies (AGBT) Precision Health Meeting Workshop: Leveraging the <em class="aou-text">All of Us</em> Researcher Workbench to Advance Precision
                                                                                        Health</p>
                                                                <div className="card-text ">
                                         <p>In this workshop at the AGBT Precision Health Meeting, attendees will learn about the extensive data available on the<em> <em class="aou-text">All of Us</em></em> Researcher
                                                                                            Workbench. They will also complete an example genomic analysis. The workshop will be held on September 7 from 2:45 – 4:15 p.m.</p>
                                         </div>
                                         <a href="/news-events/events/applied-genomics-and-biological-technologies-agbt-precision-health-meeting-workshop-leveraging-all-us-researcher-workbench-advance-precision-health">Learn More</a>
        
                                            
                                         </div>
                                         </div>
                                            </div>
        
                                            <div className="card-container grid-item col-sm-4 d-flex pb-3">
                                                            <div className="card feed feed-events  ">
                                                            <img src={img2}  className="w-100 border-bottom" alt="Service1" />
                                                                <div className="card-body ">
        
                                        <p className=" card-title gtm-card">Information Session with Tribal Communities: Data and Partnerships in <em class="aou-text">All of Us</em></p>
                                            <div className="card-text ">
                                                    <p>As part of ongoing efforts to engage and solicit input from Tribal communities, <em><em class="aou-text">All of Us</em></em> is hosting a series of four virtual information
                                                                                            sessions and discussions in June 2023 on a variety of topics.</p>
        
                                                        </div>
         <a href="/news-events/events/information-session-tribal-communities-data-and-partnerships-all-us">Learn More</a>
         
        </div>
         </div>
        </div>
        <div class="card-container grid-item col-sm-4 d-flex pb-3">
         <div class="card feed feed-events  ">
         <img src={img3}  className="w-100 border-bottom" alt="Service1" />
        <div class="card-body ">
            <p class=" card-title gtm-card">Information Session with Tribal Communities: Describing Self-Identified AI/AN Participants in <em class="aou-text">All of Us</em> Data</p>
        <div class="card-text ">
        <p>As part of ongoing efforts to engage and solicit input from Tribal communities, <em><em class="aou-text">All of Us</em></em> is hosting a series of four virtual information
                                                                                            sessions and discussions in June 2023 on a variety of topics.</p>
         </div>
        <a href="/news-events/events/information-session-tribal-communities-describing-self-identified-aian-participants-all-us-data">Learn More</a>
        </div>
         </div>
        
         </div> 
         

        
        
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                         </div>
                                         </div>
    );
}
 export default Pros;