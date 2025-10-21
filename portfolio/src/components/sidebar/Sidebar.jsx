import React, { useState } from "react";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from "react-icons/fa";
import "./Sidebar.css";

export default function Sidebar() {
  const [hover, setHover] = useState(false);

  const menuItems = [
    { icon: <FaHome />, text: "Hem", link: "#home" },
    { icon: <FaUser />, text: "Om mig", link: "#about" },
    { icon: <FaFolderOpen />, text: "Projekt", link: "#projects" },
    { icon: <FaEnvelope />, text: "Kontakt", link: "#contact" },
  ];

  return (
    <nav className={`sidebar ${hover ? "expanded" : ""}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.link}>
              {item.icon} <span>{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
