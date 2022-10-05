import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="ravinishadcoder"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
      <img
        style={{ width:"80%",marginTop:"10px"}}
        align="left"
        src="https://bhatteryash.github.io/images/stats.png"
        alt="ravinishadcoder"
      />
    </Row>
  );
}

export default Github;
