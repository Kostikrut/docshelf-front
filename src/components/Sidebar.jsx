import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ collapsed }) {
  const location = useLocation();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const currentPath = location.pathname.split("/")[1];
    setSelected(currentPath || "home");
  }, [location]);

  const navLinks = [
    {
      id: "home",
      label: "Home",
      to: "/home",
      icon: "/icons/home.svg",
      iconWhite: "/icons/home-white.svg",
    },
    {
      id: "dashboard",
      label: "Dashboard",
      to: "/dashboard",
      icon: "/icons/dashboard.svg",
      iconWhite: "/icons/dashboard-white.svg",
    },
    {
      id: "reminders",
      label: "Reminders",
      to: "/reminders",
      icon: "/icons/reminders.svg",
      iconWhite: "/icons/reminders-white.svg",
    },
    {
      id: "file-system",
      label: "File System",
      to: "/file-system",
      icon: "/icons/file-system.svg",
      iconWhite: "/icons/file-system-white.svg",
    },
  ];

  const handleLinkClick = (id) => {
    setSelected(id);
    if (window.innerWidth < 768) {
      document.dispatchEvent(new Event("sidebar-close"));
    }
  };

  return (
    <div
      className={`pt-10 bg-[var(--color-primary)] h-full shadow-lg transition-[width] duration-300 ease-in-out ${
        collapsed ? "w-0 overflow-hidden" : "w-65"
      }`}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col items-start w-full pt-6 pl-5">
          {navLinks.map((link) => {
            const isActive = selected === link.id;

            return (
              <Link
                key={link.id}
                to={link.to}
                onClick={() => handleLinkClick(link.id)}
                className={`group flex items-center gap-3 p-4 w-full font-bold hover:bg-[var(--color-accent)] ${
                  isActive
                    ? "bg-[var(--color-accent)] text-white"
                    : "text-[var(--color-text-main)] hover:text-white"
                }`}
              >
                <div className="relative w-7 h-7">
                  <img
                    src={link.icon}
                    alt={link.label}
                    className={`absolute top-0 left-0 w-7 h-7 ${
                      isActive ? "opacity-0" : "group-hover:opacity-0"
                    } transition-opacity duration-0`}
                  />
                  <img
                    src={link.iconWhite}
                    alt={`${link.label} active`}
                    className={`absolute top-0 left-0 w-7 h-7 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    } transition-opacity duration-0`}
                  />
                </div>
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="group flex items-center gap-3 p-4 w-full text-[var(--color-text-main)] hover:bg-[var(--color-accent)] hover:text-white font-bold cursor-pointer">
          <div className="relative w-7 h-7">
            <img
              src="/icons/logout.svg"
              alt="Logout"
              className="absolute top-0 left-0 w-7 h-7 group-hover:opacity-0 transition-opacity duration-0"
            />
            <img
              src="/icons/logout-white.svg"
              alt="Logout active"
              className="absolute top-0 left-0 w-7 h-7 opacity-0 group-hover:opacity-100 transition-opacity duration-0"
            />
          </div>
          Logout
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
