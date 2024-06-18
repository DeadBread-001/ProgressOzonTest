document.addEventListener('DOMContentLoaded', function() {
  const valueInput = document.getElementById('valueInput');
  const animateToggle = document.getElementById('animateToggle');
  const hideToggle = document.getElementById('hideToggle');
  const progressLeft = document.querySelector('.progress-left');
  const progressRight = document.querySelector('.progress-right');
  const progressValue = document.querySelector('.progress-value');

  valueInput.addEventListener('input', function() {
    updateProgress(parseInt(valueInput.value, 10));
  });

  animateToggle.addEventListener('change', function() {
    if (animateToggle.checked) {
      startAnimation();
    } else {
      stopAnimation();
    }
  });

  hideToggle.addEventListener('change', function() {
    if (hideToggle.checked) {
      document.querySelector('.progress').style.display = 'none';
    } else {
      document.querySelector('.progress').style.display = 'block';
    }
  });

  function updateProgress(value) {
    const angle = (value / 100) * 360;
    if (angle <= 180) {
      progressLeft.style.transform = `rotate(${angle}deg)`;
      progressRight.style.transform = 'rotate(0deg)';
    } else {
      progressLeft.style.transform = 'rotate(180deg)';
      progressRight.style.transform = `rotate(${angle - 180}deg)`;
    }
    progressValue.textContent = `${value}%`;
  }

  let animationInterval;

  function startAnimation() {
    animationInterval = setInterval(function() {
      let currentValue = parseInt(valueInput.value, 10);
      currentValue = (currentValue + 1) % 101;
      valueInput.value = currentValue;
      updateProgress(currentValue);
    }, 100);
  }

  function stopAnimation() {
    clearInterval(animationInterval);
  }
});
