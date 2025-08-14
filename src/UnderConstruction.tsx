
import React from 'react';

const education = [
  {
    school: 'University of Oslo',
    degree: 'Master in Computational Physics',
    years: '2024 - Present',
  },
  {
    school: 'University of Uppsala',
    degree: 'Master in Theoretical Physics (not completed)',
    years: '2023 - 2024',
  },
  {
    school: 'University of Oslo',
    degree: 'Bacelor in Physics',
    years: '2020 - 2023',
  },
  // Add more entries as needed
];

const workExperience = [
  {
    company: 'Institute for Energy Technology',
    role: 'Summer Research Assistant',
    years: '2025 - 2025',
    description: 'Machine learning on satellite data',
  },
  {
    company: 'Skatteetaten',
    role: 'Summer Fullstack Developer',
    years: '2024 - 2024',
    description: 'Frontend development in React and TypeScript, backend in Java.',
  },
  {
    company: 'University of Oslo',
    role: 'Summer Research Assistant',
    years: '2023 - 2023',
    description: 'Experimental research on porous media',
  },
  {
    company: 'Tangen Uteanlegg AS',
    role: 'Anleggsgartner',
    years: '2020 - 2022',
    description: 'Keeping of gardens and parks, including planting, pruning, and maintenance.',
  },
  {
    company: 'Sulland Mo',
    role: 'Care Preparation',
    years: '2019 - 2020',
    description: 'Refurbishing and preparing vehicles for sale, including cleaning and minor repairs. Additianly preparing new vehicles for delivery.',
  },
  // Add more entries as needed
];

const skills = [
  'JavaScript',
  'React',
  'TypeScript',
  'Python',
  'PyTorch',
  'Java',
  'OpenMP',
  'MPI',
  'C/C++',
  // Add more skills as needed
];

const UnderConstruction: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
      color: 'white',
      fontFamily: 'Segoe UI, Arial, sans-serif',
      padding: '40px',
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'rgba(0,0,0,0.7)',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
        padding: '32px',
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '32px' }}>Sigurd Sønvisen Vargdal</h1>

        <section style={{ marginBottom: '32px' }}>
          <h2>Education</h2>
          <ul>
            {education.map((edu, idx) => (
              <li key={idx} style={{ marginBottom: '12px' }}>
                <strong>{edu.school}</strong> — {edu.degree} <br />
                <span style={{ color: '#ccc' }}>{edu.years}</span>
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2>Work Experience</h2>
          <ul>
            {workExperience.map((work, idx) => (
              <li key={idx} style={{ marginBottom: '12px' }}>
                <strong>{work.company}</strong> — {work.role} <br />
                <span style={{ color: '#ccc' }}>{work.years}</span><br />
                <span>{work.description}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Skills</h2>
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', listStyle: 'none', padding: 0 }}>
            {skills.map((skill, idx) => (
              <li key={idx} style={{ background: '#333', borderRadius: '8px', padding: '8px 16px' }}>{skill}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default UnderConstruction;
