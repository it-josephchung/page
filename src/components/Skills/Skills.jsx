import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

  return (
    <section id="skills">
      <Container>
        <Title title="Skills" />
        <div className="skill-links">
          {skills &&
            skills.map((skill) => {
              const { url, id, name } = skill;
              return (
                <a key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
                  <i className={`skill-icon fa fa-${name || 'refresh'}`} />
                </a>
              );
            })}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
