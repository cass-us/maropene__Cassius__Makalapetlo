import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './particles.config';

const ParticlesBackground = () => {
    return (
        <div>
            <Particles params={particlesConfig} />
        </div>
    );
};

export default ParticlesBackground;
