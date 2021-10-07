import React,{Fragment} from "react";
import './Footer.css'
import dev from "./dev.jpeg"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state= {
             text:'',
             name:'',
             password:'',
             cobfirmpassowrd:''
        }
    }

  
    textValue=(e)=>{
      this.setState({text:e.target.value});
      //console.log(this.state.text);
     
    }
    satish=(e)=>{
        e.preventDefault();
        let text_1=this.state.text;
      
        console.log(this.state)

       
       if(text_1.length<4){
         
           document.getElementById('locationtext').innerHTML="Please enter adt least 4 chars";
          return false;
       }
       else{
           return true;
       }
      // return false;
    }

// const { text,name,password,cobfirmpassowrd}=this.state

    render(){
        return(
            <Fragment>
                   <div className="Footer">
                       <div className="Footer_1">
                                 <div className="row">
                                     <div className="col-lg-4">
                                            <div className="footer_img">
                                            <img src={dev} className="img-fluid"/>
                                            <p>Dev2Prod is an international team of technological pundits that helps startups and small 
                                                businesses build and deploy modern-day technological marvels. Our experts come with decades 
                                                of experience and deal with cutting-edge advanced solutions like Machine learning and Artificial Intelligence.
                                            </p>
                                            </div>
                                     </div>

                                     <div className="col-lg-4">
                                         <div className="spam_a">
                                                <h5>USEFUL LINKS</h5>
                                                 <ul>
                                                      <li><a href="#">HOME</a></li>
                                                      <li><a href="#">About us</a></li>
                                                      <li><a href="#">Services</a></li>
                                                      <li><a href="#">Terms of service</a></li>
                                                      <li><a href="#">Privacy policy</a></li>
                                                 </ul>
                                                 <h4>CONTACT US</h4>
                                                <p>Plot.No: 97, Beside CGR international School
                                                    Ayyappa Society Main Rd, Madhapur, Hyderabad 500081
                                                    Telangana, India<br/>
                                                    <b> Email:</b> admin@dev2prod.com
                                                    </p>
                                               <div className="footer_icons">
                                               <ul>
                                                    <li><a href="#"><i style={{color:"white"}}><FaTwitter/></i></a></li>
                                                    <li><a href="#"><i style={{color:"white"}}><FaFacebookF/></i></a></li>
                                                    <li><a href="#"><i style={{color:"white"}}><FaInstagram/></i></a></li>
                                                    <li><a href="#"><i style={{color:"white"}}><FaLinkedinIn/></i></a></li>

                                                </ul>
                                               </div>
                                         </div>
                                     </div> 

                                     <div className="col-lg-4">
                                             <div className="form_1">
                                                  <h5>SEND US A MESSAGE</h5>
 
                                             <form action="" method="" role="form"  onSubmit={this.satish}>
                                            <div className="form-group">
                                                <input type="text" name="name" value={this.state.text} onChange={this.textValue} className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                 <span id='locationtext' style={{color:"red"}} ></span> 
                                                <div className="validation"></div>
                                            </div>

                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                                <div className="validation"></div>
                                            </div>

                                            <div className="form-group">
                                                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                <div className="validation"></div>
                                            </div>

                                            <div className="form-group">
                                                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                                <div className="validation"></div>
                                            </div>

                                            {/* <div id="sendmessage">Your message has been sent. Thank you!</div> */}
                                            <div id="errormessage"></div>
                                            <div className="text-center"><button type="submit" title="Send Message">Send Message</button>
                                            </div>

                                        </form>
                                    </div>
                                     </div>    
                                 </div>
                        </div>  
                     
                   </div>
                  

                  <div className="copyRight">
                    <p> &copy;Copyright <strong> Dev2prod Soft Solutions. </strong> All Rights Reserved</p>
                  </div>
            </Fragment>
        )
    }
}
export default Footer;