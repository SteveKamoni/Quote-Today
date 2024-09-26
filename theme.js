const navigation = document.querySelector(".nav");
const themeBtn = document.querySelector(".btn");

const theme = {
  dark: {
    nav: "#112d42",
    text: "#a7bdc8",
    background: "./images/wallpaper dar.jpg",
  },
};

localStorage.setItem("theme", JSON.stringify(theme));

themeBtn.addEventListener("click", () => {
  // call the them to use
  const storedTheme = localStorage.getItem(JSON.stringify("theme"));
  //   store the theme for use
  const selectedTheme = storedTheme.dark;

  navigation.style.background = selectedTheme.nav;

  localStorage.setItem("storedTheme", "dark");
});
