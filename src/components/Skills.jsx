import { FiCpu, FiDatabase, FiCloud, FiCode, FiEye } from 'react-icons/fi';
import { BiBrain } from 'react-icons/bi';
import { skillCategories } from '../data/skills';

const iconMap = {
    brain: BiBrain,
    cpu: FiCpu,
    eye: FiEye,
    database: FiDatabase,
    cloud: FiCloud,
    code: FiCode,
};

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className="section-header">
                <h2 className="section-title">Skills</h2>
            </div>

            <div className="skills-grid">
                {skillCategories.map((category) => {
                    const IconComponent = iconMap[category.icon] || FiCode;
                    return (
                        <div key={category.name} className="skill-card">
                            <div className="skill-header">
                                <div className="skill-icon">
                                    <IconComponent size={14} />
                                </div>
                                <div className="skill-name">{category.name}</div>
                            </div>
                            <div className="skill-tags">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
