import "./Sidebar.css";
import menuItems from "../../data/menuItems";
import { FiLogOut } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar">
      <div className="logo">
        <h2>🏠 PG Manager</h2>
        <p>Property Management</p>
      </div>

      <div className="menu">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`menu-item ${isActive(item.path) ? "active" : ""}`}
              onClick={() => handleNavigation(item.path)}
            >
              <Icon size={20} />
              {item.title}
            </div>
          );
        })}
      </div>

      <div className="bottom">
        <h4>Admin User</h4>
        <p>Owner</p>
        <br />
        <div className="menu-item" onClick={handleLogout}>
          <FiLogOut />
          Logout
        </div>
      </div>
    </div>
  );
}

export default Sidebar;