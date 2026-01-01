const quotesByMood = {
  happy: [
    { text: "Happiness is a direction, not a place.", author: "Sydney J. Harris" },
    { text: "Smile — it’s free therapy.", author: "Unknown" },
    { text: "Don’t worry. Be Happy.", author: "Bobby McFerrin" },
    { text: "The best way to cheer yourself up is to try to cheer someone else up.", author: "Mark Twain" },
    { text: "The most important thing is to enjoy your life– to be happy. It’s all that matters.", author: "Audrey Hepburn" },
    { text: "Don’t copy. Be Happy.", author: "Dr. Hari Vasudevan" },
    { text: "Think of all the beauty still left around you and be happy.", author: "Anne Frank" }
    ],
  sad: [
    { text: "Every human walks around with a certain kind of sadness.", author: "Brad Pitt" },
    { text: "Tears come from the heart, not the brain.", author: "Leonardo da Vinci" },
    { text: "Don't go around saying the world owes you a living. The world owes you nothing. It was here first.", author: "Mark Twain" },
    { text: "The word 'happy' would lose its meaning if it were not balanced by sadness.", author: "Carl Jung" },
    { text: "I  wish I could go back to the day I met you and just walk away.", author: "Unknown" },
    { text: "Don't grieve over your problems. Accept them and move forward.", author: "Unknown"}
  ],
  motivated: [
    { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
    { text: "Life is a journey, not a destination.", author: "Ralph Waldo Emerson" },
    { text: "Inspiration does exist, but it must find you working.", author: "Pablo Picasso" },
    { text: "Success consists of going from failure to failure without loss of enthusiasm.", author: "Winston Churchill" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "Believe you can do it and you're halfway there.", author: "Emily Dickinson" }
  ],
  love: [
    { text: "We are most alive when we're in love.", author: "John Updike" },
    { text: "Love all, trust a few, do wrong to none.", author: "Shakespeare" },
    { text: "You pierce my soul. I am half agony. Half hope. Tell me not that I am too late, that such precious feelings are gone for ever.", author: "Jane Austen" },
    { text: "You are my heart, my life, my one and only thought.", author: "Arthur Conan Doyle" },
    { text: "You are sunlight through a window, which I stand in, warmed.", author: "Jessie Burton" }
  ],
  angry: [
    { text: "Never go to bed mad. Stay up and fight.", author: "Phyllis Diller" },
    { text: "Angry people are not always wise.", author: "Jane Austen" },
    { text: "Bitterness is like cancer. It eats upon the host. But anger is like fire. It burns it all clean.", author: " Maya Angelou"},
    { text: "When angry, count four. When very angry, swear.", author: "Unknown" },
    { text: "Anger is like flowing water; there's nothing wrong with it as long as you let it flow.", author: "C. JoyBell" },
  ]
};

function generateQuote() {
  const input = document.getElementById("moodInput").value.trim().toLowerCase();

  if (!input) {
    alert("Please enter a mood first!");
    return;
  }

  if (!quotesByMood[input]) {
    document.getElementById("quote").innerText = "Sorry, I don't have quotes for that mood ";
    document.getElementById("author").innerText = "";
    return;
  }

  const moodQuotes = quotesByMood[input];
  const randomIndex = Math.floor(Math.random() * moodQuotes.length);

  document.getElementById("quote").innerText = `"${moodQuotes[randomIndex].text}"`;
  document.getElementById("author").innerText = `— ${moodQuotes[randomIndex].author}`;
}

