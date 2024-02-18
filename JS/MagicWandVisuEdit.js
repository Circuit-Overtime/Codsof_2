const wand = document.getElementById("wandVisuMagic"),
container = document.getElementById("SecondRowSecondLayout"),
originaltext = document.getElementById("original"),
other = document.getElementById("other"),
mask = document.querySelector(".mask");

const containerLeft = container.getBoundingClientRect().left;
const containerRight = container.getBoundingClientRect().right;
const containerTop = container.getBoundingClientRect().top;
const containerBottom = container.getBoundingClientRect().bottom;



const xy = (x, y) => ({ x, y }),
      px = value => `${value}px`,
      deg = value => `${value}deg`,
      per = value => `${value}%`,
      mapRange = (value, inMin, inMax, outMin, outMax) => ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin,
      abs = value => `"${value}"`;


container.onmousemove = e => {

    if((e.clientX >= containerLeft) && (e.clientX <= containerRight))
    {
        const wandStyles = {
            left: px(mapRange(e.clientX, containerLeft, containerRight, 50, 570)),
            top: px(mapRange(e.clientY-300, containerTop, containerBottom, 150,160 )),
            rotate : deg((mapRange(e.clientX, containerLeft, containerRight, 50, 570)) * 0.01)
        }
        wand.animate(wandStyles, { duration: 400, fill: "forwards" });
        percentage_moved = parseInt(mapRange((((containerRight - containerLeft + 10) / wand.getBoundingClientRect().x)*100), 78,50,0,100));
        new_width = px(parseInt(mapRange(percentage_moved, 0 ,100, 0, originaltext.getBoundingClientRect().width + 6)))
        other.animate({width: [new_width]}, { duration: 350, fill: "forwards" });
        mask.animate({width: [new_width]}, { duration: 350, fill: "forwards" });
    }

else if(((e.clientX <= containerLeft) && (e.clientX >= containerRight)) || ((e.clientY <= 105) && (e.clientY >= 455)))
{
    other.animate({width: ["0px"]}, { duration: 300, fill: "forwards" });
    mask.animate({width: ["0px"]}, { duration: 300, fill: "forwards" });
}   

}
container.onmouseleave = e => {
  const wandStyles = {
    left: px(450),
    top: px(120),
    rotate : deg(-2)
}
wand.animate(wandStyles, { duration: 400, fill: "forwards" });
other.animate({width: [px(400)]}, { duration: 250, fill: "forwards" });
mask.animate({width: [px(400)]}, { duration: 250, fill: "forwards" });

}

particlesJS("starshine", {
    particles: {
      number: { value: 1150, density: { enable: true, value_area: 600 } },
      color: { value: "#7440DF" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#fff" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.9,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: true, speed: 10, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 100,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: false, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  