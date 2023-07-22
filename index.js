//  Function to handle the continuous scrolling of cards
  function scrollContinuously(element) {
    const container = element.closest(".top-divs");
    const cards = container.querySelectorAll(".movingcards");

    let scrollPosition = 0;
    let cardWidth = cards[0].offsetWidth + 20; // 20px margin-right
    let scrollSpeed = 1; // Change this value to adjust scrolling speed

    function updateScroll() {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= cardWidth) {
        scrollPosition -= cardWidth;
        container.appendChild(cards[0]);
      }
      container.scrollLeft = scrollPosition;
      requestAnimationFrame(updateScroll);
    }

    requestAnimationFrame(updateScroll);
  }

  // Function to start scrolling when hovering over the container
  function startScrolling() {
    const container = document.querySelector(".top-divs");
    scrollContinuously(container);
  }

  // Start scrolling when the page is loaded
  window.addEventListener("load", startScrolling);


  
  // Function to check if the element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add the 'animate' class when the element is in view
  function animateOnScroll() {
    const signup1 = document.querySelector('.signup-1');
    const signup2 = document.querySelector('.signup-2');

    if (isInViewport(signup1)) {
      signup1.classList.add('animate');
    }

    if (isInViewport(signup2)) {
      signup2.classList.add('animate');
    }
  }

  // Listen for the 'scroll' event and trigger the animation
  window.addEventListener('scroll', animateOnScroll);

  // Trigger the animation on page load if the elements are already in view
  animateOnScroll();

  // Sliding in animation stops


