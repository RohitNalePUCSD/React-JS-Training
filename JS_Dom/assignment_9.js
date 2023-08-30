/*
Question 1:
  Visit any page on the browser, and replace the content of all the p tags with
  the phrase “How’s the Josh? using Javascript
*/


// const paraghaphs = document.getElementsByTagName('p')
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p) => {
  p.textContent = "How's the Josh?";
});


/*
Question 2
  Go to youtube. Open any video. Add a button to the page using JS.
  On click of the button, the video playback speed should change to 10x
*/

const playbackRateButton = document.createElement("button");
playbackRateButton.setAttribute("class", "ytp-play-speed-button ytp-button");
playbackRateButton.style.backgroundColor = "#4e74ff";
playbackRateButton.style.color = "white";
playbackRateButton.style.border = "none";
playbackRateButton.style.borderRadius = "5px";
playbackRateButton.style.textAlign = "center";
playbackRateButton.style.textDecoration = "none";
playbackRateButton.style.fontSize = "16px";
playbackRateButton.style.fontFamily = "Roboto, sans-serif";
playbackRateButton.textContent = "10x";


playbackRateButton.addEventListener("click", () => {
  const video = document.querySelector("video");
  video.playbackRate = 10;
});
  
const videoActions = document.querySelector(".ytp-right-controls");
videoActions.appendChild(playbackRateButton);
