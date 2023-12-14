var main = gsap.timeline({ repeat: 0, repeatDelay: 1 });
main.from(".name", { duration: 1, opacity: 0, scale: 0.3, ease: "back", x: -100, rotate: 180, stagger: 0.5 }, 'intro');
main.from(".skill", { duration: 1.5, opacity: 0, scale: 0.3, ease: "back", y: -100, rotate: 270, delay: 1, stagger: 0.5 }, 'outro');

