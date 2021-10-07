import React, { Fragment } from 'react'
import './Services.css'
import { IoNewspaperOutline,IoSpeedometerOutline} from "react-icons/io5";
import { IoIosAnalytics,IoIosBookmarks,IoIosGlobe,IoMdTime} from "react-icons/io";

class Servicesk extends React.Component{
    constructor(){
        super();
        this.srate={
         name:"satish"
        }
    }
    render(){
        return(
            <Fragment>
                
              <div className="Services">
                 <div className="Services_1">
                          <div className="Services_2">
                            
                              <h3>Services</h3>
                              <p>Thinking Big? We make it Possible! Choose From Our Varied Range of Services.</p>
                         </div> 
                         
                        <div className="row box d-flex">
                                  <div className="col-lg-4">
                                  <div className="box_1">
                                        <i><IoMdTime size="35px" style={{color:"#ff689b",background: "#fceef3"}}/></i>
                                        <h4><a href="#">UX/UI Designe</a></h4>
                                        <p className="description">Unique mockups or design solutions that marries UI and UX 
                                        principles to transform into a seamless customer journey.</p>
                                    </div> 
                                      
                                  </div>
                                  <div className="col-lg-4">
                                  <div className="box_1">
                                        <i><IoMdTime size="35px" style={{color: "#e98e06" ,background:"#ffff0da"}}/></i>
                                        <h4><a href="#">Enterprise Web Applications</a></h4>
                                        <p className="description">Custom B2B and B2C web applications that are built from scratch to 
                                        meet operational efficiency and the highest degrees of modularity..</p>
                                    </div> 
                                  </div>
                                  <div className="col-lg-4">
                                  <div className="box_1">
                                  <i><IoNewspaperOutline size="35px"  style={{color: "#3fcdc7", background:"#e6fdfc"}}/></i>
                                        <h4><a href="#">Mobile Applications</a></h4>
                                        <p className="description">
                                        Native and Hybrid applications that out far excellence for being intuitive, mobile friendly 
                                        and easy on budget at the same time.</p>
                                    </div> 
                                  </div>
                                  
                           </div> 
{/* -------------------------------------------------------second colnm====================== */}
<div className="row box d-flex">
                                  <div className="col-lg-4">
                                  <div className="box_1">
                                        <i><IoMdTime size="35px" style={{color:"#ff689b",background: "#fceef3"}}/></i>
                                        <h4><a href="#">Cloud Solutions</a></h4>
                                        <p className="description">Native and Hybrid applications that out far excellence 
                                        for being intuitive, mobile friendly and easy on budget at the same time.</p>
                                    </div> 
                                      
                                  </div>
                                  <div className="col-lg-4">
                                  <div className="box_1">
                                        <i><IoMdTime size="35px" style={{color: "#e98e06" ,background:"#ffff0da"}}/></i>
                                        <h4><a href="#">Voice Applications</a></h4>
                                        <p className="description">A foray into the realm of groovy and sassy voice apps. Say goodbye to antiques with new application building technologies.</p>
                                    </div> 
                                  </div>
                                  <div className="col-lg-4">
                                  <div className="box_1">
                                  <i><IoNewspaperOutline size="35px"  style={{color: "#3fcdc7", background:"#e6fdfc"}}/></i>
                                        <h4><a href="#"> AI/ML</a></h4>
                                        <p className="description">
                                        Explore the new world of ideas and assist businesses in making wise choices. Ping us to build the AI apps you dream of. We got the right team for you.</p>
                                    </div> 
                                  </div>
                                  
                           </div>
{/* -------------------------------------------------------second colnm====================== */}


                             {/* <div class="d-flex justify-content-around">
                                    
                                     <div className="box_1">
                                        <i></i>
                                        <h4><a href="#">UX/UI Design</a>e</h4>
                                        <p className="description">Unique mockups or design solutions that marries UI and UX principles to transform into a seamless customer journey.</p>

                                     </div> 
                                     <div className="box_1">
                                     <h4><a href="#">UX/UI Design</a>e</h4>
                                        <p className="description">Unique mockups or design solutions that marries UI and UX principles to transform into a seamless customer journey.</p>
                                        
                                     </div> 
                                     <div className="box_1">
                                        <h4><a href="#">UX/UI Design</a>e</h4>
                                        <p className="description">Unique mockups or design solutions that marries UI and UX principles to transform into a seamless customer journey.</p>
                                        
                                     </div>   
                                     
                             </div>
                              <div className="d-flex justify-content-around">
                                    
                                     <div className="img_box_1">
                                         satish
                                     </div> 
                                     <div className="img_box_1">
                                          satish
                                     </div> 
                                     <div className="img_box_1">
                                          satish
                                     </div>   
                                     
                             </div> */}
                 </div>
              </div>
            </Fragment>
        )
    }
}
export default Servicesk;


// IoGlobeOutline