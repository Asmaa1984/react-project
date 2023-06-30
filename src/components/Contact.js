import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {


  return (
    <section className="w-100 " id="connect">
        <div className="container ">
          <TrackVisibility>
          {({isVisible})=>
            <div className="row mt-auto">
            <div className="col-lg-4 col-md-12 my-auto">
                <img src={contactImg} alt="contactImg" className={isVisible ? "animate__animated animate__zoomIn" :""}/>

            </div>
            <div className=" part2 col-lg-8 col-md-12 my-auto">
                <form>
                    <h2 className="text-center mt-5">Get In Touch</h2>
                    <div className="row m-2">
                        <div className="col-lg-6 col-md-12">
                            <input className="form-control-lg p-3" type="text" placeholder="first name" />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <input className="form-control-lg p-3" type="text" placeholder="last name" />
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col-lg-6 col-md-12">
                            <input className="form-control-lg p-3" type="email" placeholder="Email Address" />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <input className="form-control-lg p-3" type="phone" placeholder="Phone No." />
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col-12">
                            <textarea className="form-control p-3" placeholder="Message" rows="8"></textarea>
                        </div>
                    </div>
                    <div className="row m-2 justify-content-center">
                        <div className="col-3">
                        <button type="submit" className="btn btn-light btn-lg"><span>Send</span></button>


                        </div>

                    </div>
                        



                </form>
            </div>
            </div>


          }
          
          </TrackVisibility>
          <div className="letter p-4 bg-light text-dark">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-12 m-lg-3 m-2">
                <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>

              </div>
              <div className=" form-group col-lg-6 col-md-12 row align-items-center">
                <div className="col-11"><input className="form-control" type="email" placeholder="Email Address" /></div>
                <div className="col-1"><button className="btn" type="submit">Submit</button></div>
              </div>


            </div>


          </div>
            

        </div>
    </section>
      
      
      
  )
}
