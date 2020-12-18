import React from "react";

const About = (props) => {
  const { data } = props;
  const { name, bio, phone, email, resumeDownload, address, image } = data;
  const { city, state,               zip } = address;
  const profilepic = `images/${image}`;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            height="120"
            width="120"
            alt="Anuj Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {city}
                  {state},{zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download" style={{ display: "none" }}>
              <p>
                <a
                  href={resumeDownload}
                  className="button"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-download" />
                  Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
