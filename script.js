const themeBtn = document.getElementById("theme-btn");
const happyBtn = document.getElementById("happy");
const sadBtn = document.getElementById("sad");
const angryBtn = document.getElementById("angry");
const imageModal = document.getElementById("mc1-img");
const closeModal = document.getElementById("quote");
const authorModal = document.getElementById("author");

themeBtn.addEventListener("click", () => {
  alert("Is working!");
});

const happy = [
  {
    image:
      "https://imgs.search.brave.com/gPV0AozJVEKCw6Kz89mns1cqm8ic9G1nf6y7o2P4uMw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8xLzFiL05p/ZXR6c2NoZTE4N2Eu/anBnLzUxMnB4LU5p/ZXR6c2NoZTE4N2Eu/anBn",
    quote: "Without music, life would be a mistake.",
    author: "Nietzsche Fredrick",
  },
  {
    image:
      "https://imgs.search.brave.com/rgxh3A8FekCJ0ItdF7bKqXgXfHlUdh9Y1A-aZxvWeh4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LnBpeGVsc2Rr/LmNvbS9waG90by83/NzcvdGhvbWFzLWRp/dHRvLmpwZw",
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },

  {
    image:
      "https://imgs.search.brave.com/7ZR6JHC4e-QqNwSKrkgyd9MFl2HbbgfZP_bbd4qqYhM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vaGVyaXRhZ2Uvc2Vy/cmFfYmVja2V0dC9B/bGJlcnRfRWluc3Rl/aW5fanBlZy5qcGc",
    quote:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Buddha",
  },
  {
    image:
      "https://imgs.search.brave.com/A7b8t45ykgmCs9L6-_MnlVsVnv__R8Pd64ZRwHESjms/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3NldHMuc2ltcGx5Y2l0aWRlbGlmZS5vcmcvYXMvYmxvZy90aHVtYm5haWxzLzYzZjc2MWFlNzMxYTViMGNhZjM3NTAwYmEtam9obi1rZW5uZWR5LmpwZw",
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    image:
      "https://imgs.search.brave.com/T2U9GtH3EZ00plx1txWgxb3PUgGRymktQCrFo8KcdE4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/cGVvcGxlbGlrZXVz/LmNvbS9wcm9maWxl/L3Bob3RvL2FsYmVy/dC1laW5zdGVpbi5q/cGc",
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    image:
      "https://imgs.search.brave.com/4EzMsBygIljglPEUBWeqW1vxgNmXta3VRlqaHPgMFT4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8wNC9NYWhhdG1h/LVVhbmktcHJvZmls/ZS1QSE9UTy5qcGc",
    quote: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
];

const pullHappy = happy.map((happy) => {});

happyBtn.addEventListener("click", () => {});
