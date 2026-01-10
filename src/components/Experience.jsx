import { useState, useEffect } from 'react';
import { FiChevronRight, FiX, FiShield, FiBarChart2, FiRadio, FiMapPin, FiCalendar } from 'react-icons/fi';
import { experiences } from '../data/experience';

const iconMap = {
    security: FiShield,
    analytics: FiBarChart2,
    telecom: FiRadio,
};

function ExperienceModal({ exp, onClose }) {
    if (!exp) return null;

    const IconComponent = iconMap[exp.icon] || FiShield;

    // ESC key to close
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close">
                    <FiX size={20} />
                </button>

                <header className="modal-header">
                    <div className="modal-icon-wrapper">
                        <IconComponent size={24} />
                    </div>
                    <div>
                        <h2 className="modal-title">{exp.title}</h2>
                        <p className="modal-subtitle">{exp.company}</p>
                    </div>
                </header>

                <div className="modal-tags">
                    <span className="modal-tag">
                        <FiMapPin size={12} />
                        {exp.location}
                    </span>
                    <span className="modal-tag">
                        <FiCalendar size={12} />
                        {exp.period}
                    </span>
                </div>

                <div className="modal-body">
                    <p className="modal-description">{exp.description}</p>

                    <div className="modal-section">
                        <h3>Key Contributions</h3>
                        <ul className="modal-bullets">
                            {exp.bullets.map((bullet, i) => (
                                <li key={i}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Experience() {
    const [selectedExp, setSelectedExp] = useState(null);

    return (
        <>
            <section id="experience" className="section">
                <div className="section-header">
                    <h2 className="section-title">Experience</h2>
                </div>

                <div className="card-list">
                    {experiences.map((exp) => {
                        const IconComponent = iconMap[exp.icon] || FiShield;
                        return (
                            <div
                                key={exp.id}
                                className="card-item"
                                onClick={() => setSelectedExp(exp)}
                            >
                                <div className="card-icon">
                                    <IconComponent size={16} />
                                </div>
                                <div className="card-info">
                                    <div className="card-title">{exp.title}</div>
                                    <div className="card-desc">{exp.company}</div>
                                </div>
                                <div className="card-date">{exp.period}</div>
                                <FiChevronRight className="card-arrow" size={16} />
                            </div>
                        );
                    })}
                </div>
            </section>

            {selectedExp && (
                <ExperienceModal
                    exp={selectedExp}
                    onClose={() => setSelectedExp(null)}
                />
            )}
        </>
    );
}
