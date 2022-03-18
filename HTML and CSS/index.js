var audio = new Audio("../graphics/Ghibli-Jazz-Piano.mp3");

document.onclick = function() {
  audio.play();
}

function zodiacInput() {
  const birthmonth = document.getElementById("month").value;
  const birthday = document.getElementById("day").value;
}

const submitButton = document.querySelector('birthday-selector');
submitButton.addEventListener('click', function(event){
  event.preventDefault();
  zodiac();
});

  const date = document.getElementById('birthday').value;

  const getBday = () => {

    const date = document.getElementById('birthday').value;
 
     if (date.length <= 0) return;
 
     month = parseInt(date.substring(5,7));
     day = parseInt(date.substring(8,10));
 
     bDay();
 };