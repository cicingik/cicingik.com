import React from 'react'
import gatsby from '../assets/millenium-falcon.png'
import github from '../assets/millenium-falcon.png'

const links = [
    {url: 'https://cicingik.substack.com', label: 'Newsletter'},
    {url: 'https://ko-fi.com/cicingik', label: 'Ko-Fi'},
    {url: 'https://patreon.com/cicingik', label: 'Patreon'},
    {url: 'https://www.cicingik.com/rss.xml', label: 'RSS'},
]
const madeWithLinks = [
    {url: 'https://www.gatsbyjs.org/', label: 'Gatsby', icon: gatsby},
    {url: 'https://github.com/cicingik', label: 'GitHub', icon: github},
]

export const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <nav>
                    <span className="desktop-only">Made by cicingik</span>
                    {links.map((link) => (
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={link.url}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                <nav>
                    {madeWithLinks.map((link) => (
                        <a
                            href={link.url}
                            title={link.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={link.url}
                        >
                            <span>{link.label}</span>
                            <img src={link.icon} alt={link.label}/>
                        </a>
                    ))}
                </nav>
            </section>
        </footer>
    )
}
