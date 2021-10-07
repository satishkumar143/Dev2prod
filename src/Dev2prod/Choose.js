
import React, { Fragment }  from "react";
import "./Choose.css";
import men from "./men.jpeg"
import {GrDiamond } from "react-icons/gr";
import { FaRegObjectGroup,FaLanguage } from "react-icons/fa";

class Choose extends React.Component{
constructor(){
    super();
    this.state={

    }
}
render(){
    return(
        <Fragment>
            <div className="Choose_1">
                <div className="Choose_2">
                    <div className="Why">
                         <h3>Why choose us?</h3>
                         <p>Your decision for your product has everything to do with your success. Let the experts guide you.</p>
                    </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="L_img">
                                    <img src={men} className="img-fluid"/>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="Choose-p">
                                     
                                        <p> Starting a venture is not easy. The team, along with the product, plays a pivotal role in bring a mere 
                                            idea to a living product. This is where we come into the picture with our innovative solutions and expert 
                                            mentorship programs.
                                        </p>
                                      <p>Learn why we are a great fit for your next project.</p> 
                                      <div className="di_1">
                                        <h4><i className="color"><GrDiamond size="38px"/></i>Budget-Friendly and Timely Delivery</h4>
                                        <p>They say that time is money. True enough. Software solutions are resource-intensive and complex at
                                           the very least. With Dev2Prod, you get an eye-opener about things you need and, more importantly, 
                                           things you don’t need for your startup. This way, we help businesses build the perfect solutions 
                                           they are looking for.
                                        </p>
                                      </div>
                                      
                                      <div className="di_1">
                                        <h4><i className="color"><FaRegObjectGroup size="38px"/></i>Experienced and Dedicated Team</h4>
                                        <p>For us, our paramount importance lies in helping you get started. This could be any software project. 
                                            Our team of experienced and dedicated developers works hard to ensure you get only the best in the desired 
                                            ime frame. On the other hand, our team of experienced developers ensure better software solutions that goes 
                                            beyond standard conventions.
                                        </p>
                                      </div>

                                      <div className="di_1">
                                        <h4><i className="color"><FaLanguage size="38px"/></i>Customer Centric</h4>
                                        <p>While most companies claim to be customer centric, we go without the need.
                                             Our work reflects how deeply we value your idea and efforts and craft 
                                             solutions with unparalleled conventions and expertise.
                                        </p>
                                      </div>

                                </div>
                            </div>
                        </div>
                </div>
           
            </div>
        </Fragment>
    )
}
}
export default Choose;