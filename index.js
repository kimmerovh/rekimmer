particlesJS("background", {

    particles: {
        number: {
            value: 15,
            density: {
                enable: true,
                value_area: 300,
            },
        },

        color: {
            value: "#ffffff"
        },
        shape: {
            type: "triangle",//shape
        },
        opacity: {
            value: 0.8,//base
            random: true,
            anum: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5,//base size of particles
            random: true,
            anim: {
                enable: true,
                speed: 4,
                anim: {
                    enable: true,
                    speed: 4,
                    size_min: 0.3,
                    sync: false,
                },
            },
        },

        //connecting
        line_linkes: {
            enable: true,
            distance: 150,//max dist
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },

        //particle movenent
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            }
        },

        retina_detect: true,
});