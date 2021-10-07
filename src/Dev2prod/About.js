import React,{Fragment} from 'react';
import './About.css'
import second from './second.jpeg'
import { FiCheckCircle } from "react-icons/fi";
// import Servicesk from './Servicesk'

class About extends React.Component{
    constructor(){
        super();
    }
render(){
    return(
        <Fragment>
          <div className="Aboutpage">
              <div className="row about_1">

                   <div className="col-sm-4 about_img">
                       <img src={second} className="img-fluid"/>
                       {/* <Servicesk/> */}
                    </div>

                   <div className="col-sm-8 About_left">
                       <h2>About Us</h2>
                        <div className="cls_1">
                        <h3>
                            Exploration and inquisitiveness can take you far. It is only after you meet real
                            experts you start your journey. Meet the architects of future.
                        </h3>
                         </div>
                           <p>
                            Dev2Prod soft solutions is a global, multinational team of technology experts that 
                            all have a single goal in mind – achieve exceptional relationships with our 
                            customers. we offer a range of services to suit your needs. For us no project is
                            “big” or “small” for we enjoy challenges at every level.
                             </p>
                             <p>
                               Our solutions are based on the latest technologies. By continuous
                               exchange of knowledge and experiences with clients, dev2prod 
                               recognises the desires and needs, and together with them -
                               we develop projects that bring a competitive advantage in 
                               the market. In this way, the satisfaction is mutual, and we 
                               grow together with our clients since each project brings new 
                               knowledge, new ideas, and new skills.
                             </p>

                             <ul>
                                 <li><i><FiCheckCircle/></i>Design global solutions that meet international standards</li>
                                 <li><i><FiCheckCircle/></i>Software development that follows agile development practices</li>
                                 <li><i><FiCheckCircle/></i>Deploying cloud based solutions that turns vision into reality</li>
                             </ul>
                        </div>
                   </div>
             </div>
        </Fragment>
    )
}
}
export default About;