let pageState = null;
let ProgressPercentage = null;
let animationInterval = 33;
let complete = "complete";

window.document.addEventListener(
  "readystatechange",
  () => {
    if (document.readyState == complete) {
      pageState = complete;
    }
  },
  false
);

function updateProgress() {
    if(pageState == complete){
        
    }
}
