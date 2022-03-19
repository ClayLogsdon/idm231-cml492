var audio = new Audio("Ghibli-Jazz-Piano.mp3");

document.onclick = function() {
  audio.play();
}

let sign = "";
let img = "";
let filmName = "";
let bio = "";
let helpB = "";

const maskAquarius = document.querySelector('.aquarius-button');
const maskpisces = document.querySelector('.pisces-button');
const maskAries = document.querySelector('.aries-button');
const maskTaurus = document.querySelector('.taurus-button');
const maskAGemini = document.querySelector('.gemini-button');
const maskCancer = document.querySelector('.cancer-button');
const maskLeo = document.querySelector('.leo-button');
const maskVirgo = document.querySelector('.virgo-button');
const maskLibra = document.querySelector('.libra-button');
const maskScorpio = document.querySelector('.scorpio-button');
const maskSagittarius = document.querySelector('.sagittarius-button');
const maskCapricorn = document.querySelector('.capricorn-button');

function zodiac(){

    const birthmonth = document.getElementById("month").value;
    const birthday = document.getElementById("day").value;

    if (!birthmonth || !birthday){
      return alert('Please enter date')
    }

    let result = " unknown because you didn't put a valid date.";

    if ((birthmonth == 1 && birthday >= 20) || (birthmonth == 2 && birthday <= 18)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign = "Aquarius";
      img = "graphics/aquarius.jpg";
      filmName = "Spirited Away";
      bio = "Your film is Spirited Away!";
      }
  
    if ((birthmonth == 2&& birthday >= 19) || (birthmonth == 3&& birthday <= 20)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Pisces";
      img="graphics/pisces.jpg";
      filmName="Ponyo";
      bio ="Your film is Ponyo!";
      }

    if ((birthmonth == 3 && birthday >= 21) || (birthmonth == 4 && birthday <= 19)){
     
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Aries";
      img="graphics/aries.jpg";
      filmName="Princess Mononoke";
      bio ="Your film is Princess Mononoke!";
    }
    
    if ((birthmonth == 4 && birthday >= 20)|| (birthmonth == 5 && birthday <= 20)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Taurus";
      img="graphics/taurus.jpg";
      filmName="Totoro";    
      bio ="Your film is Totoro!";
      }
    
    if ((birthmonth == 5 && birthday >= 21) || (birthmonth == 6 && birthday <= 20)){
     
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Gemini";
      img="graphics/gemini.jpg";
      filmName="Kiki's Delivery Service";
      bio ="Your film is Kiki's Delivery Service!";
      }
    
    if ((birthmonth == 6 && birthday >= 21) || (birthmonth == 7 && birthday <= 22)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Cancer";
      img="graphics/cancer.jpg";
      filmName="Secret World of Arriety";
      bio ="Your film is Secret World of Arriety!";
      }

    if ((birthmonth == 7 && birthday >= 23) || (birthmonth == 8 && birthday <= 22)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Leo";
      img="graphics/leo.jpg";
      filmName="Graveyard of the Fireflies";
      bio ="Your film is Graveyard of the Fireflies!";
      }

      if ((birthmonth == 8 && birthday >= 23) || (birthmonth == 9 && birthday <= 22)){

        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Virgo";
        img="graphics/virgo.jpg";
        filmName="When Marnie Was Here";
        bio ="Your film is When Marnie Was Here!";
        }

      if ((birthmonth == 9 && birthday >= 23) || (birthmonth == 10 && birthday <= 22)){
        
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Libra";
        img="graphics/libra.jpg";
        filmName="Ocean Waves";
        bio ="Your film is Ocean Waves!";
      }

      if ((birthmonth == 10 && birthday >= 23) || (birthmonth == 11 && birthday <= 21)){
       
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Scorpio";
        img="graphics/scorpio.jpg";
        filmName="Nausicaa of the Valley of the Wind";
        bio ="Your film is Nausicaa of the Valley of the Wind!"; 
      }

      if ((birthmonth == 11 && birthday >= 22) || (birthmonth == 12 && birthday <= 21)){
        
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Sagittarius";
        img="graphics/sagittarius.jpg";
        filmName="Whisper of the Heart";
        bio ="Your film is Whisper of the Heart!";
        }
    
    if((birthmonth == 12 && birthday >= 22) || (birthmonth == 1 && birthday <= 19)){
       
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Capricorn";
        img="graphics/capricorn.jpg";
        filmName="Howl's Moving Castle";
        bio ="Your film is Howl's Moving Castle";  
      }
        else if ((birthmonth>12||birthday>31) || (birthmonth<1||birthday<1)){
          return alert("Please enter correct date!")
      }

  const charOutput = document.querySelector('.mainresult');
      findCharacter();
  }

function findCharacter(){
  const signName = document.querySelector('.js-sign-name');
  signName.innerHTML = sign;

  const imageName = document.querySelector('.js-character-img');
  imageName.src = img;

  const characterName = document.querySelector('.js-character-name-person');
  characterName.innerHTML = filmName;

  const bioName = document.querySelector('.js-character-bio');
  bioName.innerHTML = bio;

  const revealBox = document.querySelector('.js-character-reveal');
  revealBox.style.display = "block";
}

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', function(event){
  event.preventDefault();
  zodiac();
});

const showHelpBox = () =>{

  const helpBox = document.querySelector('.js-help-box');


  if (helpB){
      helpBox.style.display = "none";
      helpB = false;
  }
  
  else{
      helpBox.style.display = "flex";
      helpB = true;
  }

  rectangle(helpB);
};

maskAquarius.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign = "Aquarius";
    img = "graphics/aquarius.jpg";
    filmName = "Spirited Away";
      bio = "Your film is Spirited Away!";
      findCharacter();
  });
  maskpisces.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Pisces";
    img="graphics/pisces.jpg";
    filmName="Ponyo";
      bio ="Your film is Ponyo!";
      findCharacter();
     
  });
  maskAries.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Aries";
    img="graphics/aries.jpg";
    filmName="Princess Mononoke";
      bio ="Your film is Princess Mononoke!";
      findCharacter();
    
  });
  maskTaurus.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Taurus";
    img="graphics/taurus.jpg";
    filmName="Totoro";    
      bio ="Your film is Totoro!";
      findCharacter();
      
  });
  maskAGemini.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Gemini";
    img="graphics/gemini.jpg";
    filmName="Kiki's Delivery Service";
      bio ="Your film is Kiki's Delivery Service!";
      findCharacter();
    
  });
  maskCancer.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Cancer";
    img="graphics/cancer.jpg";
    filmName="Secret World of Arriety";
      bio ="Your film is Secret World of Arriety!";
      findCharacter();
    
  });
  maskLeo.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Leo";
    img="graphics/leo.jpg";
    filmName="Graveyard of the Fireflies";
      bio ="Your film is Graveyard of the Fireflies!";
      findCharacter();
    
  });
  maskVirgo.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Virgo";
    img="graphics/virgo.jpg";
    filmName="When Marnie Was Here";
      bio ="Your film is When Marnie Was Here!";
      findCharacter();
   
  });
  maskLibra.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Libra";
    img="graphics/libra.jpg";
    filmName="Ocean Waves";
      bio ="Your film is Ocean Waves!";
      findCharacter();
     
  });
  maskScorpio.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Scorpio";
    img="graphics/scorpio.jpg";
    filmName="Nausicaa of the Valley of the Wind";
      bio ="Your film is Nausicaa of the Valley of the Wind!";
      findCharacter();
   
  });
  maskSagittarius.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Sagittarius";
    img="graphics/sagittarius.jpg";
    filmName="Whisper of the Heart";
      bio ="Your film is Whisper of the Heart!";
      findCharacter();
     
  });
  maskCapricorn.addEventListener('click', function(){
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Capricorn";
    img="graphics/capricorn.jpg";
    filmName="Howl's Moving Castle";
      bio ="Your film is Howl's Moving Castle";
      findCharacter();
  
  });

function rectangle(hideB){
  const mainRectangle = document.querySelector('.js-main-rectangle');

  if (hideB){
    mainRectangle.style.display = "none";
  }
  else{
    mainRectangle.style.display = "block";
  }
}

const helpOpenButton = document.querySelector('.js-help-button');
helpOpenButton.addEventListener('click', showHelpBox);

const helpCloseButton = document.querySelector('.js-help-button-close');
helpCloseButton.addEventListener('click', showHelpBox);