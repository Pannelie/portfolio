import React from "react";
import "./CircleNav.css";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope, FaSeedling } from "react-icons/fa";

const navItems = [
  { icon: <FaHome />, link: "#", label: "Hem" },
  { icon: <FaUser />, link: "#about", label: "Om mig" },
  { icon: <FaFolderOpen />, link: "#projects", label: "Projekt" },
  { icon: <FaEnvelope />, link: "#contact", label: "Kontakt" },
  { icon: <FaSeedling />, link: "#game", label: "Game" },
];

export default function CircleNav() {
  return (
    <div className="circle-nav">
      {navItems.map((item, index) => (
        <a key={index} href={item.link} className="circle-nav-item" title={item.label}>
          {item.icon}
        </a>
      ))}
    </div>
  );
}
