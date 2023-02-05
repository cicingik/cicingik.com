import React from 'react'
import { Link } from 'gatsby'

import { ExternalLinkIcon } from '../assets/ExternalLinkIcon'
import blog from '../assets/millenium-falcon.png'
import floppyLogo from '../assets/millenium-falcon.png'
import floppy from '../assets/millenium-falcon.png'
import github from '../assets/millenium-falcon.png'
import projects from '../assets/millenium-falcon.png'
import moon from '../assets/millenium-falcon.png'
import { slugify } from '../utils/helpers'

const mainNavItems = [
  { url: '/', icon: floppy, label: 'Home', mobileOnly: true },
  { url: '/me', icon: floppy, label: 'About' },
  { url: '/blog', icon: blog, label: 'Blog' },
  { url: '/projects', icon: projects, label: 'Projects' },
]

const socialNavItems = [
  { url: 'https://github.com/cicingik', icon: github, label: 'GitHub' },
]

export const Navigation = ({ theme, onUpdateTheme }) => {
  return (
    <section className="navigation">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="item brand">
            <img src={floppyLogo} className="logo" alt="Dany Satyanegara" />
            <span>cicingik</span>
          </Link>
          <nav>
            {mainNavItems.map((item) => (
              <div className="nav-item-outer" key={item.url}>
                <Link
                  to={item.url}
                  key={item.label}
                  activeClassName="active"
                  className={`item ${slugify(item.label)} ${
                    item.mobileOnly ? 'mobile-only' : ''
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              </div>
            ))}

            {socialNavItems.map((item) => (
              <div className="nav-item-outer" key={item.url}>
                <img src={item.icon} alt={item.label} className="nav-image" />
                <a
                  href={item.url}
                  key={item.label}
                  className={`desktop-only item ${slugify(item.label)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{item.label}</span>
                  <ExternalLinkIcon />
                </a>
              </div>
            ))}
          </nav>
        </div>
        <div className="theme-toggle">
          <button onClick={onUpdateTheme}>
            <img src={moon} alt="Theme" />
          </button>
        </div>
      </div>
    </section>
  )
}
