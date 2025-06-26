import { useState, useRef } from "react";

function NavBar({ toggleSidebar }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);

  const handleSearchClick = () => {
    setSearchOpen(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <div className="h-16 bg-[var(--color-primary)] flex justify-between items-center px-6 relative z-50">
      <div className="flex items-center gap-4 relative">
        <img
          src="/icons/menu.svg"
          className="h-10 w-10 cursor-pointer"
          alt="menu"
          onClick={toggleSidebar}
        />

        <div
          className={`relative flex items-center transition-all duration-300 ease-in-out ${
            searchOpen ? "w-72" : "w-10"
          }`}
        >
          <img
            src="/icons/search.svg"
            alt="search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
            onClick={handleSearchClick}
          />
          <input
            type="text"
            ref={inputRef}
            placeholder="Search..."
            className={`h-9 pl-10 pr-4 text-sm rounded-3xl border-2 border-[var(--color-accent)] bg-white transition-all duration-300 ease-in-out w-full ${
              searchOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onBlur={() => setSearchOpen(false)}
          />
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img src="/icons/logo.svg" className="h-11 cursor-pointer" alt="logo" />
      </div>

      <div>
        <img
          src="/icons/account.svg"
          className="h-10 w-10 cursor-pointer"
          alt="account"
        />
      </div>
    </div>
  );
}

export default NavBar;
