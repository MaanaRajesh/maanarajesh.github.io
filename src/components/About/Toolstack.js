import React from "react";
import { Col, Row } from "react-bootstrap";

// Inline-safe SVGs
import { ReactComponent as VsCodeIcon } from "../../Assets/TechIcons/vscode.svg";
import { ReactComponent as DockerIcon } from "../../Assets/TechIcons/Docker.svg";

// PNGs
import ubuntuPng from "../../Assets/TechIcons/ubuntu.png";
import githubPng from "../../Assets/TechIcons/github.png";
import condaPng from "../../Assets/TechIcons/conda.png";
import sshPng from "../../Assets/TechIcons/ssh.png";
import gazeboPng from "../../Assets/TechIcons/gazebo.png";
import isaacPng from "../../Assets/TechIcons/Isaac.png";
import rvizPng from "../../Assets/TechIcons/rviz.png";

function Toolstack() {
  const items = [
    { label: "Ubuntu", node: <img src={ubuntuPng} alt="Ubuntu" className="tech-icon-img" /> },
    { label: "VS Code", node: <VsCodeIcon className="tech-icon-svg" aria-label="VS Code" /> },
    { label: "GitHub", node: <img src={githubPng} alt="GitHub" className="tech-icon-img" /> },
    { label: "Docker", node: <DockerIcon className="tech-icon-svg" aria-label="Docker" /> },
    { label: "Conda", node: <img src={condaPng} alt="Conda" className="tech-icon-img" /> },
    { label: "SSH", node: <img src={sshPng} alt="SSH" className="tech-icon-img" /> },
    { label: "Gazebo", node: <img src={gazeboPng} alt="Gazebo" className="tech-icon-img" /> },
    { label: "Isaac Sim", node: <img src={isaacPng} alt="Isaac Sim" className="tech-icon-img" /> },
    { label: "rviz", node: <img src={rvizPng} alt="rviz" className="tech-icon-img" /> },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {items.map((item) => (
        <Col key={item.label} xs={6} md={3} className="tech-icons">
          {item.node}
          <div className="tech-icons-text">{item.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;