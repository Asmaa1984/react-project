import { Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {

    
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

    return (
        <section id="project">
            <div className="container">
                    <div className="textProject">
                        <h2>Projects</h2>
                        
                        <p className="mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills nav-justified mb-4 mx-auto justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item >
                          <Nav.Link eventKey="first">Projects 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="second">
                          <Nav.Link eventKey="second">Projects 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Projects 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className="">
                        <Tab.Pane eventKey="first">
                          <Row>
                            <h3 className="text-center mb-3" ><span className="badge bg-light text-dark p-3">Projects for Front Web development</span></h3>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={ index }
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                           <h3 className="text-center mb-3" ><span className="badge bg-light text-dark p-3">Projects for Back-end Web development</span></h3>
                          <p className="tabText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <h3 className="text-center mb-3" ><span className="badge bg-light text-dark p-3">Projects for Full-stack Web development</span></h3>
                          <p className="tabText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                        </Tab.Pane>
                      </Tab.Content>
                  
                    </Tab.Container>
                    

                    
                    
                </div>

            </section>
            )
    }
