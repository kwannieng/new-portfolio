import Header from "../components/Header";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () =>{
    return <div>
        <section><Header/></section>
        <h3>Leave Me a Message</h3>
        <form>
            <div className="half left cf">
                <input type="text" id="input-name" placeholder="Name"/>
                <input type="email" id="input-email" placeholder="Email address"/>
                <input type="text" id="input-subject" placeholder="Subject"/>
            </div>
            <div className="half right cf">
                <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
            </div>  
            <input type="submit" value="Submit" id="input-submit"/>
        </form>

        <div>
            <h3>Or if you would like to connect by:</h3>
            <h3><a href="https://www.linkedin.com/" target="blank">Linkedin</a></h3>
            <h3><a href="https://github.com/kwannieng" target="blank">GitHub</a></h3>
            <h3><a href ="mailto: kwannienng@gmail.com" target="blank">Email</a></h3>
            
        </div>

        <div>
        <h3>Please also download my CV <a href="https://github.com/kwannieng/my-portfolio/raw/main/asset/KwannieCV.pdf" className="CV"> here </a> for further details.</h3>
        </div>
    </div>
}

export default Contact;