import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
export const Footer = (): JSX.Element => (
    <div className="footer">
        <div>
            <a href="#" className="footer-socials px-1 h3"><FaGithub /></a>
            <a href="#" className="footer-socials px-1 h3"><FaLinkedin /></a>
            <a href="#" className="footer-socials px-1 h3"><FaTwitter /></a>
            <a href="#" className="footer-socials px-1 h3"><FaInstagram /></a>
        </div>
        <div>Owusu K. © {new Date(Date.now()).getFullYear()} | Fullstack Developer & Data Scientist</div>
    </div>
)

export default Footer