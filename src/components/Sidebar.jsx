import { FiChevronDown } from "react-icons/fi";
import './Sidebar.css';

export default function Sidebar({ showSidebar }) {
  const sections = [
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ];

  return (
    <div className={`sidebar ${showSidebar ? "show" : "hide"}`}>
      
      <div className="custom">
        <input type="checkbox" />
        <span>CUSTOMIZABLE</span>
      </div>

      {sections.map((item, index) => (
        <div key={index} className="section">
          <div className="section-header">
            <span>{item}</span>
            <FiChevronDown />
          </div>

          <p className="section-sub">All</p>
        </div>
      ))}
    </div>
  );
}