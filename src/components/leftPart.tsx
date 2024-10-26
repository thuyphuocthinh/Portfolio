import desktopLogo from "@/assets/img/logo/logo.png";
import { useState } from "react";
import { FaGithub, FaFacebook } from "react-icons/fa";

export default function LeftPart() {
  const [active, setActive] = useState("home");
  const handleClickTab = (tab: string): void => {
    setActive(tab);
  };
  return (
    <>
      <div className="arlo_tm_leftpart_wrap">
        <div className="leftpart_inner">
          <div className="logo_wrap">
            <a href="#">
              <img src={desktopLogo} alt="desktop-logo" />
            </a>
          </div>
          <div className="menu_list_wrap">
            <ul className="anchor_nav">
              <li>
                <a
                  href="#home"
                  className={active === "home" ? "active" : ""}
                  onClick={() => handleClickTab("home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={active === "about" ? "active" : ""}
                  onClick={() => handleClickTab("about")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={active === "skills" ? "active" : ""}
                  onClick={() => handleClickTab("skills")}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={active === "projects" ? "active" : ""}
                  onClick={() => handleClickTab("projects")}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={active === "contact" ? "active" : ""}
                  onClick={() => handleClickTab("contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="leftpart_bottom">
            <div className="social_wrap">
              <ul>
                <li>
                  <a href="https://www.facebook.com/chuongthinh.thuy" target="_blank">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/thuyphuocthinh" target="_blank">
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a className="arlo_tm_resize" href="#">
            <i className="xcon-angle-left"></i>
          </a>
        </div>
      </div>
    </>
  );
}
