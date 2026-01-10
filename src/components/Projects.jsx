import { useState, useEffect } from 'react';
import { FiChevronRight, FiX, FiExternalLink, FiMessageCircle, FiCamera, FiNavigation, FiActivity, FiEdit3, FiGlobe, FiGithub } from 'react-icons/fi';
import { projects } from '../data/projects';

const iconMap = {
    chat: FiMessageCircle,
    vision: FiCamera,
    autonomous: FiNavigation,
    research: FiActivity,
    creative: FiEdit3,
};

function ProjectModal({ project, onClose }) {
    if (!project) return null;

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

                <img
                    src={project.image}
                    alt={project.title}
                    className="modal-hero-image"
                />

                <div className="modal-header-compact">
                    <h2 className="modal-title">{project.title}</h2>
                    <p className="modal-subtitle">{project.organization} • {project.period}</p>
                </div>

                <div className="modal-body">
                    <p className="modal-description">{project.description}</p>

                    <div className="modal-links-row">
                        {project.links.map((link) => (
                            <a
                                key={link.text}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-glass"
                            >
                                {link.text.toLowerCase().includes('github') ? <FiGithub size={14} /> : <FiGlobe size={14} />}
                                {link.text}
                            </a>
                        ))}
                    </div>

                    <div className="modal-grid">
                        <div className="modal-section">
                            <h3>Core Tech</h3>
                            <div className="tech-tags-grid">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="tech-pill">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="modal-section">
                            <h3>Impact</h3>
                            <ul className="modal-bullets">
                                {project.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            <section id="projects" className="section">
                <div className="section-header">
                    <h2 className="section-title">Projects</h2>
                </div>

                <div className="card-list">
                    {projects.map((project) => {
                        const IconComponent = iconMap[project.icon] || FiActivity;
                        return (
                            <div
                                key={project.id}
                                className="card-item"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="card-icon">
                                    <IconComponent size={16} />
                                </div>
                                <div className="card-info">
                                    <div className="card-title">{project.tab}</div>
                                    <div className="card-desc">{project.organization}</div>
                                </div>
                                <div className="card-date">{project.period}</div>
                                <FiChevronRight className="card-arrow" size={16} />
                            </div>
                        );
                    })}
                </div>
            </section>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </>
    );
}
