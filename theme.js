const navigation = document.querySelector(".nav");
const themeBtn = document.querySelector(".btn");
const backgroundImage = document.getElementById("body");
const fadeEffect = document.querySelector(".fade-backg");
const theme = {
  dark: {
    nav: "#112d42",
    text: "#a7bdc8",
    background: "url('./images/light.jpg')",
  },
};

localStorage.setItem("theme", JSON.stringify(theme));

themeBtn.addEventListener("click", () => {
  // call the them to use
  const storedTheme = JSON.parse(localStorage.getItem("theme"));
  //   store the theme for use
  const selectedTheme = storedTheme.dark;

  // navigation.style.background = selectedTheme.nav;
  setTimeout(() => {
    backgroundImage.style.backgroundImage = selectedTheme.background;
    fadeEffect.classList.add("load");
  }, 1000);
  localStorage.setItem("storedTheme", "dark");
});
