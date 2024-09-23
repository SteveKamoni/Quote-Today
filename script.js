const themeBtn = document.getElementById("theme-btn");
const happyBtn = document.getElementById("happy");
const sadBtn = document.getElementById("sad");
const angryBtn = document.getElementById("angry");
const imageModal = document.getElementById("mc1-img");
const closeModal = document.getElementById("mc1-close");
const authorModal = document.getElementById("author");
const modal = document.querySelector(".modal-container");
const quoteModal = document.getElementById("quote");
const body = document.getElementById("body");

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
  {
    image: "https://example.com/image1.jpg",
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    image: "https://example.com/image2.jpg",
    quote:
      "For every minute you are angry, you lose sixty seconds of happiness.",
    author: "Ralph Waldo Emerson",
  },
  {
    image: "https://example.com/image3.jpg",
    quote:
      "The most important thing is to enjoy your life—to be happy—it's all that matters.",
    author: "Audrey Hepburn",
  },
  {
    image: "https://example.com/image4.jpg",
    quote: "Happiness is a direction, not a place.",
    author: "Sydney J. Harris",
  },
  {
    image: "https://example.com/image5.jpg",
    quote: "Happiness depends upon ourselves.",
    author: "Aristotle",
  },
  {
    image: "https://example.com/image6.jpg",
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    image: "https://example.com/image7.jpg",
    quote:
      "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "Mahatma Gandhi",
  },
  {
    image: "https://example.com/image8.jpg",
    quote:
      "Count your age by friends, not years. Count your life by smiles, not tears.",
    author: "John Lennon",
  },
  {
    image: "https://example.com/image9.jpg",
    quote:
      "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
  },
  {
    image: "https://example.com/image10.jpg",
    quote:
      "Happiness lies in the joy of achievement and the thrill of creative effort.",
    author: "Franklin D. Roosevelt",
  },
  {
    image: "https://example.com/image11.jpg",
    quote: "The best way to cheer yourself is to try to cheer someone else up.",
    author: "Mark Twain",
  },
  {
    image: "https://example.com/image12.jpg",
    quote:
      "The happiness of your life depends upon the quality of your thoughts.",
    author: "Marcus Aurelius",
  },
  {
    image: "https://example.com/image13.jpg",
    quote:
      "True happiness arises, in the first place, from the enjoyment of oneself.",
    author: "Joseph Addison",
  },
  {
    image: "https://example.com/image14.jpg",
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein",
  },
  {
    image: "https://example.com/image15.jpg",
    quote:
      "Happiness is the secret to all beauty. There is no beauty without happiness.",
    author: "Christian Dior",
  },
  {
    image: "https://example.com/image16.jpg",
    quote:
      "A calm and modest life brings more happiness than the pursuit of success combined with constant restlessness.",
    author: "Albert Einstein",
  },
  {
    image: "https://example.com/image17.jpg",
    quote: "Happiness is only real when shared.",
    author: "Christopher McCandless",
  },
  {
    image: "https://example.com/image18.jpg",
    quote:
      "The moments of happiness we enjoy take us by surprise. It is not that we seize them, but that they seize us.",
    author: "Ashley Montagu",
  },
  {
    image: "https://example.com/image19.jpg",
    quote:
      "Happiness is like a butterfly; the more you chase it, the more it will elude you, but if you turn your attention to other things, it will come and sit softly on your shoulder.",
    author: "Henry David Thoreau",
  },
  {
    image: "https://example.com/image20.jpg",
    quote: "To be happy, we must not be too concerned with others.",
    author: "Albert Camus",
  },
];

const sad = [
  {
    image: "https://example.com/sad_image1.jpg",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    image: "https://example.com/sad_image2.jpg",
    quote: "You may encounter many defeats, but you must not be defeated.",
    author: "Maya Angelou",
  },
  {
    image: "https://example.com/sad_image3.jpg",
    quote:
      "Although the world is full of suffering, it is also full of the overcoming of it.",
    author: "Helen Keller",
  },
  {
    image: "https://example.com/sad_image4.jpg",
    quote:
      "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    image: "https://example.com/sad_image5.jpg",
    quote: "We must embrace pain and burn it as fuel for our journey.",
    author: "Kenji Miyazawa",
  },
  {
    image: "https://example.com/sad_image6.jpg",
    quote: "When you come to the end of your rope, tie a knot and hang on.",
    author: "Franklin D. Roosevelt",
  },
  {
    image: "https://example.com/sad_image7.jpg",
    quote:
      "Life doesn’t get easier or more forgiving, we get stronger and more resilient.",
    author: "Steve Maraboli",
  },
  {
    image: "https://example.com/sad_image8.jpg",
    quote: "Difficulties in life are intended to make us better, not bitter.",
    author: "Dan Reeves",
  },
  {
    image: "https://example.com/sad_image9.jpg",
    quote: "We must meet the challenge rather than wish it were not before us.",
    author: "William J. Brennan",
  },
  {
    image: "https://example.com/sad_image10.jpg",
    quote: "Sometimes even to live is an act of courage.",
    author: "Seneca",
  },
  {
    image: "https://example.com/sad_image11.jpg",
    quote: "Pain is inevitable. Suffering is optional.",
    author: "Haruki Murakami",
  },
  {
    image: "https://example.com/sad_image12.jpg",
    quote:
      "Rock bottom became the solid foundation on which I rebuilt my life.",
    author: "J.K. Rowling",
  },
  {
    image: "https://example.com/sad_image13.jpg",
    quote: "Fall seven times, stand up eight.",
    author: "Japanese Proverb",
  },
  {
    image: "https://example.com/sad_image14.jpg",
    quote: "Out of difficulties grow miracles.",
    author: "Jean de La Bruyère",
  },
  {
    image: "https://example.com/sad_image15.jpg",
    quote:
      "You have power over your mind – not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius",
  },
  {
    image: "https://example.com/sad_image16.jpg",
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    image: "https://example.com/sad_image17.jpg",
    quote:
      "Do not pray for an easy life, pray for the strength to endure a difficult one.",
    author: "Bruce Lee",
  },
  {
    image: "https://example.com/sad_image18.jpg",
    quote:
      "Perseverance is not a long race; it is many short races one after the other.",
    author: "Walter Elliot",
  },
  {
    image: "https://example.com/sad_image19.jpg",
    quote: "Tough times never last, but tough people do.",
    author: "Robert H. Schuller",
  },
  {
    image: "https://example.com/sad_image20.jpg",
    quote:
      "The strongest people are not those who show strength in front of us but those who win battles we know nothing about.",
    author: " Jonathan Harnisch",
  },
];

const angry = [
  {
    image: "https://example.com/angry_image1.jpg",
    quote:
      "For every minute you remain angry, you give up sixty seconds of peace of mind.",
    author: "Ralph Waldo Emerson",
  },
  {
    image: "https://example.com/angry_image2.jpg",
    quote: "Anger is a bad advisor.",
    author: "African Proverb",
  },
  {
    image: "https://example.com/angry_image3.jpg",
    quote:
      "Holding onto anger is like drinking poison and expecting the other person to die.",
    author: "Buddha",
  },
  {
    image: "https://example.com/angry_image4.jpg",
    quote:
      "You will not be punished for your anger, you will be punished by your anger.",
    author: "Buddha",
  },
  {
    image: "https://example.com/angry_image5.jpg",
    quote: "Anger is one letter short of danger.",
    author: "Anonymous",
  },
  {
    image: "https://example.com/angry_image6.jpg",
    quote: "The greatest remedy for anger is delay.",
    author: "Seneca",
  },
  {
    image: "https://example.com/angry_image7.jpg",
    quote: "Anger makes dull men witty, but it keeps them poor.",
    author: "Francis Bacon",
  },
  {
    image: "https://example.com/angry_image8.jpg",
    quote: "Get mad, then get over it.",
    author: "Colin Powell",
  },
  {
    image: "https://example.com/angry_image9.jpg",
    quote:
      "Anger is a valid emotion, but it can lead to destruction if not controlled.",
    author: "Unknown",
  },
  {
    image: "https://example.com/angry_image10.jpg",
    quote:
      "When angry, count to ten before you speak. If very angry, count to one hundred.",
    author: "Thomas Jefferson",
  },
  {
    image: "https://example.com/angry_image11.jpg",
    quote: "A man is about as big as the things that make him angry.",
    author: "Abraham Lincoln",
  },
  {
    image: "https://example.com/angry_image12.jpg",
    quote:
      "Speak when you are angry and you will make the best speech you will ever regret.",
    author: "Ambrose Bierce",
  },
  {
    image: "https://example.com/angry_image13.jpg",
    quote: "Anger is a short madness.",
    author: "Horace",
  },
  {
    image: "https://example.com/angry_image14.jpg",
    quote:
      "There are two things a person should never be angry at: what they can help and what they cannot.",
    author: "Plato",
  },
  {
    image: "https://example.com/angry_image15.jpg",
    quote: "Anger and intolerance are the enemies of correct understanding.",
    author: "Mahatma Gandhi",
  },
  {
    image: "https://example.com/angry_image16.jpg",
    quote: "The best fighter is never angry.",
    author: "Lao Tzu",
  },
  {
    image: "https://example.com/angry_image17.jpg",
    quote:
      "Anger can be a powerful motivator, but it must be channeled wisely.",
    author: "Unknown",
  },
  {
    image: "https://example.com/angry_image18.jpg",
    quote: "It’s not the problem that causes anger, but your response to it.",
    author: "Unknown",
  },
  {
    image: "https://example.com/angry_image19.jpg",
    quote:
      "Do not let your anger lead you to hatred; instead, let it inspire you to change.",
    author: "Unknown",
  },
  {
    image: "https://example.com/angry_image20.jpg",
    quote: "Anger is a symptom of the fear of losing control.",
    author: "Unknown",
  },
];

window.onload = function () {
  setTimeout(() => {
    document.getElementById("intro-overlay").style.opacity = 0;
  }, 2000);
};

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

happyBtn.addEventListener("click", () => {
  const happyRandom = Math.floor(Math.random() * happy.length);
  const randomQuotes = happy[happyRandom];

  imageModal.innerHTML = randomQuotes.image;
  quoteModal.innerHTML = randomQuotes.quote;
  authorModal.innerHTML = randomQuotes.author;
  modal.classList.remove("hidden");
});

sadBtn.addEventListener("click", () => {
  const sadRandom = Math.floor(Math.random() * sad.length);
  const sadQuote = sad[sadRandom];

  imageModal.innerHTML = sadQuote.image;
  quoteModal.innerHTML = sadQuote.quote;
  authorModal.innerHTML =
    sadQuote.author === `Unknown` ? "Go Look 😄" : sadQuote.author;
  modal.classList.remove("hidden");
});

angryBtn.addEventListener("click", () => {
  const angryRandom = Math.floor(Math.random() * angry.length);

  const angryQuote = angry[angryRandom];

  imageModal.innerHTML = angryQuote.image;
  quoteModal.innerHTML = angryQuote.quote;
  authorModal.innerHTML =
    angryQuote.author === `Unknown` ? "Go Look 😄" : angryQuote.author;
  modal.classList.remove("hidden");
});
