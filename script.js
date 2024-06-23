let path = document.querySelector(".blackLine");
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDashoffset = pathLength;

let lastScrollPercentage = 0;
let lastDrawLength = 0;

window.addEventListener("scroll", () => {
  // Calculate the scroll percentage
  let scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  // Calculate the scroll increment
  let scrollIncrement = scrollPercentage - lastScrollPercentage;

  // Define a variable to hold the draw length increment
  let drawLengthIncrement = 0;

  // Apply different multipliers based on scroll percentage ranges
  if (scrollPercentage >= 0.9260674749604639) {
    drawLengthIncrement = pathLength * scrollIncrement * 1.8;
  } else if (scrollPercentage >= 0.6246705324196099) {
    drawLengthIncrement = pathLength * scrollIncrement * 0.5;
  } else if (scrollPercentage >= 0.3026153212520593) {
    drawLengthIncrement = pathLength * scrollIncrement;
  } else if (scrollPercentage >= 0.13436985172981877) {
    drawLengthIncrement = pathLength * scrollIncrement * 1;
  } else if (scrollPercentage >= 0.03706754530477759) {
    drawLengthIncrement = pathLength * scrollIncrement * 2;
  } else {
    drawLengthIncrement = pathLength * scrollIncrement;
  }

  // Update the last draw length with the increment
  lastDrawLength += drawLengthIncrement;

  // Ensure the draw length stays within the valid range
  if (lastDrawLength > pathLength) {
    lastDrawLength = pathLength;
  } else if (lastDrawLength < 0) {
    lastDrawLength = 0;
  }

  // Set the strokeDashoffset to draw the path
  path.style.strokeDashoffset = pathLength - lastDrawLength;

  // Update the last scroll percentage
  lastScrollPercentage = scrollPercentage;

  // Debugging output
  // console.log(`scrollPercentage: ${scrollPercentage}`);
  // console.log(`pathLength: ${pathLength}`);
  // console.log(`lastDrawLength: ${lastDrawLength}`);
});


/*------------------------------------------------------------ */

let greyPath = document.querySelector(".greyLine");
let greyPathLength = greyPath.getTotalLength();

greyPath.style.strokeDasharray = greyPathLength + " " + greyPathLength;
greyPath.style.strokeDashoffset = greyPathLength;

let lastGreyScrollPercentage = 0;
let lastGreyDrawLength = 0;

window.addEventListener("scroll", () => {
  // Calculate the scroll percentage
  let greyScrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  // Calculate the scroll increment
  let greyScrollIncrement = greyScrollPercentage - lastGreyScrollPercentage;

  // Define a variable to hold the draw length increment
  let greyDrawLengthIncrement = 0;

  // Apply different multipliers based on scroll percentage ranges
  if (greyScrollPercentage >= 0.9260674749604639) {
    greyDrawLengthIncrement = greyPathLength * greyScrollIncrement * 1.8;
  } else if (greyScrollPercentage >= 0.6246705324196099) {
    greyDrawLengthIncrement = greyPathLength * greyScrollIncrement * 0.5;
  } else if (greyScrollPercentage >= 0.3026153212520593) {
    greyDrawLengthIncrement = greyPathLength * greyScrollIncrement;
  } else if (greyScrollPercentage >= 0.13436985172981877) {
    greyDrawLengthIncrement = greyPathLength * greyScrollIncrement * 1;
  } else if (greyScrollPercentage >= 0.03706754530477759) {
    greyDrawLengthIncrement = greyPathLength * greyScrollIncrement * 2;
  } else {
    greyDrawLengthIncrement = greyPathLength * greyScrollIncrement;
  }

  // Update the last draw length with the increment
  lastGreyDrawLength += greyDrawLengthIncrement;

  // Ensure the draw length stays within the valid range
  if (lastGreyDrawLength > greyPathLength) {
    lastGreyDrawLength = greyPathLength;
  } else if (lastGreyDrawLength < 0) {
    lastGreyDrawLength = 0;
  }

  // Set the strokeDashoffset to draw the path
  greyPath.style.strokeDashoffset = greyPathLength - lastGreyDrawLength;

  // Update the last scroll percentage
  lastGreyScrollPercentage = greyScrollPercentage;

  // Debugging output
  // console.log(`greyScrollPercentage: ${greyScrollPercentage}`);
  // console.log(`greyPathLength: ${greyPathLength}`);
  // console.log(`lastGreyDrawLength: ${lastGreyDrawLength}`);
});


/*------------------------------------------------------------ */

let pinkPath = document.querySelector(".pinkDot");
let pinkPathLength = pinkPath.getTotalLength();

pinkPath.style.strokeDasharray = 1 + " " + pinkPathLength;
pinkPath.style.strokeDashoffset = pinkPathLength;

let lastPinkScrollPercentage = 0;
let lastPinkDrawLength = 0;

window.addEventListener("scroll", () => {
  // Calculate the scroll percentage
  let pinkScrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  // Calculate the scroll increment
  let pinkScrollIncrement = pinkScrollPercentage - lastPinkScrollPercentage;

  // Define a variable to hold the draw length increment
  let pinkDrawLengthIncrement = 0;

  // Apply different multipliers based on scroll percentage ranges
  if (pinkScrollPercentage >= 0.9260674749604639) {
    pinkDrawLengthIncrement = pinkPathLength * pinkScrollIncrement * 1.8;
  } else if (pinkScrollPercentage >= 0.6246705324196099) {
    pinkDrawLengthIncrement = pinkPathLength * pinkScrollIncrement * 0.5;
  } else if (pinkScrollPercentage >= 0.3026153212520593) {
    pinkDrawLengthIncrement = pinkPathLength * pinkScrollIncrement;
  } else if (pinkScrollPercentage >= 0.13436985172981877) {
    pinkDrawLengthIncrement = pinkPathLength * pinkScrollIncrement * 1;
  } else if (pinkScrollPercentage >= 0.03706754530477759) {
    pinkDrawLengthIncrement = pinkPathLength * pinkScrollIncrement * 2;
  } else {
    pinkDrawLengthIncrement = pinkPathLength * pinkScrollIncrement;
  }

  // Update the last draw length with the increment
  lastPinkDrawLength += pinkDrawLengthIncrement;

  // Ensure the draw length stays within the valid range
  if (lastPinkDrawLength > pinkPathLength) {
    lastPinkDrawLength = pinkPathLength;
  } else if (lastPinkDrawLength < 0) {
    lastPinkDrawLength = 0;
  }

  // Set the strokeDashoffset to draw the path
  pinkPath.style.strokeDashoffset = pinkPathLength - lastPinkDrawLength;

  // Update the last scroll percentage
  lastPinkScrollPercentage = pinkScrollPercentage;

  // Debugging output
  // console.log(`pinkScrollPercentage: ${pinkScrollPercentage}`);
  // console.log(`pinkPathLength: ${pinkPathLength}`);
  // console.log(`lastPinkDrawLength: ${lastPinkDrawLength}`);
});


/*------------------------------------------------------------ */

/* adjust opacity of scrolldown animation and add shadow to nav on scroll */

const mouse = document.querySelector('.mouse')
const nav = document.querySelector('nav')

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY
  let bottomHeight = 100

  if (scrollY === 0) {
    nav.classList.remove("add-shadow");
  } else if (scrollY / bottomHeight >= 1) {
    mouse.style.opacity = 0;
  } else if (scrollY / bottomHeight <= 1) {
    mouse.style.opacity = 1 - scrollY / bottomHeight;
    nav.classList.add("add-shadow");
  }
})


/*------------------------------------------------------------ */

// const malaysiaDesc = document.querySelector(".malaysia-description");
// const australiaDesc = document.querySelector(".australia-description");
// const rectMY = malaysiaDesc.getBoundingClientRect()
// const rectAUS = australiaDesc.getBoundingClientRect();
// for (const key in rectMY) {
//   if (typeof rectMY[key] !== "function") {
//     console.log(`${key} : ${rectMY[key]}`);
//   }
// }
// for (const key in rectAUS) {
//   if (typeof rectAUS[key] !== "function") {
//     console.log(`${key} : ${rectAUS[key]}`);
//   }
// }

// window.addEventListener('scroll', () => {
//   let scrollY = window.scrollY
//   console.log(`scrollY: ${scrollY}`);

//   if (scrollY >= 250) {
//     malaysiaDesc.style.opacity = (scrollY / 800)
//   }
// })

/*------------------------------------------------------------ */

window,addEventListener('scroll', reveal)

function reveal() {
  const reveals = document.querySelectorAll('.reveal')

  for (const reveal of reveals) {
    const windowHeight = window.innerHeight
    const revealTop = reveal.getBoundingClientRect().top
    const revealPoint = 450
    const scrollY = window.scrollY;
    
    console.log(`windowHeight = ${windowHeight}`);
    console.log(`revealTop = ${revealTop}`);
    console.log(`scrollY = ${scrollY}`);

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('active')
    } else {
      reveal.classList.remove('active')
    }
  }
}