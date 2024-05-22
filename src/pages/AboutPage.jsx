import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>this is a react app to leave feedback about services</p>
        <p>version: 1.0.0</p>
        <Link to="/">
          <p> Back to Home</p>
        </Link>
      </div>
    </Card>
  );
}

export default AboutPage;
