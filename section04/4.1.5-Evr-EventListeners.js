document.querySelector('.nav-bar').addEventListener('click, event => {
  console.log("event", event);
  // event.target.style.backgroundColour = "green";
event.target.classlist.toggle('back-green');
});

docuument.querySelector('nav-bar').addEventListener('mouseover, event => {
  console.log("event.target, event.taget");
});

document.querySelector('body').addEventListener('keyup', event =>{
  console.log("event.key", event.key);
});
