import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faInstagram,
  faCodepen,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { blue } from "color-name"
import { rhythm } from "../utils/typography"

const SocialIcons = () => (
  <div className="socialIcons">
    <h3>Contact me</h3>
    <hr />
    <div
      className="icons"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: rhythm(2.5),
      }}
    >
      <a
        href="https://www.linkedin.com/in/abhinav-mishra-78228a119/"
        target="_blank"
        style={{ boxShadow: "0 0 0 0 " }}
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size="3x"
          style={{ color: "blue" }}
        />
      </a>

      <a
        href="https://github.com/abhinav-m"
        target="_blank"
        style={{ boxShadow: "0 0 0 0 " }}
      >
        <FontAwesomeIcon icon={faGithub} size="3x" style={{ color: "black" }} />
      </a>

      <a
        href="https://codepen.io/abhinavthinktank/"
        style={{ boxShadow: "0 0 0 0 " }}
        target="_blank"
      >
        <FontAwesomeIcon
          icon={faCodepen}
          size="3x"
          style={{ color: "black" }}
        />
      </a>

      <a
        href="https://instagram.com/abhinav_m93"
        style={{ boxShadow: "0 0 0 0 " }}
        target="_blank"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          size="3x"
          style={{ color: "red" }}
        />
      </a>
    </div>
    <p>You can also email me at abhinav_m@hotmail.com</p>
  </div>
)

export default SocialIcons
