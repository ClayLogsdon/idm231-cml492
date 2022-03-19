const horoscope = "";
const picture = "";
const description = "";
const help = "";

//  images as button 

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


function zodiacSelector(){
    // changed these to const bc they're not gonna change
    const birthmonth = document.getElementById("month").value;
    const birthday = document.getElementById("day").value;

    if ((birthmonth == 1 && birthday >= 20) || (birthmonth == 2 && birthday <= 18)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign = "Aquarius";
      picture = "graphics/aquarius-monica-gaztambide.jpg";
      description = "You Match with Esther Acebo AKA Monica Gaztambide from Money Hesit";
      }
  
    if ((birthmonth == 2&& birthday >= 19) || (birthmonth == 3&& birthday <= 20)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Pisces";
      img="graphics/pisces-marsella.jpg";
      charName="Luka Peroš · Marsella";
      bio ="You Match with Luka Peroš AKA Marsella from Money Hesit";
      var audio = new Audio ('assets/2-pisces-sound.mp3');
      audio.play();
        
      }
    if ((birthmonth == 3 && birthday >= 21) || (birthmonth == 4 && birthday <= 19)){
     
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      horoscope="Aries";
      img="graphics/aries-berlin.jpg";
      charName="Pedro Alonso · Berlin";
      bio ="You Match with Pedro Alonso AKA Berlin from Money Hesit";
      
    }
    
    if ((birthmonth == 4 && birthday >= 20)|| (birthmonth == 5 && birthday <= 20)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      horoscope="Taurus";
      img="graphics/taurus-raquel-murillo.jpg";
      charName="Itziar Ituño · Raquel Murillo";    
      bio ="You Match with Itziar Ituño AKA Raquel Murillo from Money Hesit";
      var audio = new Audio ('assets/4-taurus-sound.mp3');
      audio.play();

      }
    
    if ((birthmonth == 5 && birthday >= 21) || (birthmonth == 6 && birthday <= 20)){
     
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Gemini";
      img="graphics/gemini-rio.jpg";
      charName="Miguel Herrán · Rio";
      bio ="You Match with Miguel Herrán AKA Rio from Money Hesit";
      var audio = new Audio ('assets/5-gemini-sound.mp3');
      audio.play();

      }
    
    if ((birthmonth == 6 && birthday >= 21) || (birthmonth == 7 && birthday <= 22)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      zodiac="Cancer";
      img="graphics/cancer-nairobi.jpg";
      charName="Alba Flores · Nairobi";
      bio ="You Match with Alba Flores AKA Nairobi from Money Hesit";
      var audio = new Audio ('assets/6-cancer-sound.mp3');
      audio.play();

      }
    if ((birthmonth == 7 && birthday >= 23) || (birthmonth == 8 && birthday <= 22)){
      
      document.getElementsByClassName("zodiac-sub-box").innerHTML
      sign="Leo";
      img="graphics/leo-martin-berrote.jpg";
      charName="Rodrigo de la Serna · Martin Berrote";
      bio ="You Match with Rodrigo de la Serna AKA Martin Berrote from Money Hesit";
      var audio = new Audio ('assets/7-leo-sound.mp3');
      audio.play();

      }
      if ((birthmonth == 8 && birthday >= 23) || (birthmonth == 9 && birthday <= 22)){

        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Virgo";
        img="graphics/virgo-the-professor.jpg";
        charName="Álvaro Morte · The Professor";
        bio ="You Match with Álvaro Morte AKA The Professor from Money Hesit";
        var audio = new Audio ('assets/8-virgo-sound.mp3');
        audio.play();
        
        }
      if ((birthmonth == 9 && birthday >= 23) || (birthmonth == 10 && birthday <= 22)){
        
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Libra";
        img="graphics/libra-tokyo.jpg";
        charName="Úrsula Corberó · Tokyo";
        bio ="You Match with Úrsula Corberó AKA Tokyo from Money Hesit";
        var audio = new Audio ('assets/9-libra-sound.mp3');
        audio.play();

      }
      if ((birthmonth == 10 && birthday >= 23) || (birthmonth == 11 && birthday <= 21)){
       
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Scorpio";
        img="graphics/scorpio-denver.jpg";
        charName="Jaime Lorente · Denver";
        bio ="You Match with Jaime Lorente AKA Denver from Money Hesit";
        var audio = new Audio ('assets/10-scorpio-sound.mp3');
        audio.play();
        
      }
      if ((birthmonth == 11 && birthday >= 22) || (birthmonth == 12 && birthday <= 21)){
        
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Sagittarius";
        img="graphics/sagittarius-bogota.jpg";
        charName="Hovik Keuchkerian · Bogota";
        bio ="You Match with Hovik Keuchkerian AKA Bogota from Money Hesit";
        var audio = new Audio ('assets/11-sagittarius-sound.mp3');
        audio.play();
        
        }
    
    if((birthmonth == 12 && birthday >= 22) || (birthmonth == 1 && birthday <= 19)){
       
        document.getElementsByClassName("zodiac-sub-box").innerHTML
        sign="Capricorn";
        img="graphics/capricorn-helsinki.jpg";
        charName="Darko Perić · Helsinki";
        bio ="You Match with Darko Perić AKA Helsinki from Money Hesit";
        var audio = new Audio ('assets/12-capricorn-sound.mp3');
        audio.play();
        
      }
        else if (birthmonth>12||birthday>31){
          return alert("Please enter an accurate date !!!")
  

      }

  const charOutput = document.querySelector('.output');
  
   
      setCharacter();
  }

function setCharacter(){
  const signName = document.querySelector('.js-sign-name');
  signName.innerHTML = sign;

  const imageName = document.querySelector('.js-character-img');
  imageName.src = img;

  const characterName = document.querySelector('.js-character-name-person');
  characterName.innerHTML = charName;

  const bioName = document.querySelector('.js-character-bio');
  bioName.innerHTML = bio;

  const revealBox = document.querySelector('.js-character-reveal');
  revealBox.style.display = "block";
}


// event listener for the submit button
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', function(event){
  event.preventDefault();
  zodiac();
});

// help box 
const showHelpBox = () =>{

  const helpBox = document.querySelector('.js-help-box');

  // show and hide box
  if (helping){
      helpBox.style.display = "none";
      helping = false;
  }
  
  else{
      helpBox.style.display = "flex";
      helping = true;
  }

  rectangle(helping);
};
//  main box hide when helping and show when not helping
function rectangle(hiding){
  const mainRectangle = document.querySelector('.js-main-rectangle');
  if (hiding){
    mainRectangle.style.display = "none";
  }
  else{
    mainRectangle.style.display = "block";
  }
}
//  event listener for help open button 
const helpOpenButton = document.querySelector('.js-help-button');
helpOpenButton.addEventListener('click', showHelpBox);

//  event listener for help close button
const helpCloseButton = document.querySelector('.js-help-button-close');
helpCloseButton.addEventListener('click', showHelpBox);

// event listener for images button
maskAquarius.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign = "Aquarius";
  img = "graphics/aquarius-monica-gaztambide.jpg";
  charName = "Esther Acebo · Monica Gaztambide";
  bio = "You Match with Esther Acebo AKA Monica Gaztambide from Money Hesit";
  setCharacter();
  var audio = new Audio ('assets/1-aquarius-sound.mp3');
  audio.play();
});
maskpisces.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Pisces";
  img="graphics/pisces-marsella.jpg";
  charName="Luka Peroš · Marsella";
  bio ="You Match with Luka Peroš AKA Marsella from Money Hesit";
  setCharacter();
  var audio = new Audio ('assets/2-pisces-sound.mp3');
  audio.play();  
});
maskAries.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Aries";
  img="graphics/aries-berlin.jpg";
  charName="Pedro Alonso · Berlin";
  bio ="You Match with Pedro Alonso AKA Berlin from Money Hesit";
  setCharacter();
  var audio = new Audio ('assets/3-aries-sound.mp3');
  audio.play();
});
maskTaurus.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Taurus";
  img="graphics/taurus-raquel-murillo.jpg";
  charName="Itziar Ituño · Raquel Murillo";    
  bio ="You Match with Itziar Ituño AKA Raquel Murillo from Money Hesit";
  setCharacter();
  var audio = new Audio ('assets/4-taurus-sound.mp3');
  audio.play();  
});
maskAGemini.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Gemini";
  img="graphics/gemini-rio.jpg";
  charName="Miguel Herrán · Rio";
  bio ="You Match with Miguel Herrán AKA Rio from Money Hesit";
  setCharacter();
  var audio = new Audio ('assets/5-gemini-sound.mp3');
  audio.play();  
});
maskCancer.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Cancer";
  img="graphics/cancer-nairobi.jpg";
  charName="Alba Flores · Nairobi";
  bio ="You Match with Alba Flores AKA Nairobi from Money Hesit";
  setCharacter();
  var audio = new Audio ('assets/6-cancer-sound.mp3');
  audio.play();  
});
maskLeo.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Leo";
  img="graphics/leo-martin-berrote.jpg";
  charName="Rodrigo de la Serna · Martin Berrote";
  bio ="You Match with Rodrigo de la Serna AKA Martin Berrote from Money Hesit";
  setCharacter();
  var audio = new Audio ('assets/7-leo-sound.mp3');
  audio.play();  
});
maskVirgo.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Virgo";
  img="graphics/virgo-the-professor.jpg";
  charName="Álvaro Morte · The Professor";
  bio ="You Match with Álvaro Morte AKA The Professor from Money Hesit";
  setCharacter();
  var audio = new Audio ('assets/8-virgo-sound.mp3');
  audio.play();  
});
maskLibra.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Libra";
  img="graphics/libra-tokyo.jpg";
  charName="Úrsula Corberó · Tokyo";
  bio ="You Match with Úrsula Corberó AKA Tokyo from Money Hesit";
  setCharacter();
  var audio = new Audio ('assets/9-libra-sound.mp3');
  audio.play();  
});
maskScorpio.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Scorpio";
  img="graphics/scorpio-denver.jpg";
  charName="Jaime Lorente · Denver";
  bio ="You Match with Jaime Lorente AKA Denver from Money Hesit";
  setCharacter();
  var audio = new Audio ('assets/10-scorpio-sound.mp3');
  audio.play();  
});
maskSagittarius.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Sagittarius";
  img="graphics/sagittarius-bogota.jpg";
  charName="Hovik Keuchkerian · Bogota";
  bio ="You Match with Hovik Keuchkerian AKA Bogota from Money Hesit";
  setCharacter();
  var audio = new Audio ('assets/11-sagittarius-sound.mp3');
  audio.play();  
});
maskCapricorn.addEventListener('click', function(){
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Capricorn";
  img="graphics/capricorn-helsinki.jpg";
  charName="Darko Perić · Helsinki";
  bio ="You Match with Darko Perić AKA Helsinki from Money Hesit";
  setCharacter();
  var audio = new Audio ('assets/12-capricorn-sound.mp3');
  audio.play();
});