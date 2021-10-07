import { render } from "@testing-library/react";
import React, { Fragment }  from "react";
import table from "./table.jpeg"
import './Home.css'

class Home extends React.Component{
    render(){
        return(
            <Fragment>
               <div className="Homepage">
                <div className="Row_1">
                          <div className="Homepage_1"> 
                            <div className="Home_1">
                                    <h2>Celebrate success with software solutions that go beyond <span>future</span></h2>
                            </div>
                            <div>
                                <a href="#about">
                                    <button className="set_btn">GET STARTED</button>
                                </a>
                            </div>
                         </div>
                         
                         <div className="ins_img">
                              <div className="img_12">
                                <img src={table} className="img-fluid" alt="No image"/>
                              </div>
                         </div> 
            </div>
               </div>
            </Fragment>
        )
    }
}
export default Home;