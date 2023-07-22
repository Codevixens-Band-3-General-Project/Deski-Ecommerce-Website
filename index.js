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

