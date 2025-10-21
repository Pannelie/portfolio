import React from "react";
import "./cvItem.css";

export default function CvItem({ title, subtitle, years }) {
  return (
    <li className="cv-item">
      {title && <span className="cv-item__title">{title}</span>}
      {subtitle && <span className="cv-item__subtitle">{subtitle}</span>}
      {years && <span className="cv-item__years">{years}</span>}
    </li>
  );
}
