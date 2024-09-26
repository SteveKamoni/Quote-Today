function handleScroll() {
  const elements = document.querySelectorAll(".content");

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setTimeout(() => {
        element.classList.add("visible");
      }, 900);
    }
  });
}

window.addEventListener("load", handleScroll);
