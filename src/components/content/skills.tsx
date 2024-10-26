import ProgressBar from "@ramonak/react-progress-bar";

export default function Skills() {
  return (
    <>
      <div className="arlo_tm_section" id="skills">
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Skills</h3>
              <span>What I have gained</span>
            </div>
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Frontend</h4>
                </div>
                <ul>
                  <li>HTML, CSS, SCSS</li>
                  <li>
                    Programming Languages:&nbsp;
                    <span>JavaScript, TypeScript</span>
                  </li>
                  <li>
                    Libraries: &nbsp;
                    <span>Bootstrap, ANTD, jQuerry</span>
                  </li>
                  <li>
                    Frameworks:&nbsp;
                    <span>ReactJS, VueJS</span>
                  </li>
                </ul>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div
                    className="arlo_tm_progress_wrap"
                    data-size="small"
                    data-round="c"
                    data-strip="off"
                  >
                    <div
                      className="arlo_tm_progress"
                      data-value="95"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">HTML/CSS/SCSS/JavaScript</span>
                        <span className="number">95%</span>
                      </span>
                      <ProgressBar
                        completed={95}
                        bgColor="#333"
                        height="8px"
                        isLabelVisible={false}
                      />
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="95"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">TypeScript</span>
                        <span className="number">60%</span>
                      </span>
                      <ProgressBar
                        completed={60}
                        bgColor="#333"
                        height="8px"
                        isLabelVisible={false}
                      />
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="95"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">ReactJS</span>
                        <span className="number">75%</span>
                      </span>
                      <ProgressBar
                        completed={75}
                        bgColor="#333"
                        height="8px"
                        isLabelVisible={false}
                      />
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="95"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">VueJS</span>
                        <span className="number">50%</span>
                      </span>
                      <ProgressBar
                        completed={50}
                        bgColor="#333"
                        height="8px"
                        isLabelVisible={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Backend</h4>
                </div>
                <ul>
                  <li>
                    Programming Languages:&nbsp;
                    <span>JavaScript, TypeScript, Java</span>
                  </li>
                  <li>
                    Frameworks:&nbsp;
                    <span>Express, NestJS, Spring</span>
                  </li>
                  <li>
                    Database:&nbsp;
                    <span>MongoDB, MySQL</span>
                  </li>
                </ul>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div
                    className="arlo_tm_progress_wrap"
                    data-size="small"
                    data-round="c"
                    data-strip="off"
                  >
                    <div
                      className="arlo_tm_progress"
                      data-value="95"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">Express</span>
                        <span className="number">80%</span>
                      </span>
                      <ProgressBar
                        completed={80}
                        bgColor="#333"
                        height="8px"
                        isLabelVisible={false}
                      />
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="95"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">NestJS</span>
                        <span className="number">60%</span>
                      </span>
                      <ProgressBar
                        completed={60}
                        bgColor="#333"
                        height="8px"
                        isLabelVisible={false}
                      />
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="95"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">Java Spring</span>
                        <span className="number">60%</span>
                      </span>
                      <ProgressBar
                        completed={60}
                        bgColor="#333"
                        height="8px"
                        isLabelVisible={false}
                      />
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="95"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">Database MongoDB/MySQL</span>
                        <span className="number">60%</span>
                      </span>
                      <ProgressBar
                        completed={60}
                        bgColor="#333"
                        height="8px"
                        isLabelVisible={false}
                      />
                    </div>
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
