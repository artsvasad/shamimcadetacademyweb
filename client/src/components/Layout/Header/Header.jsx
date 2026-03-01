import React, { useState } from 'react'
import styles from './Header.module.scss'
import logo from '../../../assets/logo.svg'
import Hamburger from '../../Functions/Hamburger/Hamburger'
export default function Header() {

    const siteConfig = {
        name: "Shamim Cadet Academy",
        // শামিম ক্যাডেট একাডেমি
        tagline: "Disciplined Education, Prosperous Life.",
        tagline2: "Concerned with Al-Falah Model Academy",
        established: "EST. 2025",
        logo: 'https://res.cloudinary.com/duhqyfbk1/image/upload/v1772031426/logo_hyh9ch.svg',
        links:[
            { name: "Home", url: "/home" },
            { name: "Admission", url: "/admission" },
            { name: "Noticeboard", url: "/notices" },
            { name: "About Us", url: "/about" },
            { name: "Contact Us", url: "/contact" }
        ]
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (



        <header className={styles.header}>
            <div className={styles.siteHeader}>
                <div className={styles.logoDetails}>
                    <img src={siteConfig.logo} className={styles.logo} alt={siteConfig.name} height={75} />
                    <em className={styles.establishment}>
                        <strong>{siteConfig.established}</strong>
                    </em>
                </div>

                <div className={styles.siteInfo}>
                    <h1 style={{margin: 0}}>{siteConfig.name}</h1>
                    <span>{siteConfig.tagline}</span>
                    <span><strong>
                        <em>{siteConfig.tagline2}</em></strong></span>
                </div>


            </div>
            <Hamburger isOpen={isMenuOpen} toggleMenu={toggleMenu} />

            <nav style={{ left: isMenuOpen ? '0' : '-100%' }}>
                <ul>
                    {siteConfig.links.map((link, index) => (
                        <li key={index}><a href={link.url}>{link.name}</a></li>
                    ))}
                </ul>
            </nav>

        </header>
    )
}