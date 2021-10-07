import React, { Fragment } from 'react';
import laptap from './laptap.jpeg'
import './Chooseing.css';
class Choosening extends React.Component{
    constructor(){
        super();
        this.state={
            love:"i love"
        }
    }
    render(){
        return(
            <Fragment>
                <div className="Choose_11">
                     <div className="Choose_12">
                         <div className="row">
                                <div className="col-lg-6">
                                     <di>
                                         <img src={laptap} className="img-fluid"/>
                                     </di>
                                </div>
                                <div className="col-lg-6">
                                      <div className="title">
                                          <h4>Our working method is standardized, with key components given paramount importance</h4>
                                     </div>
                                     <div className="p_1">
                                        <p>Every great software begins with an humble idea. At this stage we sit with you to 
                                            help you clarify your requirements and brainstorm solutions that are feasible and 
                                            innovative in their approach.
                                        </p>
                                        <p>Based on the initial brainstorming session, we then move on to the mockup phase where we
                                           deliver a mockup that helps you visualize the end product and/ or make any modifications if as
                                           such needed.
                                         </p>
                                         <p>Only after required changes and based on your feedback, we enter into product development 
                                            stage that gives shape to your vision and gives a visible form.
                                        </p>
                                     </div>
                                </div>
                         </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Choosening;