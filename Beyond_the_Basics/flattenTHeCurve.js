/**
 * for single panel
 * 
const tl = gsap.timeline();
const img = document.querySelector('img')
const headings = document.querySelector('h2')
const word1 = document.querySelector('.word1')
const word2 = document.querySelector('.word2')


tl.from(img, {x: -150, scale: 0.5, ease: 'power1.in'})
.from(img, {y: 50, ease: 'power1'}, '<')
.from(img, {opacity: 0, duration: 0.2}, '<')
.from(word1, {x: -80}, "-=.25")
.from(word2, {x: 80}, '<')
.from(headings, {opacity: 0, duration: 0.2}, '<')

.to(img, {x: 150, scale: 0.5, ease: 'power1', },'+=.2')
.to(img, {y: 80, ease: 'power1.in'}, '<')

.to(headings, {y: 20, ease: 'power1.in', opacity: 0, duration: 0.2}, '<')
.to(img, {opacity: 0, duration: 0.2}, '-=0.2')
 */

const master = gsap.timeline();
const panelDelay = "-=.5"

function animatePanel(panel) {
  const tl = gsap.timeline();
  const img = document.querySelector(panel + " img");
  const headings = document.querySelector(panel + " h2");
  const word1 = document.querySelector(panel + " .word1");
  const word2 = document.querySelector(panel + " .word2");
     tl.set(panel, {left: 0})
     .from(img, { x: -150, scale: 0.5, ease: "power1.in" })
    .from(img, { y: 50, ease: "power1" }, "<")
    .from(img, { opacity: 0, duration: 0.2 }, "<")
    .from(word1, { x: -80 }, "-=.25")
    .from(word2, { x: 80 }, "<")
    .from(headings, { opacity: 0, duration: 0.2 }, "<")

    .to(img, { x: 150, scale: 0.5, ease: "power1" }, "+=.2")
    .to(img, { y: 80, ease: "power1.in" }, "<")

    .to(headings, { y: 20, ease: "power1.in", opacity: 0, duration: 0.2 }, "<")
    .to(img, { opacity: 0, duration: 0.2 }, "-=0.2");

    return tl;
}

master.add(animatePanel('.panel1'))
.add(animatePanel('.panel2'),panelDelay)
.add(animatePanel('.panel3'),panelDelay)

// panel 4 due
//............ 