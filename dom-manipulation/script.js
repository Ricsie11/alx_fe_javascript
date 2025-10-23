document.addEventListener("DOMContentLoaded", () => {
  // Create an array of quotes
  const quotes = [
    {
      text: "The best way to get started is to quit talking and begin doing.",
      category: "Motivation",
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      category: "Life",
    },
    {
      text: "Your time is limited, so don’t waste it living someone else’s life.",
      category: "Inspiration",
    },
    { text: "Stay positive", category: "Motivation" },
    { text: "Work hard", category: "Success" },
    {
      text: '"A man does what he must in spite of personal consequences, in spite of obstacles and dangers and pressures and that is the basis of all human morality" - John F Kennedy',
      category: "Leadership",
    },
    {
      text: `"It\'s not bragging if you can back it up." - Muhammad Ali`,
      category: "Success",
    },
    {
      text: `"If my mind can conceive it, and my heart can believe it, then I can achieve it." - Muhammad Ali`,
      category: "Success",
    },
    {
      text: `"Build a life you don\'t need a vacation from." - Luke Belmar`,
      category: "Inspiration",
    },
    {
      text: `"Never say never, because limits, like fears, are often just an illusion." - Michael Jordan`,
      category: "Inspiration",
    },
    {
      text: `"To learn to succeed, you must first learn to fail.” - Michael Jordan`,
      category: "Inspiration",
    },
    {
      text: `"To live is to suffer, to survive is to find some meaning in the suffering." - Friedrich Nietzsche`,
      category: "Philosophy",
    },
    {
      text: "'He who has a why to live can bear almost any how.' - Friedrich Nietzsche",
      category: "Philosophy",
    },
    {
      text: "'Reading furnishes the mind only with materials of knowledge; it is thinking that makes what we read ours' - John Locke",
      category: "Philosophy",
    },
    {
      text: `"New opinions are always suspected, and usually opposed, without any other reason but because they are not already common." - John Locke`,
      category: "Philosophy",
    },
    {
      text: `"Patience is bitter, but its fruit is sweet." - Aristotle`,
      category: "Philosophy",
    },
    {
      text: `"The educated differ from the uneducated as much as the living differ from the dead" - Aristotle`,
      category: "Philosophy",
    },
    {
      text: `“The more you know, the more you realize you don\'t know." - Aristotle`,
      category: "Philosophy",
    },
    {
      text: `"Happiness depends upon ourselves." - Aristotle`,
      category: "Philosophy",
    },
    {
      text: `"I think it is possible for ordinary people to choose to be extraordinary" - Elon Musk`,
      category: "Motivation",
    },
    {
      text: "'“Any product that needs a manual to work is broken.”' -  Elon Musk",
      category: "Business",
    },
    {
      text: "'“If something's important enough, you should try. Even if the probable outcome is failure.”' -  Elon Musk",
      category: "Business",
    },
    {
      text: "Success is nothing more than a few simple disciplines, practiced every day. - Jim Rohn",
      category: "Motivation",
    },
    {
      text: "'Embrace what you don't know, especially in the beginning, because what you don't know can become your greatest asset.' - Sara Blakely",
      category: "Business",
    },
    {
      text: "'Failure is not the outcome, failure is not trying. Don't be afraid to fail.' - Sara Blakely",
      category: "Business",
    },
    {
      text: "'Discipline equals freedom.' - Jocko Willink",
      category: "Discipline",
    },
    {
      text: "'If you are not willing to risk the unusual, you will have to settle for the ordinary.' - Jim Rohn",
      category: "Motivation",
    },
    {
      text: "The only way to do great work is to love what you do.",
      category: "Motivation",
    },
    {
      text: "'Fate is in your hands and no one elses' - Byron Pulsifer",
      category: "Inspiration",
    },
    {
      text: `"Be the chief but never the lord." - Lao Tzu`,
      category: "Leadership",
    },
    {
      text: `"Nothing happens unless first we dream." - Carl Sandburg`,
      category: "Motivation",
    },
    { text: `"Well begun is half done." - Aristotle`, category: "Philosophy" },
    {
      text: `"Life is a learning experience, only if you learn." - Yogi Berra`,
      category: "Discipline",
    },
    {
      text: `"Self-complacency is fatal to progress." - Margaret Sangster`,
      category: "Motivation",
    },
    {
      text: `"Peace comes from within. Do not seek it without." - Buddha`,
      category: "Philosophy",
    },
    {
      text: `"What you give is what you get." - Byron Pulsifer`,
      category: "Motivation",
    },
    {
      text: `"We can only learn to love by loving." - Iris Murdoch`,
      category: "Inspiration",
    },
    {
      text: `"Life is change. Growth is optional. Choose wisely." - Karen Clark`,
      category: "Inspiration",
    },
    {
      text: `"You\'ll see it when you believe it." - Wayne Dyer`,
      category: "Success",
    },
    {
      text: `"To lead people walk behind them." - Lao Tzu`,
      category: "Leadership",
    },
    {
      text: `"Having nothing, nothing can he lose." - William Shakespeare`,
      category: "Poets",
    },
    {
      text: `"Trouble is only opportunity in work clothes." - Henry J. Kaiser`,
      category: "Inspiration",
    },
    {
      text: `"A rolling stone gathers no moss." - Publilius Syrus`,
      category: "Motivation",
    },
    {
      text: `"Ideas are the beginning points of all fortunes." - Napoleon Hill`,
      category: "Motivation",
    },
    {
      text: "'Everything in life is luck.' - Donald Trump",
      category: "Philosopy",
    },
    {
      text: "'Doing nothing is better than being busy doing nothing.' - Lao Tzu",
      category: "Philosophy",
    },
    {
      text: "'Trust yourself. You know more than you think you do.' - Benjamin Spock",
      category: "Motivation",
    },
    {
      text: "'Study the past, if you would divine the future.' - Confucius",
      category: "Philosophy",
    },
    {
      text: "Believe you can and you're halfway there.",
      category: "Motivation",
    },
    {
      text: "Do something today that your future self will thank you for.",
      category: "Inspiration",
    },
    {
      text: "Don’t watch the clock; do what it does. Keep going.",
      category: "Productivity",
    },
    { text: "Dream big and dare to fail.", category: "Courage" },
    {
      text: "The secret of getting ahead is getting started.",
      category: "Success",
    },
    {
      text: "It always seems impossible until it's done.",
      category: "Determination",
    },
    { text: "Little by little, a little becomes a lot.", category: "Growth" },
    { text: "Mistakes are proof you are trying.", category: "Encouragement" },
    {
      text: "Success is the sum of small efforts repeated day in and day out.",
      category: "Persistence",
    },
    { text: "Your only limit is your mind.", category: "Mindset" },
  ];

  const quoteDisplay = document.getElementById("quoteDisplay");
  const newQuoteButton = document.getElementById("newQuote");

  // Function to show a random quote
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteDisplay.innerHTML = `<p>${quote.text}</p><small>${quote.category}</small>`;
  }
  // Show random quote when user clicks button
  newQuoteButton.addEventListener("click", showRandomQuote);




  // Form for user to create their own Quote
  function createAddQuoteForm() {
    const formContainer = document.createElement("div");

    // Create input for quote text
    const textInput = document.createElement("input");
    textInput.id = "newQuoteText";
    textInput.type = "text";
    textInput.placeholder = "Enter a new quote";

    // Create input for quote category
    const quoteCategory = document.createElement("input");
    quoteCategory.id = "newQuoteCategory";
    quoteCategory.type = "text";
    quoteCategory.placeholder = "Enter quote category";

    // Create button for adding quote
    const addButton = document.createElement("button");
    addButton.id = "addQuoteBtn";
    addButton.textContent = "add quote";

    // Add everything to container
    formContainer.appendChild(textInput);
    formContainer.appendChild(quoteCategory);
    formContainer.appendChild(addButton);

    document.body.appendChild(formContainer);
    
    formContainer.classList.add("quote-form");
  
  }

  createAddQuoteForm();
  document.getElementById("addQuoteBtn").addEventListener("click", addQuote);
});
