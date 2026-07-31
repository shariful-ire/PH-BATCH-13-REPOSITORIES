import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="navbar bg-white shadow-sm sticky top-0 z-50 px-5">

      {/* Logo */}
      <div className="navbar-start">
        <a
          href="#home"
          className="flex items-center gap-2 font-bold text-xl"
        >
          <img
            className="w-10"
            src={logo}
            alt="AI Hub Logo"
          />

          <span>
            AI Hub
          </span>
        </a>
      </div>


      {/* Navigation */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-8 px-1 text-lg">

          <li>
            <a href="#home">
              Home
            </a>
          </li>

          <li>
            <a href="#about">
              About
            </a>
          </li>

          <li>
            <a href="#services">
              Services
            </a>
          </li>

          <li>
            <a href="#contact">
              Contact
            </a>
          </li>

        </ul>
      </div>


      {/* Button */}
      <div className="navbar-end">

        <a
          href="#contact"
          className="btn bg-red-500 hover:bg-red-600 rounded-full text-white border-none"
        >
          Get in Touch
        </a>

      </div>

    </div>
  );
};

export default NavBar;