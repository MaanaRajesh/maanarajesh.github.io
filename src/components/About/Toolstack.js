import React from "react";
import { Col, Row } from "react-bootstrap";

// Tools / environment
import ubuntuPng from "../../Assets/TechIcons/ubuntu.png";
import vscodePng from "../../Assets/TechIcons/vscode.png";
import githubPng from "../../Assets/TechIcons/github.png";
import condaPng from "../../Assets/TechIcons/conda.png";
import sshPng from "../../Assets/TechIcons/ssh.png";

const ITEMS = [
  { label: "Ubuntu", src: ubuntuPng },
  { label: "VS Code", src: vscodePng },
  { label: "GitHub", src: githubPng },
  { label: "Conda", src: condaPng },
  { label: "SSH", src: sshPng },
];

export default function Toolstack() {
  return (
    <Row className="stack-grid" style={{ justifyContent: "center", paddingBottom: "35px" }}>
      {ITEMS.map((item) => (
        <Col key={item.label} xs={6} md={3} lg={2} className="tech-icons">
          <img src={item.src} alt={item.label} className="tech-icon-img" />
          <div className="tech-icons-text">{item.label}</div>
        </Col>
      ))}
    </Row>
  );
}