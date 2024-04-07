import React, { useEffect } from 'react';

const ParticleCanvas = () => {
    // https://github.com/matteobruni/tsparticles
    useEffect(() => {
        // load tsparticles
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/tsparticles@1.28.0/dist/tsparticles.min.js';
        script.async = true;
        document.body.appendChild(script);

        // load web-particles
        const webComponentsAdapterScript = document.createElement('script');
        webComponentsAdapterScript.src = 'https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.5.0/custom-elements-es5-adapter.js';
        webComponentsAdapterScript.async = true;
        document.body.appendChild(webComponentsAdapterScript);

        const webComponentsLoaderScript = document.createElement('script');
        webComponentsLoaderScript.src = 'https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.5.0/webcomponents-loader.js';
        webComponentsLoaderScript.async = true;
        document.body.appendChild(webComponentsLoaderScript);

        const webParticlesScript = document.createElement('script');
        webParticlesScript.type = 'module';
        webParticlesScript.src = 'https://cdn.jsdelivr.net/npm/web-particles@1.1.0/dist/web-particles.min.js';
        webParticlesScript.async = true;
        document.body.appendChild(webParticlesScript);

        return () => {
            document.body.removeChild(script);
            document.body.removeChild(webComponentsAdapterScript);
            document.body.removeChild(webComponentsLoaderScript);
            document.body.removeChild(webParticlesScript);
        };
    }, []);

    return (
        <>
            <web-particles id="tsparticles" options='{"fps_limit":60,"interactivity":{"detectsOn":"canvas","events":{"onClick":{"enable":true,"mode":"push"},"onHover":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"push":{"particles_nb":4},"repulse":{"distance":200,"duration":0.4}}},"particles":{"color":{"value":"#ffffff"},"links":{"color":"#ffffff","distance":150,"enable":true,"opacity":0.4,"width":1},"move":{"bounce":false,"direction":"none","enable":true,"outMode":"out","random":false,"speed":2,"straight":false},"number":{"density":{"enable":true,"area":800},"value":80},"opacity":{"value":0.5},"shape":{"type":"circle"},"size":{"random":true,"value":5}},"detectRetina":true}'></web-particles>
        </>
    );
};

export default ParticleCanvas;
