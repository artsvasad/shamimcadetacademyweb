import styles from './NavBar.module.scss'
export default function NavBar() {
    return(
        <nav className={styles.navbar}>
            <ul>
                <li><a href="/">Login</a></li>
                <li><a href="/">Apply Now</a></li>
            </ul>
        </nav>
    )
}