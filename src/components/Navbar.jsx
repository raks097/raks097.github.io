import { FiHome, FiUser, FiFolder, FiLayers, FiBookOpen } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/profile';

export default function Navbar({ activeSection }) {
    const navItems = [
        { id: 'home', icon: FiHome, label: 'Home' },
        { id: 'experience', icon: FiUser, label: 'Experience' },
        { id: 'projects', icon: FiFolder, label: 'Projects' },
        { id: 'skills', icon: FiLayers, label: 'Skills' },
        { id: 'education', icon: FiBookOpen, label: 'Education' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="navbar">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                    title={item.label}
                    aria-label={item.label}
                >
                    <item.icon size={18} />
                </button>
            ))}
            <div className="nav-divider" />
            <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-item nav-social"
                title="GitHub"
                aria-label="GitHub"
            >
                <FaGithub size={18} />
            </a>
            <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-item nav-social"
                title="LinkedIn"
                aria-label="LinkedIn"
            >
                <FaLinkedin size={18} />
            </a>
        </nav>
    );
}
