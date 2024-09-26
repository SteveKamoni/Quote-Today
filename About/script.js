function handleScroll() {
  const elements = document.querySelectorAll(".content-about");

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setTimeout(() => {
        element.classList.add("visible");
      }, 1000);
    }
  });
}

function handleScrollAgain() {
  const elements = document.querySelectorAll(".content-right");

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setTimeout(() => {
        element.classList.add("visible");
      }, 1000);
    }
  });
}

window.addEventListener("load", handleScroll);
window.addEventListener("load", handleScrollAgain);
