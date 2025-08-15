import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      // If we're on the home page, scroll to the section
      scrollToSection(sectionId);
    } else {
      // If we're on another page (like /design), navigate to home with hash
      navigate(`/#${sectionId}`);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    // Handle initial load with hash (e.g., coming from /design to /#projects)
    if (isHomePage && location.hash) {
      const sectionId = location.hash.replace('#', '');
      setTimeout(() => scrollToSection(sectionId), 100); // Small delay to ensure DOM is ready
    }
  }, [location, isHomePage]);

  useEffect(() => {
    if (!isHomePage) {
      // Don't set up scroll listener if we're not on the home page
      return;
    }

    const handleScroll = () => {
      const sections = ["home", "projects"];
      const scrollPosition = window.scrollY + 64;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Set active section based on current route
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection(""); // Clear active section when not on home page
    }
  }, [isHomePage]);

  return (
    <div className={`navbar ${activeSection === 'projects' ? 'navbar-projects' : ''}`}>
      <div className="logo-section">
        <img src="/kitty.png" className="logo" alt="Logo"></img>
        <p>PV</p>
      </div>
      <ul>
        <li>
          <a
            className={`navbar-item ${
              activeSection === "home" ? "active" : ""
            }`}
            onClick={() => handleNavigation("home")}
            style={{ cursor: "pointer" }}
          >
            home
          </a>
        </li>
        <li>
          <a
            className={`navbar-item ${
              activeSection === "projects" ? "active" : ""
            }`}
            onClick={() => handleNavigation("projects")}
            style={{ cursor: "pointer" }}
          >
            projects
          </a>
        </li>
        <li>
          <a
            className="navbar-item"
            style={{ cursor: "pointer" }}
            href="https://docs.google.com/document/d/1BrK54BfVXGfIXSPUjGkl5NZB4TS9Wppd2SrnyAFwklQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;