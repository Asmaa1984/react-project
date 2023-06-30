import React from "react";
import Images from '../assets/img/logo.svg';
import Icon1 from "../assets/img/nav-icon1.svg";
import Icon2 from "../assets/img/nav-icon2.svg";
import Icon3 from "../assets/img/nav-icon3.svg" 


export function Footer(){
    return(
        <footer className="fixed-bottom">
            <div className="container-lg">
                <div className="row my-2">
                    <div className="col-3 img-logo my-auto" >
                        <img src={Images} alt="imageLogo" />

                    
                    </div>
                    
                    <div className=" col-9 col-sm-9 footer-text row justify-content-center">
                    <div className="social-icon col-12 d-flex justify-content-center ">
                        <a className="me-2" href="https://www.linkedin.com/"><img src={Icon1} alt="icon" /></a>
                        <a className="me-2" href="https://www.facebook.com/"><img src={Icon2} alt="icon" /></a>
                        <a className="me-2" href="https://www.instagram.com/?hl=en"><img src={Icon3} alt="icon" /></a>
                        
                    </div>
                        <p className="col-12">Copyright © { new Date().getFullYear()} <b>Asmaa Mostafa</b>. All Rights Reserved</p>

                    
                    </div>



                </div>

                
 

           </div>


        </footer>
           
        )
}