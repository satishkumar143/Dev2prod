import React, { Fragment } from "react";
import './Question.css'
import { AiOutlineMinus } from "react-icons/ai";

class Question extends React.Component{
    constructor(){
        super();
        this.state={
            condition:false,
            condition1:false,
            condition2:false,
            condition3:false,
            condition4:false,
            // status:true,
            status_1:false,
            change:"+"
        }
    }
    pluse=()=>{
        //    this.state.change="-";
        //    console.log(this.state.change);
    }
    change=()=>{
         this.state.condition=!(this.state.condition);
         this.setState({...this.state.condition})
         console.log(this.state.condition)
    }
    change_1=()=>{
        this.state.condition1=!(this.state.condition1);
        this.setState({...this.state.condition1})
   }
   change_2=()=>{
    this.state.condition2=!(this.state.condition2);
    this.setState({...this.state.condition2})
}
change_3=()=>{
    this.state.condition3=!(this.state.condition3);
    this.setState({...this.state.condition3})
}
change_4=()=>{
    this.state.condition4=!(this.state.condition4);
    this.setState({...this.state.condition4})
}



change_5=()=>{
    this.state.status_1=!(this.state.status_1);
    this.setState({...this.state.status_1});
    console.log(this.state.status_1)
}

      
    render(){
        return(
            <Fragment>
                <div className="Question">
                   <div className="Question_1">
                        <div className="Question_2">
                            <h3>Frequently Asked Questions</h3>
                             <p>Get answers to your all doubts. For more information feel free to get in touch.</p>
                        </div>
                            <div className="Answer">
                               <h6 className={this.state.condition ? "change_12" : ""} onClick={()=>{this.change()}}>How can you help me with?
                               {
                                  this.state.condition ? <span><AiOutlineMinus fontSize="2rem"/></span>:<span>+</span>
                               }
                               </h6>
                              {
                                  this.state.condition &&
                                  <p> We at Dev2Prod help individuals, startups, and large enterprises with custom-built 
                                      software applications. Our teams deal with UX/ UI design all the way to Artificial 
                                      Intelligence software solutions.
                                  </p>
                              }
                            <hr/>   

                            <h6 onClick={()=>{this.change_1()}} className={this.state.condition1 ? "change_12" : ""}>How do I create a product with you?
                               {
                                  this.state.condition1 ? <span><AiOutlineMinus fontSize="2rem"/></span>:<span>+</span>
                               }
                            </h6>
                              {
                                  this.state.condition1 &&
                                  <p> Please find our contact us form on the page. Please fill in everything you dream of, 
                                      and we would get in touch with you.
                                  </p>
                              }
                            <hr/>

                            <h6 onClick={()=>{this.change_2()}} className={this.state.condition2 ? "change_12" : ""}>Should I create a mobile app or a web app?
                              {
                                  this.state.condition2 ? <span><AiOutlineMinus fontSize="2rem"/></span>:<span>+</span>
                               }
                            </h6>
                              {
                                  this.state.condition2 &&
                                  <p>Honestly, the answer varies based on the project. We advise you to be open to options. 
                                      We will help you with the brainstorming sessions as well. For this, do get in touch.
                                  </p>
                              }
                           <hr/> 
                            
                           <h6 onClick={()=>{this.change_3()}} className={this.state.condition3 ? "change_12" : ""}>Do I need to be tech-savvy to work with you?
                               {
                                  this.state.condition3 ? <span><AiOutlineMinus fontSize="2rem"/></span>:<span>+</span>
                               }
                           </h6>
                              {
                                  this.state.condition3 &&
                                  <p>The answer is a big, fat NO. Most of our customers come from a non-technical background, 
                                      and there is absolutely no necessity to know the ins and outs of technology to get started.
                                  </p>
                              }
                           <hr/> 

                           <h6 className={this.state.condition4 ? "change_12" : ""} onClick={()=>{this.change_4()}}>How long does it take to build an application?
                               {
                                  this.state.condition4 ? <span><AiOutlineMinus fontSize="2rem"/></span>:<span>+</span>
                               }
                            </h6>
                              {
                                  this.state.condition4 &&
                                  <p>The answer to this varies with the size and the complexity of the project. We would send you a 
                                      quotation and the expected time frame before initiating any project. This will precisely answer 
                                      all your needs.
                                  </p>
                              }
                           <hr/> 
              

                        </div>
                   </div>
                </div>
            </Fragment>
        )
    }
}
export default Question;