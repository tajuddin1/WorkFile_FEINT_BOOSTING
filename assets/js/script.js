particlesJS("particles-js", {
  particles: {
    number: {
      value: 150,
      density: { enable: true, value_area: 1924.0944730386273 },
    },
    color: { value: "#1ab379" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 8 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: false,
      anim: { enable: true, speed: 1.5, opacity_min: 0, sync: false },
    },
    size: {
      value: 4,
      random: true,
      anim: { enable: true, speed: 0, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 0,
      color: "#ffffff",
      opacity: 0.15232414578222467,
      width: 1,
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "bubble" },
      onclick: { enable: false, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 0, line_linked: { opacity: 1 } },
      bubble: { distance: 1500, size: 500, duration: 10, opacity: 1, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: false,
});
