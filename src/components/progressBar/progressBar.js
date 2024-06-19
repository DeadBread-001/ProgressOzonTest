document.addEventListener('DOMContentLoaded', function () {
  const circularProgress = document.querySelector(".circular-progress");
  const valueInput = document.getElementById('valueInput'),
      animateToggle = document.getElementById('animateToggle'),
      hideToggle = document.getElementById('hideToggle');

  valueInput.addEventListener('input', function () {
    let value = Math.max(0, Math.min(100, valueInput.value));
    valueInput.value = value;
    updateProgress(value);
  });

  animateToggle.addEventListener('change', function() {
    if (animateToggle.checked) {
      startAnimation();
    } else {
      stopAnimation();
    }
  });

  hideToggle.addEventListener('change', function () {
    circularProgress.classList.toggle('circular-progress__hidden', hideToggle.checked);
  });

  function updateProgress(value) {
    circularProgress.style.background = `conic-gradient(#005cff ${value * 3.6}deg, #eaf0f6 0deg)`;
  }

  let animationInterval;

  function startAnimation() {
    animationInterval = setInterval(function () {
      let currentValue = parseInt(valueInput.value);
      if (currentValue >= 100) {
        currentValue = 0;
      } else {
        currentValue++;
      }
      valueInput.value = currentValue;
      updateProgress(currentValue);
    }, 150);
  }

  function stopAnimation() {
    clearInterval(animationInterval);
  }
});
