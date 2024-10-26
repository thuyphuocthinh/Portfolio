import { TypeAnimation } from "react-type-animation";
import tptavatar from "@/assets/img/about/avatar.png";
import cv from "@/assets/CV-Thuy-Phuoc-Thinh.pdf";

export default function About() {
  return (
    <>
      <div className="arlo_tm_section relative" id="about">
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span>Main informations about me</span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div
                    className="about_image_wrap parallax"
                    data-relative-input="true"
                  >
                    <div className="image layer" data-depth="0.1">
                      <img src={tptavatar} alt="550x640" />
                      <div className="inner" data-img-url={tptavatar}></div>
                    </div>
                    <div className="border layer" data-depth="0.2">
                      <img src="img/about/550x640.jpg" alt="550x640" />
                      <div className="inner"></div>
                    </div>
                  </div>
                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>
                      I'm Thủy Phước Thịnh and a&nbsp;
                      <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          "Web developer",
                          2000, // wait 1s before replacing "Mice" with "Hamsters"
                          "Designer",
                          2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: "1em", display: "inline-block" }}
                        repeat={Infinity}
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      />
                    </h4>
                  </div>
                  <div className="definition">
                    <p>
                      Hi! My name is <strong>Thủy Phước Thịnh</strong>. I am a
                      Web Developer, and I'm very passionate and dedicated to my
                      work. My goal is to become a fullstack developer who is
                      able to build complex system.
                    </p>
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span>
                          <label>Birthday:</label> 09.12.2003
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Gender:</label> Male
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Study:</label> Duy Tan University
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Major:</label> Computer Science
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Degree:</label> Bachelor
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Github:</label>
                          <a
                            href="https://github.com/thuyphuocthinh"
                            target="_blank"
                          >
                            @ThuyPhuocThinh
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href={cv} download>
                          <span>Download CV</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
