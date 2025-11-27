let progressSlider = document.getElementById("progressSlider");
let time = document.getElementById("time");
let pause = document.getElementById("pause");
let selectAll = (e) => document.querySelectorAll(e);

let home = document.getElementById('home')
let candy = document.getElementById('candy')
let dogpark = document.getElementById('dogpark')
let school = document.getElementById('school')

let animation = gsap.to("#herman", {
  duration: 6,
  ease: "none",
  motionPath: {
    path: "#motionpath",
    align: "#herman",
  },

  onUpdate: animationUpdate,
  // onComplete: () => {console.log('animaitno completer')}
  onComplete: () => (pause.innerText = "play"),
});

progressSlider.addEventListener("input", function () {
  // console.log(this.value)
  animation.progress(this.value).pause();
});

progressSlider.addEventListener("change", function () {
  pause.innerHTML = 'play'
});

function animationUpdate() {
  progressSlider.value = animation.progress();
  time.innerHTML = this.progress().toFixed(2);
}

pause.addEventListener("click", () => {
  // animation.pause();
  // animation.paused(true)
  animation.paused(!animation.paused());
  // animation.reversed(!animation.reversed())
  if (animation.progress() === 1) {
    animation.restart();
  }

//   pause.innerText = animation.paused() ? "play" : "Pause";
   setButtonState();
});


// below for practice how work 
// animation.pause()
// gsap.to(animation, {time: 3, duration: 2})   


// gsap.to(animation, {timeScale: 7, delay: 2})   

// animation.pause()
// gsap.to(animation, {progress: 0.9, duration: 2, ease : 'bounce'})

function setButtonState(){
    pause.innerText = animation.paused() ? "play" : "Pause";
}

home.addEventListener('click', () => {
    animation.pause();
    gsap.to(animation, {progress: 0,duration: 1, onComplete: setButtonState})
})
candy.addEventListener('click', () => {
    animation.pause();
    gsap.to(animation, {progress: 0.5, duration : 1, onComplete: setButtonState})
})
dogpark.addEventListener('click', () => {
    animation.pause();
    gsap.to(animation, {progress: 0.9, duration : 1, onComplete: setButtonState})
})
school.addEventListener('click', () => {
    animation.pause();
    gsap.to(animation, {progress: 1, duration : 1, onComplete: setButtonState})
})