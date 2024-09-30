const navigation = document.querySelector(".nav");
const themeBtn = document.querySelector(".btn");
const Body = document.getElementById("body");
const fadeEffect = document.querySelector(".fade-backg");

const theme = {
  dark: {
    nav: "#112d42",
    text: "#a7bdc8",
    background: "url('./images/light.jpg')",
  },
};

// localStorage.setItem("theme", JSON.stringify(theme));

// themeBtn.addEventListener("click", () => {
//   // call the them to use
//   const storedTheme = JSON.parse(localStorage.getItem("theme"));
//   //   store the theme for use
//   const selectedTheme = storedTheme.dark;

//   // navigation.style.background = selectedTheme.nav;
//   backgroundImage.style.backgroundImage = selectedTheme.background;
//   backgroundImage.classList.add("load");
//   setTimeout(() => {
//     backgroundImage.style.opacity = 1;
//   }, 1000);
//   localStorage.setItem("storedTheme", "dark");
// });

themeBtn.addEventListener("click", () => {
  Body.style.backgroundImage = "url('./images/light.jpg')";

  setTimeout(() => {
    Body.style.opacity = 1;
  }, 600);
});
