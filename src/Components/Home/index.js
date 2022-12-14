import React from "react";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Typed from "react-typed";
import { Button } from "@mui/material";

const photo = require("../../Images/profile_photo.JPG");
const resume = require("../../Images/Michael Varga Resume 2023.pdf");

const Home = () => {
  return (
    <div className="fluid-container min-vh-100">
      <div className="row">
        <div className="bg-left col-md-8 min-vh-100 d-flex flex-column justify-content-center ps-5">
          <h6 className="ps-5">
            <span role="img">{String.fromCodePoint(0x1f44b)}</span> Hi, my name
            is
          </h6>
          <h1 className="ps-5">
            <span>Mike Varga</span>.
          </h1>
          <div className="animated-typing ps-5">
            <Typed
              strings={[
                "Full Stack Software Developer",
                "Mobile Developer",
                "Web Developer",
              ]}
              typeSpeed={75}
              backSpeed={50}
              loop
            />
          </div>
          <p className="w-75 ps-5 mt-5 mb-5">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences.
          </p>
          <Button
            variant="outlined"
            className="p-2 ms-5"
            href={resume}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#caff8a",
              borderColor: "#caff8a",
              maxWidth: "250px",
            }}
          >
            Check out my resume!
          </Button>
        </div>
        <div className="bg-right col-md-4 min-vh-100 d-flex align-items-center">
          <img src={photo} className="profile-photo" alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
