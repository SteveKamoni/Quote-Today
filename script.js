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
const overlay = document.getElementById("intro-overlay");
themeBtn.addEventListener("click", () => {
  alert("Is working!");
});

const happy = [
  {
    image: "./images/logo-no-background.png",
    quote: "Without music, life would be a mistake.",
    author: "Nietzsche Fredrick",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },

  {
    image: "./images/logo-no-background.png",
    quote:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Buddha",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    image: "./images/logo-no-background.pngg",
    quote:
      "For every minute you are angry, you lose sixty seconds of happiness.",
    author: "Ralph Waldo Emerson",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "The most important thing is to enjoy your life—to be happy—it's all that matters.",
    author: "Audrey Hepburn",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "Happiness is a direction, not a place.",
    author: "Sydney J. Harris",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "Happiness depends upon ourselves.",
    author: "Aristotle",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "Mahatma Gandhi",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "Count your age by friends, not years. Count your life by smiles, not tears.",
    author: "John Lennon",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
  },
  {
    image: "././images/logo-no-background.pngg",
    quote:
      "Happiness lies in the joy of achievement and the thrill of creative effort.",
    author: "Franklin D. Roosevelt",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "The best way to cheer yourself is to try to cheer someone else up.",
    author: "Mark Twain",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "The happiness of your life depends upon the quality of your thoughts.",
    author: "Marcus Aurelius",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "True happiness arises, in the first place, from the enjoyment of oneself.",
    author: "Joseph Addison",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "Happiness is the secret to all beauty. There is no beauty without happiness.",
    author: "Christian Dior",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "A calm and modest life brings more happiness than the pursuit of success combined with constant restlessness.",
    author: "Albert Einstein",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "Happiness is only real when shared.",
    author: "Christopher McCandless",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "The moments of happiness we enjoy take us by surprise. It is not that we seize them, but that they seize us.",
    author: "Ashley Montagu",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "Happiness is like a butterfly; the more you chase it, the more it will elude you, but if you turn your attention to other things, it will come and sit softly on your shoulder.",
    author: "Henry David Thoreau",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "To be happy, we must not be too concerned with others.",
    author: "Albert Camus",
  },
];

const sad = [
  {
    image: "./images/logo-no-background.png",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "You may encounter many defeats, but you must not be defeated.",
    author: "Maya Angelou",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "Although the world is full of suffering, it is also full of the overcoming of it.",
    author: "Helen Keller",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "We must embrace pain and burn it as fuel for our journey.",
    author: "Kenji Miyazawa",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "When you come to the end of your rope, tie a knot and hang on.",
    author: "Franklin D. Roosevelt",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "Life doesn’t get easier or more forgiving, we get stronger and more resilient.",
    author: "Steve Maraboli",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "Difficulties in life are intended to make us better, not bitter.",
    author: "Dan Reeves",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "We must meet the challenge rather than wish it were not before us.",
    author: "William J. Brennan",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "Sometimes even to live is an act of courage.",
    author: "Seneca",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "Pain is inevitable. Suffering is optional.",
    author: "Haruki Murakami",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "Rock bottom became the solid foundation on which I rebuilt my life.",
    author: "J.K. Rowling",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "Fall seven times, stand up eight.",
    author: "Japanese Proverb",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "Out of difficulties grow miracles.",
    author: "Jean de La Bruyère",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "You have power over your mind – not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "Do not pray for an easy life, pray for the strength to endure a difficult one.",
    author: "Bruce Lee",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "Perseverance is not a long race; it is many short races one after the other.",
    author: "Walter Elliot",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "Tough times never last, but tough people do.",
    author: "Robert H. Schuller",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "The strongest people are not those who show strength in front of us but those who win battles we know nothing about.",
    author: " Jonathan Harnisch",
  },
];

const angry = [
  {
    image: "./images/logo-no-background.png",
    quote:
      "For every minute you remain angry, you give up sixty seconds of peace of mind.",
    author: "Ralph Waldo Emerson",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "Anger is a bad advisor.",
    author: "African Proverb",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "Holding onto anger is like drinking poison and expecting the other person to die.",
    author: "Buddha",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "You will not be punished for your anger, you will be punished by your anger.",
    author: "Buddha",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "Anger is one letter short of danger.",
    author: "Anonymous",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "The greatest remedy for anger is delay.",
    author: "Seneca",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "Anger makes dull men witty, but it keeps them poor.",
    author: "Francis Bacon",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "Get mad, then get over it.",
    author: "Colin Powell",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "Anger is a valid emotion, but it can lead to destruction if not controlled.",
    author: "Unknown",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "When angry, count to ten before you speak. If very angry, count to one hundred.",
    author: "Thomas Jefferson",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "A man is about as big as the things that make him angry.",
    author: "Abraham Lincoln",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "Speak when you are angry and you will make the best speech you will ever regret.",
    author: "Ambrose Bierce",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "Anger is a short madness.",
    author: "Horace",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "There are two things a person should never be angry at: what they can help and what they cannot.",
    author: "Plato",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "Anger and intolerance are the enemies of correct understanding.",
    author: "Mahatma Gandhi",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "The best fighter is never angry.",
    author: "Lao Tzu",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "Anger can be a powerful motivator, but it must be channeled wisely.",
    author: "Unknown",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "It’s not the problem that causes anger, but your response to it.",
    author: "Unknown",
  },
  {
    image: "./images/logo-no-background.png",
    quote:
      "Do not let your anger lead you to hatred; instead, let it inspire you to change.",
    author: "Unknown",
  },
  {
    image: "./images/logo-no-background.png",
    quote: "Anger is a symptom of the fear of losing control.",
    author: "Unknown",
  },
];

window.onload = function () {
  setTimeout(() => {
    overlay.style.opacity = 0;
  }, 2000);

  setTimeout(() => {
    overlay.style.width = 0;
    overlay.style.height = 0;
  }, 4000);
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
