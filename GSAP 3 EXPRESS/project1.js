

// let tl = gsap.timeline();
// tl.from("#demo", {opacity: 0})
//   .from("h1", {x: 80, opacity: 0})
//   .from("h2", {x : -80, opacity: 0})
//   .from("p", {y:30, opacity: 0})
//   .from("button", { y: 50, opacity: 0})
//   .from("#items  > g", {
//     transformOrigin: '50% 50%',
//     scale: 0,
//     opacity: 0,
//     stagger: 0.1,
//   });


// with timeline defaults

// let tl = gsap.timeline({repeat: 1, yoyo :true});
// let tl = gsap.timeline( {defaults:{scale: 4}});
let tl = gsap.timeline( {defaults:{ease: 'back' ,opacity: 0}});

tl.from("#demo", {ease: 'linear'})
  .from("h1", {duration: 1 ,x: 80})
  .from("h2", {duration: 1 ,x : -80}, "<") 
  .from("p", {y:30}, "-=0.3")
  .from("button", { y: 50}, '-=0.4')
  .from("#items  > g", {
    transformOrigin: '50% 50%',
    scale: 0,
    stagger: 0.1,
   
  }, "-=0.3");
  