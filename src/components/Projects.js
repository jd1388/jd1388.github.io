import React from 'react';

import { terra, giphySearch } from '../data/Projects';

import Styles from '../styles/Projects';

const Project = ({ projectInfo, mobile }) => {
    const { name, description } = projectInfo;

    return (
        <div style={Styles.projectContainer}>
            <h3 style={mobile ? Styles.mobileProjectName : Styles.projectName}>{name}</h3>
            <p style={Styles.projectDescription}>{description}</p>
        </div>
    );
}

const Projects = ({ mobile }) => (
    <div style={Styles.projectsContainer}>
        <div style={mobile ? Styles.mobileProjectContent : Styles.projectContent}>
            <h2 style={mobile ? Styles.mobileHeader : Styles.header}>Projects</h2>
            <Project projectInfo={terra} mobile={mobile}/>
            <Project projectInfo={giphySearch} mobile={mobile}/>
        </div>
    </div>
);

export default Projects;
