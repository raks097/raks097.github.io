export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer-text">
                © {currentYear} Sai Rakshith Potluri
            </p>
        </footer>
    );
}
