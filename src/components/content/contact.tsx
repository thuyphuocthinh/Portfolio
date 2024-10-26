import React from "react";

export default function Contact() {
  return (
    <>
      <div className="arlo_tm_section" id="contact">
        <div className="container">
          <div className="arlo_tm_title_holder contact">
            <h3>Contact Me</h3>
            <span>Get in touch with me</span>
          </div>
        </div>
        <div className="arlo_tm_footer_contact_wrapper_all">
          <div className="arlo_tm_contact_wrap_all" style={{marginBottom: "80px"}}>
            <div className="container">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder contact">
                  <h4>Get in Touch</h4>
                </div>
                <div className="short_info_wrap">
                  <ul>
                    <li>
                      <p>
                        <label>Address:</label>
                        <span>Danang, Vietnam</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <label>Email:</label>
                        <span>
                          <a href="mailto:thuyphuocthinhtpt1@gmail.com">
                            thuyphuocthinhtpt1@gmail.com
                          </a>
                        </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <label>Website:</label>
                        <span>
                          <a
                            href="https://github.com/thuyphuocthinh"
                            target="_blank"
                          >
                            https://github.com/thuyphuocthinh
                          </a>
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="arlo_tm_footer_wrap">
            <div className="container">
              <p>&copy; Copyright 2024. All Rights are Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
