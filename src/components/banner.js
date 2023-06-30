//import Arrow from "../assets/img/arrow2.svg";
import Banner1 from "../assets/img/header-img.svg";
import Typed from "typed.js";
import {useRef , useEffect} from "react"
//import {Cursor} from 'react-bootstrap-icons'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner= ()=>{
            
    const el = useRef(null);
    useEffect(()=>{
        const typed = new Typed(el.current ,{ 
            strings: ["Front-end Web Development" , 'Back-end Web Development' , "Full-stack Web Development"],
            startDelay:500,
            typeSpeed:150,
            backSpeed:150,
            backDelay:200,
            showCursor:false,
            loop:true,

        });
        return ()=>{
            typed.destroy()
        };
    },[]);

        
        
    return (
        <div id="home" className="banner bg-info">

            <div className="container ">
                <div className="row">
                    <div className="part1 col-md-7 col-sm-12">
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <h2 className="title2 mt-2">Welcome to my Portfolio</h2>
                                <h1 className="title1 fw-bolder mt-2">Hi! I'm Asmaa Mostafa <span ref={el}></span></h1>
                                <p className="mt-2 par1">Hello  Everyone. I have 5 years in Web Development</p>
                                <button className="mt-2 fw-bolder d-flex fs-4 text-light">Let's Connect <span className="arrow"><ArrowRightCircle size={25} /></span></button>

                            </div>}
                        </TrackVisibility>
                        
                    </div>
                <div className="col-md-5 col-sm-12">

                <TrackVisibility>
                {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <img id ="banner-img" src={Banner1} alt="Header Img"/>
                    </div>

                
                }
                
                </TrackVisibility>
                </div>


                </div>


            </div>

        </div>
    )
}