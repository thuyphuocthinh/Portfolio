export default function MobileMenu() {
  return (
    <div>
      <div className="arlo_tm_mobile_header_wrap">
        <div className="main_wrap">
          <div className="logo">
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              TPT
            </a>
          </div>
          <div className="arlo_tm_trigger">
            <div className="hamburger hamburger--collapse-r">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_mobile_menu_wrap">
          <div className="mob_menu">
            <ul className="anchor_nav">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
