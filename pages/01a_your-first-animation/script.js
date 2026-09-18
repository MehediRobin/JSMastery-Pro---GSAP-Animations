gsap.to(".card", {
  opacity: 1,
  scale: 1,
  y: 200,
  duration: 5,
  onComplete: () => {
    gsap.to(".card", {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });
  },
});
 