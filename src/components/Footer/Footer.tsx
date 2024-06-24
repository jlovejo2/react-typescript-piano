import styles from "./Footer.module.css";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <a href="https://google.com">Eddie's Link</a>
            <br />
            {currentYear}
        </footer>
    )
}