import { BsArrowRight } from "react-icons/bs";
import { IoLogoVue } from "react-icons/io5";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiSpring, SiNestjs } from "react-icons/si";
export default function Projects() {
  const projects = [
    {
      project_name: "Google Keep Clone",
      project_image: <IoLogoVue size={50} color={"green"} />,
      project_description: "Technology: Vue3, TypeScript, Express, MongoDB",
      project_link: "https://github.com/thuyphuocthinh/google-keep-clone",
    },
    {
      project_name: "Booking Movie Ticket",
      project_image: <FaReact size={50} color={"#2bebfd"} />,
      project_description: "Technology: ReactJS, ANTD",
      project_link: "https://github.com/thuyphuocthinh/booking-movie-ticket",
    },
    {
      project_name: "Music Webiste",
      project_image: <FaNodeJs size={50} color={"green"} />,
      project_description: "Technology: HTML, CSS, JS, Express, MongoDB",
      project_link: "https://github.com/thuyphuocthinh/TPT-entertainment",
    },
    {
      project_name: "Booking Care Clone",
      project_image: <FaNodeJs size={50} color={"green"} />,
      project_description: "Technology: ReactJS, Express, MySQL",
      project_link: "https://github.com/thuyphuocthinh/booking-care",
    },
    {
      project_name: "LaptopShop",
      project_image: <SiSpring size={50} color={"green"} />,
      project_description: "Technology: HTML, CSS, JS, Java Spring MVC, MySQL",
      project_link: "https://github.com/thuyphuocthinh/java-backend-hoidanit",
    },
    {
      project_name: "IT-Job",
      project_image: <SiNestjs size={50} color={"red"} />,
      project_description: "Technology: Vue3, TypeScript, NestJS, MongoDB",
      project_link: "https://github.com/thuyphuocthinh/nestjs-jobweb",
    },
  ];

  return (
    <>
      <div className="arlo_tm_section" id="projects">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Projects</h3>
              <span>What I have done</span>
            </div>
            <div className="list_wrap">
              <ul>
                {projects?.map((project) => {
                  return (
                    <li>
                      <div className="inner">
                        <div className="icon">{project.project_image}</div>
                        <div className="title_service">
                          <h3>{project.project_name}</h3>
                        </div>
                        <div>{project.project_description}</div>
                        <div style={{ marginTop: "10px" }}>
                          <a
                            href={project.project_link}
                            style={{ textDecoration: "none", color: "blue" }}
                            target="_blank"
                          >
                            <BsArrowRight />
                            <span style={{ marginLeft: "5px" }}>GitHub</span>
                          </a>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
