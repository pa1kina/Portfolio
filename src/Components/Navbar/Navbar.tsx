import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  const handleNavigation = (sectionId: string) => {
    // Close mobile menu when navigating
    closeMobileMenu();
    if (isHomePage) {
      // If we're on the home page, scroll to the section
      scrollToSection(sectionId);
    } else {
      // If we're on another page (like /design), navigate to home with hash
      navigate(`/#${sectionId}`);
    }
  };

  const scrollToSection = (sectionId: string, smooth: boolean = true) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: smooth ? "smooth" : "instant",
        block: "start",
      });
    }
  };

  const closeMobileMenu = () => {
    setIsAnimatingOut(true); // Start exit animation
    setTimeout(() => {
      setIsMobileMenuOpen(false); // Remove from DOM after animation
      setIsAnimatingOut(false); // Reset animation state
    }, 300); // Match your animation duration
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu(); // Use the delayed close function
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  // Close mobile menu when clicking outside
  const handleOverlayClick = () => {
    closeMobileMenu();
  };

  useEffect(() => {
    // Handle initial load with hash (e.g., coming from /design to /#projects)
    if (isHomePage && location.hash) {
      const sectionId = location.hash.replace("#", "");
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

  // Close mobile menu on window resize (when switching to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`navbar ${
          activeSection === "projects" ? "navbar-projects" : ""
        }`}
      >
        <div className="logo-section">
          <img src="/kitty.png" className="logo" alt="Logo"></img>
          <p>PV</p>
        </div>
        <ul className="desktop-nav">
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

        {/* Hamburger Button */}
        <button
          className={`hamburger ${isMobileMenuOpen && !isAnimatingOut ? "hamburger-active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span
            className={`hamburger-line ${
              activeSection === "projects" ? "projects-hamburger" : ""
            }`}
          ></span>
          <span
            className={`hamburger-line ${
              activeSection === "projects" ? "projects-hamburger" : ""
            }`}
          ></span>
          <span
            className={`hamburger-line ${
              activeSection === "projects" ? "projects-hamburger" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className={`mobile-menu-overlay ${isAnimatingOut ? "closing" : ""}`}
          onClick={handleOverlayClick}
        >
          <div
            className={`mobile-menu ${
              activeSection === "projects" ? "mobile-menu-projects" : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              <li>
                <a
                  className="mobile-nav-item"
                  onClick={() => handleNavigation("home")}
                >
                  home
                </a>
              </li>
              <li>
                <a
                  className="mobile-nav-item"
                  onClick={() => handleNavigation("projects")}
                >
                  projects
                </a>
              </li>
              <li>
                <a
                  className="mobile-nav-item"
                  href="https://docs.google.com/document/d/1BrK54BfVXGfIXSPUjGkl5NZB4TS9Wppd2SrnyAFwklQ/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
