import "./Footer.css";

const Footer: React.FC = () => {
    const email = "info@dreamitmedicine.com";
    const instagram = "https://instagram.com/dreamitmedicine";

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <div className="footer-logo">Dream It Medicine</div>
                    
                </div>
                <div className="footer-contact-info">
                    <h4>Contact</h4>
                    <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
                    <p>Instagram: <a href={instagram} target="_blank" rel="noopener noreferrer">@dreamitmedicine</a></p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Dream It Medicine. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
