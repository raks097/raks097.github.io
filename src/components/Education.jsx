import { FiMapPin } from 'react-icons/fi';
import { education } from '../data/experience';

export default function Education() {
    return (
        <section id="education" className="section">
            <div className="section-header">
                <h2 className="section-title">Education</h2>
            </div>

            <div className="card-list">
                {education.map((edu) => (
                    <div key={edu.id} className="education-card">
                        <div className="education-school">{edu.school}</div>
                        <div className="education-institution">{edu.institution}</div>
                        <div className="education-degree">{edu.degree}</div>
                        <div className="education-period">
                            <FiMapPin size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                            {edu.location} • {edu.period}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
