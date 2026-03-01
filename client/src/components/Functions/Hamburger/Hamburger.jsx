import styles from './Hamburger.module.scss';

export default function Hamburger({ isOpen, toggleMenu }) {
    return (
        <div 
            className={`${styles.hamburger} ${isOpen ? styles.active : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            role="button"
        >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
        </div>
    );
}