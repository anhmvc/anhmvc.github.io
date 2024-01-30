import React from "react";
import "./work.css";

import { Card } from "../../components";

export default function Work() {
  return (
    <div className="page-container">
      <h1 className="title">work</h1>
      <Card
        title="Royce Hall Simulator"
        subtitle="Computer Graphics, 3D Modeling"
        tech={["Javascript", "three.js", "Blender"]}
        backgroundColor="Purple"
        links={["github", "figma"]}
      />
    </div>
  );
}
