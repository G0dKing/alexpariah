// textFade.js

// Timelines
let timelineA = gsap.timeline();
let timelineB = gsap.timeline();
let timelineC = gsap.timeline();
let timelineD = gsap.timeline();

// Elements
let TextSetA = ".text"
let TextSetB = ".text-2"
let Button = ".glitch, .glitch-2, .glitch-3"

// Fade In A
timelineA.fromTo(
  TextSetA,
  { x: "50px", opacity: 0 },
  { x: "0px", opacity: 1, stagger: 2, duration: 3 },
  "+=1"
);

// Fade Out A
timelineA.to(
  TextSetA,
  { y: "0px", opacity: 0, stagger: 2, duration: 2 },
  "+=0"
);

// Fade In B
timelineB.fromTo(
  TextSetB,
  { x: "0px", opacity: 0 },
  { x: "50px", opacity: 1, stagger: 2, duration: 2 },
  "+=2"
);

// Fade Out B
timelineB.to(
  TextSetB,
  { y: "0px", opacity: 0, stagger: 2, duration: 2 },
  "+=0"
);

// Fade In C
timelineC.fromTo(
  Button,
  { x: "0px", opacity: 0 },
  { x: "0px", opacity: 1, stagger: 2, duration: 2 },
  "+=7"
);

// Color Change C
timelineC.fromTo(
  Button,
  { color: "white", stagger: 4, duration: 4 },
  { color: "yellow", stagger: 2, duration: 6 },
  "+=3"
);