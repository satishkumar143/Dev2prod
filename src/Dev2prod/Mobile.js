import React, { Fragment }  from "react";
import './Mobile.css';
import mod from './mod.jpeg'

class Mobile extends React.Component{
    constructor(){
        super();
        this.state={
              name:'love'
        }
    }
    render(){
        return(
            <Fragment>
                     <div className="mobile">
                         <div className="mobile_1">
                              <div className="row">
                                  <div className="col-lg-6">
                                         <div className="mod_pp">
                                             <p>Next, every product of ours goes through rigorous testing to identify flaws and 
                                                 loopholes. Our experts ensure that no stone is left unturned. We use state of 
                                                 the art tools and software solutions that helps us find test cases which may make 
                                                 or break your end product.
                                             </p>
                                             <p>The end solutions are then delivered online or is hosted as per the needs of the customer. 
                                                Being a resource intensive stage, we help our customers get hosting solutions that are feasible, 
                                                flexible and smart at the same time.
                                            </p>
                                            <p>We stress on building relationship and hence post the completion of the project we 
                                                provide customer support and services to all our clients.
                                            </p>
                                         </div> 
                                  </div>

                                  <div className="col-lg-6">
                                        <div className="mobile_img">
                                           <img src={mod} className="img-fluid"/>
                                       </div>
                                 </div>
                              </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}
export default Mobile;