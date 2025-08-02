import { useState, useEffect } from 'react';
import "./Navbar.scss"

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects'];
      const scrollPosition = window.scrollY + 64;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='navbar'>
      <div className='logo-section'>
        <img src='/kitty.png'className='logo'></img>
        <p>PV</p>
      </div>
     <ul>
        <li>
          <a 
            className={`navbar-item ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => scrollToSection('home')}
            style={{ cursor: 'pointer' }}
          >
            home
          </a>
        </li>
        <li>
          <a 
            className={`navbar-item ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => scrollToSection('projects')}
            style={{ cursor: 'pointer' }}
          >
            projects
          </a>
        </li>
        <li>
          <a 
            className={`navbar-item ${activeSection === 'resume' ? 'active' : ''}`}
            onClick={() => scrollToSection('resume')}
            style={{ cursor: 'pointer' }}
          >
            resume
          </a>
        </li>
        <li>
          <a 
            className={`navbar-item ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollToSection('contact')}
            style={{ cursor: 'pointer' }}
          >
            contact
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
