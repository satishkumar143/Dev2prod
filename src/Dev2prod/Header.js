import React, { Fragment } from 'react'
import {AiFillApple} from "react-icons/ai";
import dev from "./dev.jpeg"
import Home from "./Home"

import './Header.css'

class Header extends React.Component{
    render(){
        return(
            <Fragment>
                    <div className="intro">
                    <div className="Icons">
                            <i><AiFillApple/></i>
                            <i><AiFillApple/></i>
                            <i><AiFillApple/></i>
                            <i><AiFillApple/></i>
                            <i><AiFillApple/></i>
                    </div>
                            <div className="row_1">
                                <div className="img_1">
                                      <img src={dev} alt="" className="fluid" />
                                
                                            {/* <input type="checkbox" id="check"/>
                                                <label for="check" className="chackedbtn">
                                                <i className="fas fa-bars"></i>
                                                </label> */}
                                  
                                </div>
                                <div className="link">
                      
                                       <ul>
                                           <li><a href="# " className="active">Home</a></li>
                                           <li><a href="# ">About us</a></li>
                                           <li><a href=" #">Services</a></li>
                                           <li><a href=" #">contaus</a></li>
                                         
                                         </ul>
                                          
                                </div>
                                
                         </div>
                          <Home/>
                    </div>
                    
            </Fragment>
        )
    }
}
export default Header;