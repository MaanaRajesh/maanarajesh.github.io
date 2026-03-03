import React from "react";
import { Col, Row } from "react-bootstrap";

// Inline-safe SVGs
import { ReactComponent as CppIcon } from "../../Assets/TechIcons/C++.svg";
import { ReactComponent as PythonIcon } from "../../Assets/TechIcons/Python.svg";
import { ReactComponent as DockerIcon } from "../../Assets/TechIcons/Docker.svg";
import { ReactComponent as GitIcon } from "../../Assets/TechIcons/Git.svg";

// SVGs that break SVGR -> import as URL + render as <img>
import ros2Svg from "../../Assets/TechIcons/ros2.svg";
import mujocoSvg from "../../Assets/TechIcons/mujoco.svg";

// PNGs
import pytorchPng from "../../Assets/TechIcons/pytorch.png";
import opencvPng from "../../Assets/TechIcons/opencv.png";
import numpyPng from "../../Assets/TechIcons/numpy.png";
import linuxPng from "../../Assets/TechIcons/linux.png";
import isaacPng from "../../Assets/TechIcons/Isaac.png";
import robosuitePng from "../../Assets/TechIcons/robosuite.png";
import mlflowPng from "../../Assets/TechIcons/mlflow.png";

function Techstack() {
  const items = [
    { label: "Python", node: <PythonIcon className="tech-icon-svg" aria-label="Python" /> },
    { label: "C++", node: <CppIcon className="tech-icon-svg" aria-label="C++" /> },
    { label: "PyTorch", node: <img src={pytorchPng} alt="PyTorch" className="tech-icon-img" /> },
    { label: "ROS 2", node: <img src={ros2Svg} alt="ROS 2" className="tech-icon-img" /> },

    { label: "OpenCV", node: <img src={opencvPng} alt="OpenCV" className="tech-icon-img" /> },
    { label: "NumPy", node: <img src={numpyPng} alt="NumPy" className="tech-icon-img" /> },
    { label: "Linux", node: <img src={linuxPng} alt="Linux" className="tech-icon-img" /> },
    { label: "Docker", node: <DockerIcon className="tech-icon-svg" aria-label="Docker" /> },
    { label: "Git", node: <GitIcon className="tech-icon-svg" aria-label="Git" /> },

    { label: "Isaac Sim", node: <img src={isaacPng} alt="Isaac Sim" className="tech-icon-img" /> },
    { label: "MuJoCo", node: <img src={mujocoSvg} alt="MuJoCo" className="tech-icon-img" /> },
    { label: "Robosuite", node: <img src={robosuitePng} alt="Robosuite" className="tech-icon-img" /> },
    { label: "MLflow", node: <img src={mlflowPng} alt="MLflow" className="tech-icon-img" /> },
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

export default Techstack;