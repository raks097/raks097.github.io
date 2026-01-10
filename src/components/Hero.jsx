import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/profile';

export default function Hero() {
    const copyEmail = () => {
        navigator.clipboard.writeText(profile.email);
        alert('Email copied to clipboard!');
    };

    return (
        <section id="home" className="hero-section">
            <div className="hero-badge-container">
                <span className="hero-badge">AI/ML Engineer</span>
            </div>

            <div className="hero-content">
                <img src={profile.photo} alt={profile.name} className="hero-photo" />

                <div className="hero-text-container">
                    <h1 className="hero-name">{profile.name}</h1>
                    <p className="hero-tagline">{profile.shortBio}</p>
                </div>

                <div className="hero-actions">
                    <button onClick={copyEmail} className="btn btn-primary">
                        <FiMail size={18} />
                        Keep in touch
                    </button>
                    <a
                        href={profile.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        aria-label="GitHub"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href={profile.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
}
