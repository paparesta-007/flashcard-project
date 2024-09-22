"use strict";

window.onload = function () {
  // Dichiarazioni variabili
  const flashcard = document.getElementById("flashcard");
  const nextBtn = document.getElementById("nextBtn");
  const questionList = document.getElementById("questionList");
  const bgSwitchBtn = document.getElementById("bgSwitchBtn");
  const stars = ["★", "✩", "｡", "✮", "✧", "₊", "✦"];
  let audio = document.getElementById("audio");
  let currentIndex = 0;
  let playingAudio = false;
  let btnAudio = document.getElementById("bgAudio");
  let currentBg = 1;
  let ShowButton = false;
  let bgFile = document.getElementById("bgFile");
  let AllQuestion = document.getElementById("AllQuestion");
  const randomTime = Math.floor(Math.random() * audio.duration);
  btnShowMoreButton.addEventListener("click", function () {
    ShowButton = !ShowButton; // Alterna lo stato della variabile
    const elementsToShow = [btnAudio, bgSwitchBtn, bgFile, AllQuestion];
    

    elementsToShow.forEach((element) => {
      if (element) {
        // Aggiungi o rimuovi la classe 'show' per cambiare visibilità e opacità
        element.classList.toggle("show", ShowButton);
        
      }
    });
  });

  bgFile.addEventListener("click", function () {
    console.log("bgFile");
    window.open("./Notes/STORIA 17-21.docx","_blak");
  })

  audio.currentTime = randomTime;

  const flashcards = [
    {
      question: "Where was Oliver Twist born?",
      answer: "Oliver Twist was born in the workhouse."
    },
    {
      question: "How did Mr. Bumble choose Oliver's surname?",
      answer: "Mr. Bumble decided to give Oliver the surname 'Twist' based on alphabetical order."
    },
    {
      question: "Why did Oliver ask for more soup?",
      answer: "The boys in the workhouse decided that someone should ask for more soup, and Oliver was chosen."
    },
    {
      question: "What happened to Oliver after he asked for more soup?",
      answer: "The master hit him and locked him in a dark room. A sign offering 5 pounds for Oliver was posted."
    },
    {
      question: "Who decided to take Oliver after the sign was posted?",
      answer: "Mr. Sowerberry, a man who made coffins, decided to take Oliver."
    },
    {
      question: "Where did Mr. Bumble take Oliver after Mr. Sowerberry agreed to take him?",
      answer: "Mr. Bumble took Oliver to Mr. Sowerberry's house, where he was pushed into a dark room and fed from a dog's plate."
    },
    {
      question: "Who made Oliver's life unpleasant at Mr. Sowerberry's house?",
      answer: "Noah, another boy working for Mr. Sowerberry, made Oliver's life unpleasant."
    },
    {
      question: "Why did Oliver attack Noah?",
      answer: "Oliver attacked Noah after Noah insulted his dead mother."
    },
    {
      question: "What did Mr. Bumble say was the reason for Oliver's bad behavior?",
      answer: "Mr. Bumble said Oliver's bad behavior was because they fed him meat instead of soup, as in the workhouse."
    },
    {
      question: "How did Oliver escape from Mr. Sowerberry's house?",
      answer: "Oliver escaped through a window."
    },
    {
      question: "Who did Oliver meet near the workhouse after his escape?",
      answer: "Oliver met his friend Dick near the workhouse."
    },
    {
      question: "Where was Oliver heading after meeting Dick?",
      answer: "Oliver was heading to London."
    },
    {
      question: "Who did Oliver meet when he arrived in Barnet?",
      answer: "Oliver met Jack Dawkins, also known as 'The Artful Dodger.'"
    },
    {
      question: "Where did Jack take Oliver after meeting him in Barnet?",
      answer: "Jack took Oliver to an old gentleman's house, which was actually Fagin's hideout."
    },
    {
      question: "What did Oliver see when he woke up at Fagin's place?",
      answer: "Oliver saw Fagin with a box full of expensive objects, such as rings and watches."
    },
    {
      question: "What was Fagin's activity with Dodger and Bates that Oliver witnessed?",
      answer: "Fagin was training Dodger and Bates to pickpocket by pretending to steal from him."
    },
    {
      question: "What happened when Oliver went out with Fagin and the boys the next day?",
      answer: "Oliver witnessed Dodger steal from an old man and was mistakenly accused of being the thief."
    },
    {
      question: "What happened when the old man realized Oliver wasn’t the thief?",
      answer: "The old man, Mr. Brownlow, believed Oliver and took him home after clearing up the misunderstanding."
    },
    {
      question: "What did Fagin and Sikes worry about after Oliver was taken in by Mr. Brownlow?",
      answer: "Fagin and Sikes worried that Oliver would reveal their criminal activities to the police."
    },
    {
      question: "How did Sikes manage to capture Oliver again?",
      answer: "Sikes found Oliver while he was running an errand and dragged him back to Fagin's hideout."
    },
    {
      question: "What did Fagin tell Oliver about a boy who tried to escape?",
      answer: "Fagin told Oliver that the boy was hanged to frighten him."
    },
    {
      question: "What did Sikes plan for Oliver regarding a robbery in Chertsey?",
      answer: "Sikes planned to use Oliver to break into a house in Chertsey because Oliver was small enough to fit through a window."
    },
    {
      question: "What happened to Oliver during the robbery attempt?",
      answer: "Oliver was shot by Mr. Giles, a servant of the house, and left injured in a field."
    },
    {
      question: "Where did Oliver go after being injured during the robbery?",
      answer: "Oliver knocked on the door of the house where the robbery took place, and they took him in and called a doctor."
    },
    {
      question: "How did Oliver’s life change after being taken in by the Maylies?",
      answer: "Oliver was nursed back to health, taught to read and write, and lived happily with the Maylies."
    },
    {
      question: "What illness did Rose Maylie suffer from, and how did Oliver help?",
      answer: "Rose suffered from a serious illness, and Oliver delivered a letter to Dr. Losberne for help."
    },
    {
      question: "What did Oliver see one night that scared him while living with the Maylies?",
      answer: "Oliver saw Fagin at the window and shouted for help, but Dr. Losberne convinced him it was a dream."
    },
    {
      question: "Who was the mysterious man Oliver saw at the inn, and what was his goal?",
      answer: "The man was Monks, and he wanted to know about Oliver's mother to keep him from his inheritance."
    },
    {
      question: "What did Monks discover about Oliver’s mother?",
      answer: "Monks discovered that Oliver’s mother, Agnes, had a locket containing a wedding ring and some hair, which was sold by an old woman."
    },
    {
      question: "What did Nancy overhear about Oliver while helping Sikes?",
      answer: "Nancy overheard that Monks and Fagin were planning to harm Oliver."
    },
    {
      question: "Who did Nancy secretly meet to tell about Fagin’s and Monks' plans?",
      answer: "Nancy met Rose Maylie and told her about the plot to harm Oliver."
    },
    {
      question: "What did Rose and Mr. Brownlow ask Nancy to do, and what was her response?",
      answer: "They asked Nancy to tell everything to the police, but she refused, not wanting to betray Sikes."
    },
    {
      question: "What did Noah Claypole witness that led to Nancy’s death?",
      answer: "Noah saw Nancy secretly meeting with Rose and Mr. Brownlow and reported it to Fagin."
    },
    {
      question: "How did Bill Sikes react when he found out about Nancy’s secret meeting?",
      answer: "Sikes became enraged and murdered Nancy by striking her with a pistol."
    },
    {
      question: "What did Sikes try to do after killing Nancy?",
      answer: "Sikes tried to clean up the blood but eventually fled London."
    },
    {
      question: "How did Sikes die while trying to escape from the police?",
      answer: "Sikes accidentally hanged himself with a rope while trying to escape from a house surrounded by police."
    },
    {
      question: "What did Mr. Brownlow reveal about Monks’ relationship with Oliver?",
      answer: "Mr. Brownlow revealed that Monks was Oliver’s half-brother."
    },
    {
      question: "What agreement did Mr. Brownlow make with Monks?",
      answer: "Monks agreed to sign papers giving Oliver his share of their father’s inheritance."
    },
    {
      question: "What did Mr. Bumble admit regarding Oliver's mother's locket?",
      answer: "Mr. Bumble admitted that he had sold the locket that belonged to Oliver’s mother."
    },
    {
      question: "Where were Toby Crackit and Charley Bates hiding after Fagin’s arrest?",
      answer: "They were hiding in a house on Jacob's Island."
    },
    {
      question: "How did Sikes’ dog lead the police to Sikes?",
      answer: "Sikes’ dog returned to the hideout, leading the police to Sikes."
    },
    {
      question: "What did Sikes accidentally do while trying to escape from the house?",
      answer: "Sikes accidentally hanged himself while trying to lower himself with a rope."
    },
    {
      question: "What was Fagin’s fate after being arrested?",
      answer: "Fagin was sentenced to death for his crimes."
    },
    {
      question: "What did Mr. Brownlow ask Fagin during their last visit?",
      answer: "Mr. Brownlow asked Fagin about the location of the papers related to Oliver's inheritance."
    },
    {
      question: "What happened to Monks after Oliver got his inheritance?",
      answer: "Monks went to America, squandered his money, and eventually died in prison."
    },
    {
      question: "What happened to Mr. Bumble and his wife?",
      answer: "They were dismissed from their positions and ended up poor in the workhouse."
    },
    {
      question: "What did Noah Claypole do after Nancy’s death?",
      answer: "Noah became an informant for the police."
    },
    {
      question: "Where did Oliver live after the events of the story?",
      answer: "Oliver lived with Mr. Brownlow as his adopted son in a country house."
    },
    {
      question: "How was Oliver’s mother remembered after the events?",
      answer: "A white stone was placed on Agnes' grave to honor her memory."
    }
  ];
  
  
  audio.currentTime;
  btnAudio.addEventListener("click", function () {
    if (playingAudio) {
      audio.pause();
      playingAudio = false;
    } else {
      audio.play();
      playingAudio = true;
    }
  });

  // Funzioni
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function displayCard() {
    flashcard.querySelector(".front").textContent =
      flashcards[currentIndex].question;
    flashcard.querySelector(".back").textContent =
      flashcards[currentIndex].answer;
  }

  function nextCard() {
    // Disattiva il pulsante
    nextBtn.disabled = true;
    flashcard.classList.add("animationChangeFlashcard");

    flashcard.addEventListener("animationend", () => {
      flashcard.classList.remove("animationChangeFlashcard");
      nextBtn.disabled = false; // Riattiva il pulsante dopo l'animazione
    });
    flashcard.classList.remove("flipped");
    currentIndex = (currentIndex + 1) % flashcards.length;
    displayCard();
  }

  function switchBackground() {
    currentBg = (currentBg % 5) + 1;
    document.body.style.backgroundImage = `url(./Img/image${currentBg}.jpg)`;
  }

  function createStar() {
    let star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    // Seleziona una stella casuale dal vettore
    let randomIndex = Math.floor(Math.random() * stars.length);
    star.textContent = stars[randomIndex];

    document.body.appendChild(star);

    setTimeout(() => star.remove(), 4500);
  }

  // Event listeners
  nextBtn.addEventListener("click", nextCard);
  flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
  });
  bgSwitchBtn.addEventListener("click", switchBackground);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      nextCard();
    }
  });

  // Inizializzazione
  shuffleArray(flashcards); // Mischia le flashcards
  displayCard();

  setInterval(createStar, 200);
};
