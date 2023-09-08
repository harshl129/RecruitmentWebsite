const statBoxes = document.querySelectorAll('.stat-box');

const options = {
  threshold: 0.8
};

const animateNumbers = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const numberElement = target.querySelector('.stat-number');
      const endNumber = parseInt(numberElement.getAttribute('data-target'), 10);
      let currentNumber = 0;

      const incrementNumber = () => {
        if (currentNumber < endNumber) {
          currentNumber++;
          numberElement.innerText = currentNumber;
          requestAnimationFrame(incrementNumber);
        }
      };

      requestAnimationFrame(incrementNumber);
      observer.unobserve(target);
    }
  });
};

const observer = new IntersectionObserver(animateNumbers, options);

statBoxes.forEach(box => {
  observer.observe(box);
});
