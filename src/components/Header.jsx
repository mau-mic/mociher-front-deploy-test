import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import imgLogo from "../assets/icons/moviher-logo.svg";
import menuIcon from "../assets/icons/bx-menu.svg";
import closeIcon from "../assets/icons/bx-x.svg";
import chevronDownIcon from "../assets/icons/bx-chevron-down.svg"
import './Header.css';

let Links = [
  { name: "Home", link: "#landing-section" },
  { name: "Servicios", link: "#services-section" },
  { name: "Nosotros", link: "#mision-vision-section" },
  { 
    name: "Proyectos", 
    link: "#",
    sublinks: [
      { name: "Ejecutados", link: "/obras-ejecutadas" },
      { name: "En Ejecución", link: "/obras-en-ejecucion" }
    ]
  },
  { name: "Contáctanos", link: "#contact-section" }
];

// Header component
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setshowSubMenu] = useState(false);

  const currentPath = useLocation().pathname;

  const generateUpdatedLinks = () => {
    const rootPath = '/';
    return Links.map(link => {
      if (currentPath !== rootPath && !link.link.startsWith('http')) {
        const updatedLink = rootPath + link.link;
        return { ...link, link: updatedLink };
      } else {
        return link;
      }
    });
  };

  // Get updated links
  const updatedLinks = generateUpdatedLinks();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSubMenu = () => {
    setshowSubMenu(!showSubMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false); // Remove the show-menu class
  };

  return (
    <header id="header">
      <div id="header-menu">
        {/* Logo and Menu Icon JSX */}
        <a href='/' id="header-logo">
          <img src={imgLogo} alt="moviher-logo" />
        </a>
        
        <img
          src={!showMenu ? menuIcon : closeIcon}
          alt="menu-icon"
          className="menu-icon"
          onClick={toggleMenu}
        />
        
        <ul className={`header-nav ${showMenu ? 'show-menu' : ''}`}>
          {updatedLinks.map((link, index) => (
            <li key={index} className={`header-nav-option ${link.sublinks ? 'has-sublinks' : ''}`}>
              <a 
                href={link.link} 
                onClick={link.sublinks ? (e) => {e.preventDefault(); toggleSubMenu(); } : handleLinkClick}
                className='header-nav-link'
              >
                {link.name}
                {link.sublinks && (
                <img
                src={chevronDownIcon}
                alt="submenu-icon"
                className="menu-icon"
                onClick={toggleSubMenu}
              />)}
              </a>
              {link.sublinks && (
                <ul className={`sublinks ${showSubMenu ? 'show-menu' : ''}`}>
                  {link.sublinks.map((sublink, subindex) => (
                    <li key={subindex}className='header-nav-option sublink-item'>
                      <a href={sublink.link} className='header-nav-link'>{sublink.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};


export default Header;