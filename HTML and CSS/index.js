const ariesBtn = document.getElementById('aries');

ariesBtn.addEventListener('click', function(){
    
  userPicked('aries'); 
});

taurusBtn.addEventListener('click', function()
{
  userPicked('taurus');
});

var audio = new Audio("../graphics/Ghibli-Jazz-Piano.mp3");

document.onclick = function() {
  audio.play();
}

  const getBday = () => {

    const date = document.getElementById('birthday').value;
 
     if (date.length <= 0) return;
 
     month = parseInt(date.substring(5,7));
     day = parseInt(date.substring(8,10));
 
     bDay();
}

if ((birthmonth == 1 && birthday >= 20) || (birthmonth == 2 && birthday <= 18)){
      
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign = "Aquarius";
  charName = "Spirited Away!"
  img = "graphics/Aquarius - Spirited Away.jpg";
  bio = "Your movie is Spirited Away!";

  }

if ((birthmonth == 2&& birthday >= 19) || (birthmonth == 3&& birthday <= 20)){
  
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Pisces";
  img="graphics/pisces-marsella.jpg";
  charName="Luka Peroš · Marsella";
  bio ="You Match with Luka Peroš AKA Marsella from Money Hesit";
    
  }
if ((birthmonth == 3 && birthday >= 21) || (birthmonth == 4 && birthday <= 19)){
 
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Aries";
  img="../graphics/aries-berlin.jpg";
  charName="Pedro Alonso · Berlin";
  bio ="You Match with Pedro Alonso AKA Berlin from Money Hesit";

}

if ((birthmonth == 4 && birthday >= 20)|| (birthmonth == 5 && birthday <= 20)){
  
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Taurus";
  img="../graphics/taurus-raquel-murillo.jpg";
  charName="Itziar Ituño · Raquel Murillo";    
  bio ="You Match with Itziar Ituño AKA Raquel Murillo from Money Hesit";

  }

if ((birthmonth == 5 && birthday >= 21) || (birthmonth == 6 && birthday <= 20)){
 
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Gemini";
  img="../graphics/gemini-rio.jpg";
  charName="Miguel Herrán · Rio";
  bio ="You Match with Miguel Herrán AKA Rio from Money Hesit";

  }

if ((birthmonth == 6 && birthday >= 21) || (birthmonth == 7 && birthday <= 22)){
  
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Cancer";
  img="../graphics/cancer-nairobi.jpg";
  charName="Alba Flores · Nairobi";
  bio ="You Match with Alba Flores AKA Nairobi from Money Hesit";

  }
if ((birthmonth == 7 && birthday >= 23) || (birthmonth == 8 && birthday <= 22)){
  
  document.getElementsByClassName("zodiac-sub-box").innerHTML
  sign="Leo";
  img="../graphics/leo-martin-berrote.jpg";
  charName="Rodrigo de la Serna · Martin Berrote";
  bio ="You Match with Rodrigo de la Serna AKA Martin Berrote from Money Hesit";
  var audio = new Audio ('assets/7-leo-sound.mp3');
  audio.play();

  }
  if ((birthmonth == 8 && birthday >= 23) || (birthmonth == 9 && birthday <= 22)){

    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Virgo";
    img="../graphics/virgo-the-professor.jpg";
    charName="Álvaro Morte · The Professor";
    bio ="You Match with Álvaro Morte AKA The Professor from Money Hesit";
    var audio = new Audio ('assets/8-virgo-sound.mp3');
    audio.play();
    
    }
  if ((birthmonth == 9 && birthday >= 23) || (birthmonth == 10 && birthday <= 22)){
    
    document.getElementsByClassName("zodiac-sub-box").innerHTML
    sign="Libra";
    img="../graphics/libra-tokyo.jpg";
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

 const submitButton = document.querySelector('birthday-selector');
submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  zodiac();
});