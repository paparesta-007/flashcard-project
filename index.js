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
    // HTML
    {
      question: "Qual è la differenza tra i tag `<article>` e `<section>` in HTML5 e come dovrebbero essere utilizzati correttamente?",
      answer: "`<article>` rappresenta un contenuto autonomo e indipendente, come un post di blog o un articolo, mentre `<section>` rappresenta una sezione tematica di un documento, come un capitolo o un gruppo di contenuti correlati."
    },
    {
      question: "In HTML5, come si gestisce l'accessibilità per i contenuti video e audio?",
      answer: "Utilizzando i tag `<video>` e `<audio>` con attributi come `controls`, `autoplay`, e `loop`, e fornendo trascrizioni e sottotitoli tramite `<track>`."
    },
    {
      question: "Come si utilizza l'attributo `data-*` in HTML5 e quali sono le sue applicazioni pratiche?",
      answer: "L'attributo `data-*` è usato per memorizzare dati personalizzati sugli elementi HTML. Può essere utilizzato per associare dati non visibili all'utente e accedervi tramite JavaScript."
    },
  
    // CSS
    {
      question: "Come si implementano le animazioni complesse in CSS3 utilizzando `@keyframes`?",
      answer: "Definendo una regola `@keyframes` che specifica le fasi dell'animazione e utilizzando la proprietà `animation` per applicare l'animazione a un elemento con i parametri di durata, ritardo e velocità."
    },
    {
      question: "Qual è la differenza tra `flex: 1` e `flex: auto` in CSS Flexbox?",
      answer: "`flex: 1` assegna lo spazio disponibile in modo equo tra gli elementi, mentre `flex: auto` consente a un elemento di crescere e restringersi in base al suo contenuto e allo spazio disponibile."
    },
    {
      question: "Come si utilizza la proprietà `grid-template-areas` in CSS Grid e quali sono i suoi vantaggi?",
      answer: "La proprietà `grid-template-areas` consente di definire un layout a griglia utilizzando nomi di aree, semplificando la creazione di layout complessi e migliorando la leggibilità del codice CSS."
    },
  
    // JavaScript
    {
      question: "Come funziona il meccanismo di 'Event Delegation' in JavaScript e quali sono i suoi vantaggi?",
      answer: "Event Delegation sfrutta la propagazione degli eventi (bubbling) per gestire eventi su elementi figli tramite un elemento genitore. Questo riduce il numero di listener e migliora le prestazioni."
    },
    {
      question: "Qual è la differenza tra `Promise.all` e `Promise.race` in JavaScript?",
      answer: "`Promise.all` restituisce una singola promessa che si risolve quando tutte le promesse nell'array sono risolte, mentre `Promise.race` restituisce una promessa che si risolve o si rigetta non appena una delle promesse nell'array è risolta o rigettata."
    },
    {
      question: "Come funziona il 'Prototypal Inheritance' in JavaScript e quali sono i suoi vantaggi rispetto alla 'Classical Inheritance'?",
      answer: "Il 'Prototypal Inheritance' consente agli oggetti di ereditare direttamente da altri oggetti, facilitando la creazione di oggetti basati su prototipi piuttosto che classi, e permettendo una maggiore flessibilità nella creazione di oggetti e nella loro modifica dinamica."
    },
  
    // SQL
    {
      question: "Come ottimizzare le query SQL complesse utilizzando indici e quali sono le implicazioni sul performance tuning?",
      answer: "Gli indici possono accelerare le query migliorando la ricerca e l'ordinamento, ma possono rallentare le operazioni di scrittura e aumentare l'uso dello spazio su disco. È importante bilanciare la creazione di indici con le necessità di performance."
    },
    {
      question: "Come si gestisce la concorrenza nelle transazioni SQL e quali sono le differenze tra i livelli di isolamento 'READ COMMITTED' e 'SERIALIZABLE'?",
      answer: "La concorrenza si gestisce tramite i livelli di isolamento delle transazioni. 'READ COMMITTED' consente di leggere solo dati confermati, evitando letture sporche, mentre 'SERIALIZABLE' garantisce la completa serializzazione delle transazioni, evitando tutte le anomalie di concorrenza."
    },
    {
      question: "Quali sono le differenze tra una 'view' e una 'materialized view' in SQL e come influiscono sulle performance delle query?",
      answer: "Una 'view' è una vista virtuale dei dati che non memorizza i risultati, mentre una 'materialized view' memorizza i risultati fisicamente e può migliorare le performance delle query ma richiede aggiornamenti periodici."
    },
  
    // React
    {
      question: "Qual è il concetto di 'Reconciliation' in React e come influisce sulle prestazioni del rendering dei componenti?",
      answer: "La 'Reconciliation' è il processo con cui React aggiorna il DOM virtuale e il DOM reale in modo efficiente, riducendo al minimo le modifiche al DOM e migliorando le prestazioni del rendering attraverso l'algoritmo di diffing."
    },
    {
      question: "Come si gestisce lo stato globale in un'applicazione React utilizzando Redux e quali sono i principi fondamentali della sua architettura?",
      answer: "Redux gestisce lo stato globale utilizzando un store centralizzato, con azioni che descrivono le modifiche allo stato e reducer che aggiornano lo stato in risposta alle azioni, seguendo il principio dell'immutabilità dello stato."
    },
    {
      question: "Qual è la differenza tra i 'context' e 'props drilling' in React e come il Context API può semplificare la gestione dello stato?",
      answer: "Il 'context' permette di passare dati attraverso l'albero dei componenti senza passare esplicitamente le props, mentre il 'props drilling' richiede di passare le props attraverso ogni livello dell'albero. Il Context API semplifica la gestione dello stato globale evitando il 'props drilling'."
    },
  
    // Altri
    {
      question: "Come funziona il modello di sicurezza 'Same-Origin Policy' e quali sono le sue implicazioni per le richieste cross-origin?",
      answer: "La 'Same-Origin Policy' impedisce a documenti o script provenienti da una sorgente diversa di accedere ai dati di un altro dominio, proteggendo dalle vulnerabilità di sicurezza come il Cross-Site Scripting (XSS). Per le richieste cross-origin, si utilizzano le intestazioni CORS per consentire l'accesso."
    },
    {
      question: "Qual è il ruolo dei 'Web Workers' in JavaScript e come possono migliorare le performance delle applicazioni web?",
      answer: "I 'Web Workers' eseguono script in background, separati dal thread principale, permettendo l'esecuzione di operazioni intensive senza bloccare l'interfaccia utente e migliorando le performance complessive dell'applicazione web."
    },
    {
      question: "Come funziona il processo di 'Server-Side Rendering' (SSR) in React e quali sono i suoi vantaggi rispetto al 'Client-Side Rendering' (CSR)?",
      answer: "Il 'Server-Side Rendering' genera HTML sul server prima di inviarlo al client, migliorando i tempi di caricamento iniziale e la SEO. Al contrario, il 'Client-Side Rendering' genera HTML direttamente nel browser, potendo risultare più lento all'avvio."
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
