import styles from './Footer.module.scss';
export default function Footer (){
    return (
        <footer className={styles.footer}>
            <hr style={{ border: '1px solid black', width: '100%'}}/>
            <p>© 2026 Shamim Cadet Academy. All rights reserved.</p>
        </footer>
    )
}