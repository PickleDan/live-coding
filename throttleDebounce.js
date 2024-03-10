const input = document.querySelector("input");
const defaultText = document.querySelector("#default");
const debounceText = document.querySelector("#debounce");
const throttleText = document.querySelector("#throttle");

const updateDebounceText = debounce((text) => {
  debounceText.textContent = text;
}, 1000);

const updateThrottleText = throttle((text) => {
  throttleText.textContent = text;
}, 1000);

input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
});

function debounce(cb, delay) {
  let timeout;

  return (text) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(text);
    }, delay);
  };
}

function throttle(cb, delay) {
  let shouldWait = false;
  let waitingText;

  const timeoutFunc = () => {
    if (waitingText === null) {
      shouldWait = false;
    } else {
      cb(waitingText);
      waitingText = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (text) => {
    if (shouldWait) {
      waitingText = text;
      return;
    }

    cb(text);
    shouldWait = true;

    setTimeout(timeoutFunc, delay);
  };
}
