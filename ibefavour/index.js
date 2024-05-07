
// Headline text

function displayWord() {
	var words = document.getElementsByClassName("toggle");
  var wordCounter = 0;
  
  setInterval(updateWord,1000);
  
  function updateWord() {
  	if (wordCounter >= words.length) wordCounter = 0;
  	for(var i = 0; i < words.length; i++) {
    	words[i].classList.remove('active');
    }
		words[wordCounter].classList.add('active');
   	wordCounter++;
  }
}
displayWord();