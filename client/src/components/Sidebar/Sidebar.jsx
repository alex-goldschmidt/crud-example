import { Link } from "react-router-dom";
import "./Sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/authors">All authors</Link>
        </li>
      </ul>
    </div>
  );
};
