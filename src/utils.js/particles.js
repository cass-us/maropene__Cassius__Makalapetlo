const particles = {
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        outModes: {
          default: "bounce",
        },
      },
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800,
        },
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };
  
  export default particles;
  